
# 📘 Git & GitHub Command Reference

---

## 🔧 Configuration

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git config --list
```

---

## 📁 Basic Shell Commands

```bash
cd <folder_name>        # Navigate to folder
cd ..                   # Go back
mkdir <folder_name>     # Create directory
ls                      # List files
ls -a                   # List all (incl. hidden)
clear                   # Clear terminal
```

---

## 🛠 Git Repository Setup

```bash
git init                          # Initialize Git in a folder
git clone <repo_url>             # Clone a remote repo
git remote add origin <url>      # Add remote repo
git remote -v                    # List remotes
```

---

## 📄 File Staging & Committing

```bash
git status                       # Check current status
git add <file>                   # Stage one file
git add .                        # Stage all changes
git commit -m "message"          # Commit staged changes
```

---

## 🚀 Push & Pull

```bash
git push origin main             # Push to remote
git push -u origin main          # Push and set upstream
git pull origin main             # Pull from remote
```

---

## 🌿 Branching

```bash
git branch                       # List branches
git branch -m new-name           # Rename current branch
git checkout <branch>            # Switch to branch
git checkout -b <branch>         # Create and switch
git branch -d <branch>           # Delete branch
```

---

## 🔁 Merging & Diff

```bash
git merge <branch>              # Merge into current branch
git diff <branch>               # Show diff from branch
```

---

## 🧹 Reset & Undo

```bash
git reset <file>                # Unstage a file
git reset                       # Unstage all
git reset --hard                # Remove changes completely
git reset HEAD~1                # Undo last commit
git reset <commit_hash>         # Reset to specific commit
```

---

## 🕓 Logs

```bash
git log                         # View commit history
```

---

## ⬇️ Git Pull from Upstream Repo

```bash
git pull origin main            # Pull from main branch
```

---

## 🌐 Forked Repository Workflow

- Use GitHub UI to:
  - Click **Fork**
  - Edit in your repo
  - Create **Pull Request** to original repo

---

## 🧪 Resolve Merge Conflicts (VS Code)

- Accept Current Change
- Accept Incoming Change
- Accept Both Changes

Or manually edit conflict markers:
```txt
<<<<<<< HEAD
your current branch code
=======
incoming branch code
>>>>>>> feature-branch
```

---

## 🧱 Branch Comparison and Merge via CLI

```bash
git diff main                   # Compare with main
git merge <branch>              # Merge into current
```

---

## 🗃 Create and Work with Local Repo → GitHub

```bash
git remote add origin <repo_url>
git push -u origin main
```

---

## 🧪 Pull after Merge via GitHub

```bash
git pull origin main
```

---

## 🧩 Fix Merge Conflicts in Code Editor

- Use visual merge tools or manually choose desired code block.

---

## 🎯 Final Flow Summary

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repo_url>
git push -u origin main
```
