# Script to scan project folders and output the actual image filenames
$projectsPath = "public\projects"
$folders = Get-ChildItem -Path $projectsPath -Directory

$results = @()

foreach ($folder in $folders) {
    $images = Get-ChildItem -Path $folder.FullName -Filter "*.jpg","*.JPG","*.png","*.PNG" -File | Sort-Object Name | Select-Object -First 5
    
    if ($images) {
        $imageList = $images | ForEach-Object { "`"/projects/$($folder.Name)/$($_.Name)`"" }
        $result = @{
            FolderName = $folder.Name
            FirstImage = "/projects/$($folder.Name)/$($images[0].Name)"
            AllImages = $imageList -join ", "
        }
        $results += $result
        
        Write-Host "Folder: $($folder.Name)"
        Write-Host "  Main Image: $($result.FirstImage)"
        Write-Host "  Gallery: [$($result.AllImages)]"
        Write-Host ""
    }
}
