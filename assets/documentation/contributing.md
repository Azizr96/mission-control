# Contributing Guide

Welcome!

To keep the project organized and avoid conflicts, **every feature or bug fix must follow the workflow below.**

> **Never commit or push directly to the `main` branch.**

---

# Workflow

## 1. Update your local `main`

Before starting a new task, download the latest changes from the `main` branch.

```bash
git checkout main
git pull origin main
```

---

## 2. Create a new branch

Create a new branch from `main`.

```bash
git checkout -b feature/your-feature-name
```

Examples:

```
feature/login-page
feature/navbar
feature/contact-form
bugfix/mobile-menu
```

> **One branch = One feature**

---

## 3. Implement your feature

Write your code only in your feature branch.

When your work is finished:

- Make sure everything works correctly.
- Test your changes before continuing.

---

## 4. Commit your changes

Save your work with a meaningful commit message.

```bash
git add .
git commit -m "Add login page"
```

Examples:

```
Add navigation bar
Create contact page
Fix mobile menu
```

---

## 5. Update your branch with the latest `main`

Before pushing your code, make sure your branch contains the latest changes from `main`.

```bash
git checkout main
git pull origin main
git checkout feature/your-feature-name
git merge main
```

If Git reports any merge conflicts, resolve them before continuing.

---

## 6. Push your branch

Upload your branch to GitHub.

```bash
git push origin feature/your-feature-name
```

---

## 7. Create a Pull Request

1. Open the repository on GitHub.
2. Click **Compare & pull request**.
3. Create a Pull Request from your feature branch into `main`.
4. Add a short title and description.
5. Wait for the Pull Request to be reviewed before merging.

---

# Before Creating a Pull Request

Please make sure that:

- ✅ The project runs successfully.
- ✅ Your feature works as expected.
- ✅ You only changed files related to your task.
- ✅ Your branch has been updated with the latest `main`.

---

# Rules

- ❌ Never work directly on `main`.
- ✅ Create a new branch for every feature or bug fix.
- ✅ One branch should contain only one feature or one bug fix.
- ✅ Update your branch with the latest `main` before pushing.
- ✅ Always create a Pull Request.
- ✅ Wait for review before merging.

---

# Quick Workflow

```text
Update main
      │
      ▼
Create feature branch
      │
      ▼
Implement feature
      │
      ▼
Commit changes
      │
      ▼
Update branch with latest main
      │
      ▼
Push branch
      │
      ▼
Create Pull Request
      │
      ▼
Review & Merge
```