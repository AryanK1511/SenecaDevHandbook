#!/bin/bash

# List of repositories to delete workflow runs
REPOSITORIES=(
    "AryanK1511/SenecaDevHandbook"
)

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Please install from: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated with GitHub CLI"
    echo "Please run: gh auth login"
    exit 1
fi

# Delete workflow runs for each repository
for REPO in "${REPOSITORIES[@]}"; do
    echo "Deleting workflow runs in repository: $REPO"

    # Get all workflow run IDs and delete them
    while read -r RUN_ID; do
        if [[ -n "$RUN_ID" ]]; then
            echo "  Deleting workflow run: $RUN_ID"
            gh api -X DELETE "repos/$REPO/actions/runs/$RUN_ID"
        fi
    done < <(gh api "repos/$REPO/actions/runs" --paginate | jq '.workflow_runs[].id')
done

echo "All workflow runs deleted successfully."
