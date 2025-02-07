# AtmoApp
Project implementing core concepts of computer networks to a web app for fire alerts and warnings in California.

## Github Terminal Guide

### Cloning the Repository:
git clone https://github.com/mateoFrancis/AtmoApp

### Pushing commands
 git add filename  &nbsp;&nbsp;# Stage a specific file
 
 git add .                &nbsp;&nbsp;# Stage all changes
 
 git commit -m "your message here"    &nbsp;&nbsp;# Commit changes
 
 git push origin main     &nbsp;&nbsp;# Push to GitHub

### Pulling commands
git pull origin main

### Stashing commands 
git stash                 &nbsp;&nbsp;# Stash local changes before pulling or pushing

git pull origin main      &nbsp;&nbsp;# Pull after stashing if needed

git stash pop             &nbsp;&nbsp;# Reapply stashed changes after pulling, then try pushing

## Merging Conflicts
### Ensure Merging Conflicts don't affect critical code

ex:

```text
<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> remote/main
```

Manually remove the conflict markers (<<<<<<<, =======, >>>>>>>)

Then push

If merge conflicts persist, try stashing



