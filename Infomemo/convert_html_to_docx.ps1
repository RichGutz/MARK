param (
    [string]$HtmlPath,
    [string]$DocxPath
)

# Constants
$wdFormatXMLDocument = 12 # .docx
$wdDoNotSaveChanges = 0

# Check paths
if (-not (Test-Path $HtmlPath)) {
    Write-Host "Error: HTML not found at $HtmlPath"
    exit 1
}

$HtmlPath = Resolve-Path $HtmlPath
$DocxPath = [System.IO.Path]::GetFullPath($DocxPath)

Write-Host "Starting Word Application..."
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = $wdDoNotSaveChanges

try {
    Write-Host "Opening HTML document..."
    # Open HTML
    $doc = $word.Documents.Open($HtmlPath, $false, $false) 
    
    # Optional: Setup View/Layout if needed (e.g. PrintLayout)
    $word.ActiveWindow.View.Type = 3 # wdPrintView

    Write-Host "Saving as DOCX..."
    $doc.SaveAs2($DocxPath, $wdFormatXMLDocument)
    
    Write-Host "Conversion successful: $DocxPath"
}
catch {
    Write-Host "Error during conversion: $_"
    exit 1
}
finally {
    if ($doc) {
        $doc.Close($wdDoNotSaveChanges)
    }
    $word.Quit()
    # Cleanup COM
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    [System.GC]::Collect()
    [System.GC]::WaitForPendingFinalizers()
}
