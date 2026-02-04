param (
    [string]$DocxPath,
    [string]$PdfPath
)

# Constants
$wdFormatPDF = 17
$wdDoNotSaveChanges = 0

# Check paths
if (-not (Test-Path $DocxPath)) {
    Write-Host "Error: DOCX not found at $DocxPath"
    exit 1
}

$DocxPath = Resolve-Path $DocxPath
$PdfPath = [System.IO.Path]::GetFullPath($PdfPath)

Write-Host "Starting Word Application..."
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = $wdDoNotSaveChanges

try {
    Write-Host "Opening document..."
    $doc = $word.Documents.Open($DocxPath, $false, $true) # ReadOnly
    
    Write-Host "Saving as PDF..."
    $doc.SaveAs2($PdfPath, $wdFormatPDF)
    
    Write-Host "Conversion successful: $PdfPath"
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
