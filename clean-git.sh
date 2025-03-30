#!/bin/bash

# Make sure the .gitignore file is correct
echo "# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts" > .gitignore

# Remove node_modules from Git tracking
git rm -r --cached node_modules
git add .gitignore
git commit -m "Remove node_modules and add proper .gitignore"

# Use Git filter-branch to remove large files from history
git filter-branch --force --index-filter \
  "git rm -r --cached --ignore-unmatch node_modules" \
  --prune-empty --tag-name-filter cat -- --all

# Clean up refs and garbage collect
git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo "Completed cleaning Git history. Use 'git push origin main:main --force' to update the remote repository."