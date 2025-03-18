


### if changes are made in restricted paths then undo the changes using the following command
```bash 
git restore --source=origin/main  -- .github .eslintignore bashScripts .gitignore .eslintrc.json next.config.mjs tsconfig.json
```

### remove file_details.json from git
```bash
git ls-files "b2fPortal/**/file_details.json" | xargs git rm --cached
```