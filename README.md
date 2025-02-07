# AtmoApp
Project implementing core concepts of computer networks to a web app for fire alerts and warnings in California.

## Github Terminal Guide

### Cloning the Repository:
git clone https://github.com/mateoFrancis/AtmoApp

### Pushing commands
git add filename       # Stage a specific file
git add .             # Stage all changes
git commit -m "your message here" # Commit changes
git push origin main  # Push to GitHub

### Pulling commands
git pull origin main

### Stashing commands 
git stash              # Stash local changes before pulling or pushing
git pull origin main   # Pull after stashing if needed
git stash pop          # Reapply stashed changes after pulling
                       # Push
### Ensure Merging Conflicts don't affect critical code
## Merging Conflicts
'<<<<<<< HEAD
Your changes
=======
Their changes
>>>>>>> remote/main'
Manually remove the conflict markers (<<<<<<<, =======, >>>>>>>)
Push
If merge conflicts persist, try stashing


