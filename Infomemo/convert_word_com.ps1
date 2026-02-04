param (
    [string]$DocxPath,
    [string]$HtmlPath
)

# Constants
$wdFormatFilteredHTML = 10
$wdDoNotSaveChanges = 0

# Check paths
if (-not (Test-Path $DocxPath)) {
    Write-Host "Error: DOCX not found at $DocxPath"
    exit 1
}

$DocxPath = Resolve-Path $DocxPath
$HtmlPath = [System.IO.Path]::GetFullPath($HtmlPath)

Write-Host "Starting Word Application..."
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = $wdDoNotSaveChanges

try {
    Write-Host "Opening document..."
    $doc = $word.Documents.Open($DocxPath, $false, $true) # ReadOnly
    
    Write-Host "Saving as Filtered HTML..."
    $doc.SaveAs2($HtmlPath, $wdFormatFilteredHTML)
    
    Write-Host "Conversion successful: $HtmlPath"
}
catch {
    Write-Host "Error during conversion: $_"
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
