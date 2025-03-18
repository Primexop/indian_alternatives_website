#!/bin/bash

# Function to display error message and exit
display_error() {
    echo "Error: $1"
    echo "Press any key to close..."
    read -n 1 -s -r -p ""
    exit 1
}

# Check if package.json exists
if [ ! -f "package.json" ]; then
    display_error "package.json not found."
fi

# Checkout preRelease branch and pull latest changes
git checkout main || display_error "Failed to checkout main branch."
git pull origin main || display_error "Failed to pull changes from main branch."
git push origin main || display_error "Failed to pull changes from main branch."

# Get current version from package.json
current_version=$(jq -r '.version' package.json) || display_error "Failed to read version from package.json."

# Increment version number
IFS='.' read -ra version_parts <<< "$current_version"
major="${version_parts[0]}"
minor="${version_parts[1]}"
patch="${version_parts[2]}"
((patch++))

# Update version in package.json
new_version="$major.$minor.$patch"
jq --arg new_version "$new_version" '.version |= $new_version' package.json > temp.json && mv temp.json package.json || display_error "Failed to update version in package.json."
echo "Version incremented from $current_version to $new_version"

# Push changes to main branch
git add . || display_error "Failed to stage changes."


# Run npm install in the background
npm install
# Wait for the npm install process to finish
wait $! || display_error "Failed to install npm packages."

git commit -m "Increment version to $new_version" || display_error "Failed to commit changes."
git push origin main || display_error "Failed to push changes to main branch."



# Pull latest changes from main branch
git pull origin main --no-edit || display_error "Failed to pull changes from main branch."

echo "Task completed successfully."
