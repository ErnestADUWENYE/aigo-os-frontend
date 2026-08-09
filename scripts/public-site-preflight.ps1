$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host ""
Write-Host "AIGO-OS PUBLIC WEBSITE PREFLIGHT" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor DarkCyan

$failed = $false

function Fail($message) {
  $script:failed = $true
  Write-Host "[FAIL] $message" -ForegroundColor Red
}

function Pass($message) {
  Write-Host "[PASS] $message" -ForegroundColor Green
}

Write-Host ""
Write-Host "1. Brand naming" -ForegroundColor Yellow

$brandMatches = Get-ChildItem app,components,styles -Recurse -File |
  Where-Object {
    $_.Extension -in '.tsx','.ts','.css'
  } |
  Select-String -Pattern '\bAIGO\b(?!-OS)' -CaseSensitive

if ($brandMatches) {
  Fail "Standalone AIGO references found."
  $brandMatches |
    Select-Object Path, LineNumber, Line |
    Format-Table -AutoSize
}
else {
  Pass "No standalone AIGO references."
}

Write-Host ""
Write-Host "2. Encoding corruption" -ForegroundColor Yellow

$encodingMatches = Get-ChildItem app,components,styles -Recurse -File |
  Where-Object {
    $_.Extension -in '.tsx','.ts','.css'
  } |
  Select-String -Pattern 'â†|â€™|â€œ|â€|Ã' -CaseSensitive

if ($encodingMatches) {
  Fail "Possible UTF-8 corruption found."
  $encodingMatches |
    Select-Object Path, LineNumber, Line |
    Format-Table -AutoSize
}
else {
  Pass "No common encoding corruption detected."
}

Write-Host ""
Write-Host "3. Public internal routes" -ForegroundColor Yellow

$hrefMatches = Get-ChildItem 'app\(public)',components -Recurse -File |
  Where-Object {
    $_.Extension -in '.tsx','.ts'
  } |
  Select-String -Pattern 'href="(/[^"#?]*)"' -AllMatches

$routes = foreach ($match in $hrefMatches) {
  foreach ($item in $match.Matches) {
    $item.Groups[1].Value
  }
}

$routes = $routes |
  Where-Object {
    $_ -and
    $_ -ne '/' -and
    $_ -notmatch '^/api/'
  } |
  Sort-Object -Unique

foreach ($route in $routes) {
  $relative = $route.TrimStart('/') -replace '/', '\'

  $publicPage = "app\(public)\$relative\page.tsx"
  $authPage = "app\(auth)\$relative\page.tsx"
  $authCatchAll = "app\(auth)\$relative\[[...$($relative.Split('\')[-1])]]\page.tsx"

  if (
    (Test-Path $publicPage) -or
    (Test-Path $authPage) -or
    (Test-Path $authCatchAll)
  ) {
    Pass "$route"
  }
  else {
    Fail "No page found for $route"
  }
}

Write-Host ""
Write-Host "4. Backup files" -ForegroundColor Yellow

$backups = Get-ChildItem . -Recurse -File |
  Where-Object {
    $_.FullName -notmatch '\\node_modules\\|\\.next\\|\\.git\\' -and
    $_.Name -match '\.(backup|bak|old)$'
  }

if ($backups) {
  Write-Host "[WARN] Backup files remain in the worktree:" -ForegroundColor DarkYellow
  $backups |
    Select-Object FullName |
    Format-Table -AutoSize
}
else {
  Pass "No backup files detected."
}

Write-Host ""
Write-Host "5. TypeScript / production build" -ForegroundColor Yellow
Write-Host "Run separately before visual QA:" -ForegroundColor Gray
Write-Host "npm run build" -ForegroundColor White

Write-Host ""

if ($failed) {
  Write-Host "PREFLIGHT FAILED" -ForegroundColor Red
  exit 1
}

Write-Host "PREFLIGHT PASSED" -ForegroundColor Green
exit 0