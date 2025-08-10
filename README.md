# ⏳ MERN Pomodoro Timer

Your ultimate **Pomodoro Timer** — built with **MongoDB, Express, React, and Node.js** — designed to make your productivity shoot through the damn roof.

Track your time with a **dope animated circular timer** that shrinks as the seconds tick down, customize work & break durations with smooth sliders, manage your tasks with a slick checklist, and switch to **dark mode** when you’re grinding late.

> Built by [@Yash-pluto](https://github.com/Yash-pluto) aka **Pluto**

---

## ⚙️ Tech Stack

| Tool              | Purpose                                    |
|-------------------|--------------------------------------------|
| 🗄 MongoDB        | Store users, tasks, and timer settings     |
| 🚀 Express.js      | Backend API and authentication             |
| ⚛️ React           | Frontend UI and timer animation             |
| 🔐 JWT             | Secure user login and session management   |
| 🎨 CSS / Styled Components | Clean, responsive UI & dark mode          |

---

## 🚀 Getting Started

```shell
git clone https://github.com/Yash-pluto/mern-pomodoro-timer.git
cd mern-pomodoro-timer
```

# Backend setup
```shell
cd backend
npm install
npm run dev     # Runs Express server with nodemon
```

# Frontend setup (open a new terminal)
```shell
cd ../frontend
npm install
npm start       # Runs React dev server
```

> Open http://localhost:3000 to start smashing those Pomodoros! Or deploy it on Vercel!

---

## 🧩 Folder Structure
mern-pomodoro-timer/
 ┣ backend/
 ┃ ┣ controllers/       → Task, User, Settings controllers
 ┃ ┣ middleware/        → Auth middleware (JWT verify)
 ┃ ┣ models/            → MongoDB Schemas (User, Task, Settings)
 ┃ ┣ routes/            → API routes (auth, tasks, settings)
 ┃ ┣ app.js             → Express app setup
 ┃ ┗ server.js          → Server entry point & DB connect
 ┣ frontend/
 ┃ ┣ public/            → Static files & index.html
 ┃ ┣ src/
 ┃ ┃ ┣ assets/          → Images & icons
 ┃ ┃ ┣ components/      → TimerCircle, Navbar, Settings, Tasks, DarkModeToggle, LearnMore
 ┃ ┃ ┣ context/         → Auth, Tasks, Theme contexts
 ┃ ┃ ┣ hooks/           → Custom hooks (useTimer, useAuth)
 ┃ ┃ ┣ pages/           → Timer, Settings, Tasks, LearnMore pages
 ┃ ┃ ┣ services/        → API call functions (axios)
 ┃ ┃ ┣ styles/          → CSS / styled-components
 ┃ ┃ ┣ App.js           → Main app with routes
 ┃ ┃ ┗ index.js         → ReactDOM render
 ┣ .env                 → Environment variables
 ┣ package.json         → Backend dependencies
 ┗ README.md            → This badass file

---

## 🎯 Features
+ Animated circular timer countdown ⏱️
+ Customizable work, short break, long break durations (with sliders) 🎛️
+ Pomodoro rounds setting 🔄
+ Task checklist with add/check/remove functionality ✅
+ User sign-up/sign-in with JWT auth 🔐
+ Persistent user data (tasks & settings) saved in MongoDB 💾
+ Dark mode toggle 🌙
+ Mobile-friendly hamburger menu for quick navigation 🍔
+ Learn More page explaining Pomodoro technique 📚

---

## 🧠 Future Ideas
+ Push notifications on timer end 🔔
+ Stats dashboard to track productivity 📊
+ Task priorities & categories 🔥
+ Sync across devices with real-time updates ⚡

---

# 🐺 License
MIT — use it, remix it, flex it. Just don’t be a bitch and sell it like it’s yours 💀

---

# ⭐ Show Some Love
If you like this shit, smash that star on GitHub, fork it, and build your own grind machine. Hit me up anytime if you wanna collab or get guidance:
+ 🧠 [LinkedIn](https://www.linkedin.com/in/vardhan-yash3105/)
+ 🐙 [GitHub](https://github.com/Yash-pluto)
+ 📧 vardhan.yash3105@gmail.com
