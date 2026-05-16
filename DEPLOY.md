# The Gaffer — Deployment Guide

## What's in this folder
```
gaffer/
├── public/
│   ├── index.html       ← App shell
│   ├── manifest.json    ← Makes it installable on your phone
│   ├── icon-192.png     ← App icon
│   └── icon-512.png     ← App icon (large)
├── src/
│   ├── App.js           ← The full app
│   ├── firebase.js      ← Firebase connection
│   └── index.js         ← Entry point
└── package.json         ← Dependencies
```

---

## Step 1 — Upload to GitHub

1. Go to **github.com** and open your `the-gaffer` repository
2. Click **"uploading an existing file"** (or drag and drop)
3. Drag the entire `gaffer` folder contents in (all files and folders)
4. Click **"Commit changes"**

---

## Step 2 — Deploy on Vercel

1. Go to **vercel.com** and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `the-gaffer` repository
4. Vercel will auto-detect it as a React app
5. Click **"Deploy"** — takes about 2 minutes
6. You'll get a URL like `https://the-gaffer-xxx.vercel.app`

---

## Step 3 — Install on your iPhone

1. Open the Vercel URL in **Safari** (must be Safari on iPhone)
2. Tap the **Share** button (box with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"**
5. Done! The Gaffer icon appears on your home screen

---

## Step 4 — Install on Android

1. Open the Vercel URL in **Chrome**
2. Tap the three dots menu (top right)
3. Tap **"Add to Home screen"**
4. Tap **"Add"**

---

## Updating the app in future

1. Come back to Claude and make your changes
2. Download the new `App.js` file
3. Go to your GitHub repo → `src/` folder → click `App.js`
4. Click the pencil (edit) icon → paste the new code → commit
5. Vercel redeploys automatically in ~30 seconds
6. Refresh the app on your phone

---

## Firebase security (optional, do later)

Right now the database is in test mode (open).
To lock it down after setup, go to Firebase Console →
Realtime Database → Rules and paste:

```json
{
  "rules": {
    "private": {
      ".read": true,
      ".write": true
    },
    "shared": {
      ".read": true,
      ".write": true
    }
  }
}
```

This is fine for a private group app. 👍
