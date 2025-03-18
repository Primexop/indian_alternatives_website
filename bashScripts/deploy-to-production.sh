#!/bin/bash

# Function to display error message and exit
display_error() {
    echo "Error: $1"
    echo "Press any key to close..."
    read -n 1 -s -r -p ""
    exit 1
}

git pull origin stable --strategy-option=ours --no-edit || display_error "Failed to pull changes from stable branch."

# Check if there are any uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    display_error "There are uncommitted changes. Please commit or stash your changes before running this script."
fi

# Check if the current branch is main
if [ "$(git branch --show-current)" != "main" ]; then
    display_error "You must be on the main branch to run this script."
fi

# Load last deployment information from deploy.json
if [ -f "deploy.json" ]; then
    last_deploy=$(jq -r '.last_deploy' deploy.json)
    last_hash=$(jq -r '.hash' deploy.json)
    last_version=$(jq -r '.version' deploy.json)
else
    last_deploy=""
    last_hash=""
    last_version=""
fi




# Check if package.json exists
if [ ! -f "package.json" ]; then
    display_error "Error: package.json not found."
fi

# Get current version from package.json
current_version=$(jq -r '.version' package.json)

# Check if the current version matches the last version in deploy.json
# Check if the current version matches the last version in deploy.json
if [ "$current_version" == "$last_version" ]; then
   echo "Incrementing version..."
    # Auto-increment version using npm script
        bash bashScripts/increment-version.sh || display_error "Failed to auto-increment version using npm script."
        # Reload current version from package.json
        current_version=$(jq -r '.version' package.json) || display_error "Failed to read version from package.json after auto-increment."
fi








# Get current date and time
datetime=$(date +"%Y-%m-%d %T")

# Store date, hash, and version in deploy.json
echo "{\"last_deploy\": \"$datetime\", \"hash\": \"$last_hash\", \"version\": \"$current_version\"}" > deploy.json

# Add the deploy.json file to the staging area
git add .

# Commit changes with a message including the date and time
git commit -m "$datetime-V$current_version Production Deployment" 

git push origin main


gh pr create --base stable --head main --title "V$current_version Deploy PR" --body "$datetime-V$current_version Production Deployment"

gh pr view --web







echo "Deployment Pr created successfully."
