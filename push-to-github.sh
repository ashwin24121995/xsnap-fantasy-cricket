#!/bin/bash

echo "================================================"
echo "XSNAP Fantasy Cricket - GitHub Push Script"
echo "================================================"
echo ""

# Check if GitHub username is provided
if [ -z "$1" ]; then
    echo "Usage: ./push-to-github.sh YOUR_GITHUB_USERNAME"
    echo ""
    echo "Example: ./push-to-github.sh ashwin24121995"
    exit 1
fi

GITHUB_USERNAME=$1
REPO_NAME="xsnap-fantasy-cricket"

echo "Step 1: Creating GitHub repository..."
echo "---------------------------------------"
gh repo create $GITHUB_USERNAME/$REPO_NAME --public --confirm --description "XSNAP Fantasy Cricket - Free-to-play fantasy cricket platform"

echo ""
echo "Step 2: Adding GitHub remote..."
echo "---------------------------------------"
git remote add github https://github.com/$GITHUB_USERNAME/$REPO_NAME.git 2>/dev/null || git remote set-url github https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo ""
echo "Step 3: Pushing code to GitHub..."
echo "---------------------------------------"
git push -u github main

echo ""
echo "================================================"
echo "✓ Successfully pushed to GitHub!"
echo "================================================"
echo ""
echo "Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""
echo "Next Steps:"
echo "1. Go to https://railway.app"
echo "2. Create new project from GitHub repo"
echo "3. Set environment variables (see RAILWAY_DEPLOYMENT.md)"
echo "4. Deploy!"
echo ""
