# AtmoApp
Project implementing core concepts of computer networks to a web app for fire alerts and warnings in California.

## Github Terminal Guide
<br><br>

### Cloning the Repository:
git clone https://github.com/mateoFrancis/AtmoApp
<br><br>

### Pushing commands
 git add filename  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Stage a specific file
 
 git add .                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Stage all changes
 
 git commit -m "your message here"    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Commit changes
 
 git push origin main     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Push to GitHub
<br><br>

### Pulling commands
git pull origin main
<br><br>

### Stashing commands 
git stash                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Stash local changes before pulling or pushing

git pull origin main      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Pull after stashing if needed

git stash pop             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Reapply stashed changes after pulling, then try pushing
<br><br>

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



