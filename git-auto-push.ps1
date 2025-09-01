param(
    [string]$msg = "auto-update"
)

git add .
git commit -m "$msg"
git push
