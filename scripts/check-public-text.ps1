$ErrorActionPreference = 'Stop'

Set-Location 'C:\Projects\AIGO\aigo-os-public-worktree'

$issues = @()

$roots = @(
    'app\(public)',
    'components',
    'styles'
)

foreach ($root in $roots) {

    if (-not (Test-Path -LiteralPath $root)) {
        continue
    }

    $files = Get-ChildItem -LiteralPath $root -Recurse -File |
        Where-Object {
            $_.Extension -in '.ts', '.tsx', '.css', '.js', '.jsx', '.md', '.json'
        }

    foreach ($file in $files) {

        $lineNumber = 0

        foreach ($line in Get-Content -LiteralPath $file.FullName) {

            $lineNumber++

            $badCharacters = @(
                $line.ToCharArray() |
                Where-Object { [int]$_ -gt 127 }
            )

            if ($badCharacters.Count -gt 0) {

                $codes = (
                    $badCharacters |
                    ForEach-Object {
                        'U+' + ([int]$_).ToString('X4')
                    } |
                    Select-Object -Unique
                ) -join ', '

                $issues += [PSCustomObject]@{
                    File  = $file.FullName
                    Line  = $lineNumber
                    Codes = $codes
                    Text  = $line.Trim()
                }
            }
        }
    }
}

if ($issues.Count -gt 0) {
    Write-Host ""
    Write-Host "FAIL: Non-ASCII characters found." -ForegroundColor Red
    Write-Host ""

    $issues |
        Select-Object File,Line,Codes,Text |
        Format-Table -Wrap -AutoSize

    exit 1
}
else {
    Write-Host ""
    Write-Host "PASS: Public website source contains no non-ASCII characters." -ForegroundColor Green
    exit 0
}
