# ⚛️ React Foundation

> Production-grade React components — Vite + TailwindCSS v4 + Atomic Git workflow

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-cyan)
![Node](https://img.shields.io/badge/Node-v24-green)
![Commits](https://img.shields.io/badge/Commits-30+-brightgreen)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

---

## 📌 What Is This?

A production-grade React foundation project built from scratch. Covers core React concepts — JSX, props, useState, conditional rendering — through real components. Built with Vite for fast dev experience and TailwindCSS v4 for utility-first styling.

---

## 🗺️ Component Flow
main.jsx          ← Entry point, mounts App into index.html
└── App.jsx     ← Root layout, dark background
├── Navbar.jsx       ← Sticky top bar, mobile hamburger menu
├── ProfileCard.jsx  ← Avatar, name, role, availability badge
└── TodoList.jsx     ← Add, toggle, remove, clear todos

---

## 📁 Project Structure

```
react-foundation/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   └── TodoList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🧠 Key Concepts

| Concept | Where Used |
|---|---|
| `Props` | ProfileCard — name, role, avatar passed from App |
| `useState` | TodoList — todos array + input value |
| `Conditional Rendering` | TodoList — empty state vs list |
| `Array Methods` | TodoList — map, filter, spread for immutable updates |
| `PropTypes` | ProfileCard — runtime type validation |
| `Component Colocation` | Navbar — menuOpen state lives where it's used |

---

## ⚙️ Local Setup

```bash
git clone https://github.com/Venkata1236/react-foundation
cd react-foundation
npm install
npm run dev
```

- App → http://localhost:5173

---
## 🧪 Components API

| Component | Props | Description |
|---|---|---|
| `ProfileCard` | `name, role, avatar, location` | Displays user profile with links |
| `TodoList` | none | Self-contained todo manager with progress bar |
| `Navbar` | none | Sticky nav with mobile hamburger + scroll effect |

## 📦 Tech Stack

- **React 18** — Functional components + hooks only
- **Vite 8** — Fast dev server + HMR
- **TailwindCSS v4** — Utility-first styling with Vite plugin
- **prop-types** — Runtime prop validation

---
## 🚀 Deploy to Vercel

```bash
npm run build
npx vercel --prod
```

Live URL: https://react-foundation-venkat.vercel.app

## 👤 Author

**Venkata Reddy Bommavaram**
- 📧 bommavaramvenkat2003@gmail.com
- 💼 [LinkedIn](https://linkedin.com/in/venkatareddy1203)
- 🐙 [GitHub](https://github.com/Venkata1236)