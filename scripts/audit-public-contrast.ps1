$ErrorActionPreference = "Stop"

$roots = @(
    "app\(public)",
    "components",
    "styles"
)

$patterns = @(
    "#fff",
    "#ffffff",
    "#f8fafc",
    "#f7f9fc",
    "#f6f9fc",
    "#f5f8fc",
    "#f5f8fb",
    "#f4f7fa",
    "#f4f7fb",
    "#eef3f7",
    "#edf5ff",
    "rgba(255,255,255",
    "rgba(255, 255, 255"
)

Write-Host ""
Write-Host "===== AIGO PUBLIC CONTRAST AUDIT =====" -ForegroundColor Cyan

foreach ($root in $roots) {
    if (-not (Test-Path -LiteralPath $root)) {
        continue
    }

    Get-ChildItem -LiteralPath $root -Recurse -File |
        Where-Object {
            $_.Extension -in ".css", ".tsx", ".ts", ".jsx", ".js"
        } |
        Select-String -SimpleMatch -Pattern $patterns |
        Select-Object Path, LineNumber, Line
}

Write-Host ""
Write-Host "===== WHITE / VERY LIGHT TEXT DECLARATIONS =====" -ForegroundColor Yellow

Get-ChildItem -LiteralPath "styles" -Recurse -File -Filter "*.css" |
    Select-String -Pattern `
        'color:\s*(#fff|#ffffff|#f4f7fa|#f5f8ff|#eff7ff)|-webkit-text-fill-color:\s*(#fff|#ffffff|#f4f7fa|#f5f8ff|#eff7ff)' |
    Select-Object Path, LineNumber, Line

Write-Host ""
Write-Host "Audit complete." -ForegroundColor Green
