#!/bin/bash

# Fetch the latest updates from the origin
git fetch origin

# Get the base SHA and the main SHA
BASE_SHA=$(git merge-base origin/main HEAD)
MAIN_SHA=$(git rev-parse origin/main)

# Print the SHAs
# echo "BASE_SHA: $BASE_SHA"
# echo "MAIN_SHA: $MAIN_SHA"

# Check if the branch is up to date with the main branch
if [ "$BASE_SHA" != "$MAIN_SHA" ]; then
  echo "Error : This branch is not up to date with the main branch."
  exit 1
else
  echo "Success : This branch is up to date with the main branch."
  exit 0
fi
