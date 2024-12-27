#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Get the current branch
current_branch=$(git branch --show-current)

echo "You are currently on branch: $current_branch"
echo "Fetching remote branches and pruning..."
git fetch origin --prune

echo "Deleting all local branches except the current branch ($current_branch) and 'main'..."

# Loop through all local branches
for branch in $(git branch | sed 's/^[* ]*//'); do
    if [[ "$branch" != "$current_branch" && "$branch" != "main" ]]; then
        echo "Deleting branch: $branch"
        git branch -D "$branch"
    fi
done

echo "All unnecessary local branches (except '$current_branch' and 'main') have been deleted!"
