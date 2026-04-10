# NovaOS — Personal Operating System for Life

NovaOS is a comprehensive personal productivity platform designed to help you regulate daily routines, learning, coding practice, and health habits. It acts as a mission control center for your life, featuring an AI-driven study engine, real-time discipline tracking, and a premium "OS-like" interface.

## 🚀 Key Features

- **Central Dashboard:** View today's schedule, focus tasks, and your daily Discipline Score.
- **AI Study Planner:** Input any syllabus or YouTube link; the AI generates a structured, day-by-day learning plan.
- **Focus Mode:** A Zen-inspired Pomodoro timer with performance analytics.
- **Habit & Task Engine:** Gamified habit streaks and priority-based task management.
- **Coding Tracker:** Automatic GitHub activity logging and coding journal.
- **Health Pulse:** Track sleep, water, exercise, and overall wellness.
- **Command Palette:** Use `Cmd + K` to navigate instantly or trigger AI actions.
- **PWA & Mobile Ready:** Installable on any mobile device with a responsive UI.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TailwindCSS, Framer Motion, Zustand.
- **Backend:** Node.js, Express, Socket.io, MongoDB.
- **AI:** OpenAI GPT-4 API.
- **Extensions:** Manifest V3 Browser Extension for activity tracking.

## 📁 Repository Structure

```text
/NovaOS
├── /client         # Next.js Frontend (PWA)
├── /server         # Express.js Backend (API)
├── /extension      # Browser Activity Tracker
└── README.md       # Project Documentation
```

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Local or Atlas)
- OpenAI API Key

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
```
Run the server: `npm run dev`

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Extension Setup
1. Go to `chrome://extensions/`
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `/extension` folder.

## 🛤️ Roadmap & Next Steps

1.  **[ ] API Integration:** Finalize the GitHub OAuth flow for the Coding Tracker.
2.  **[ ] Advanced Analytics:** Implement detailed weekly/monthly productivity reports.
3.  **[ ] Wearable Support:** Connect with health APIs (Apple Health / Google Fit).
4.  **[ ] Proactive AI:** Allow the AI Assistant to suggest schedule changes based on focus data.

---

Built with Passion by **Antigravity**