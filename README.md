# ⚡ QuizPulse 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white)

**QuizPulse** is a lightning-fast, full-stack live quiz web application that brings real-time multiplayer engagement and generative AI together. Built on a completely serverless architecture, QuizPulse allows hosts to instantly generate quizzes via AI, broadcast them live to participants, and analyze real-time performance with zero latency.

## ✨ Features

### 🎮 Live Multiplayer Experience
* **Real-Time Sync:** Powered by Firebase Firestore `onSnapshot` listeners for zero-latency question broadcasting and state management.
* **Frictionless Join:** Participants join via a 6-digit PIN using Firebase Anonymous Auth (no account required).
* **Animated Leaderboard:** Live top-10 ranking with smooth Framer Motion layout animations.
* **Confidence Meter:** Participants rate their confidence (1-5 stars) after locking in answers, adding a new dimension to quiz analytics.

### 🧠 Powered by Google Gemini AI
* **Instant Quiz Generation:** Type a topic, and the Gemini 1.5 Flash API instantly generates a 5-question multiple-choice quiz and writes it securely to the database.
* **Real-Time AI Explanations:** When a participant gets a question wrong, Gemini streams back a personalized, 3-sentence explanation of *why* the answer was incorrect using Vercel Edge Functions and Server-Sent Events (SSE).

### 🛠️ Host & Admin Dashboard
* **Live Monitor:** Track connected participants, kick idle users, and control the pace of the quiz.
* **Post-Quiz Analytics:** Deep-dive into performance with an Answer Heatmap and a "Confidence vs. Accuracy" scatter plot.

### 🎨 Jaw-Dropping UI/UX
* **Dark Theme Default:** Deep purple (`#6C63FF`) to teal (`#2DD4BF`) gradients with neon accents and glassmorphism cards.
* **Fluid Animations:** Framer Motion drives page transitions, SVG countdown rings, and layout shifts.

## 🏗️ Architecture & Tech Stack

This project is optimized for high performance and low cost, utilizing a 100% serverless stack:

* **Frontend:** React.js, TypeScript, Vite, Tailwind CSS, Framer Motion
* **Backend API:** Vercel Serverless Functions (Node.js) & Edge Functions
* **Database & State:** Firebase Firestore (NoSQL, optimized for real-time multiplayer)
* **Authentication:** Firebase Auth (Google Sign-In for Hosts, Anonymous Auth for Participants)
* **AI Integration:** Google Gemini API (`gemini-1.5-flash`)

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+)
* A Firebase Project (with Firestore and Authentication enabled)
* A Google Gemini API Key
* Vercel CLI (optional, for local API testing)

🔒 Security Architecture
Firestore Rules: Strict read/write access. Hosts have full access to their sessions; participants can only write to the responses subcollection and cannot read the questions subcollection (the correct answers) ahead of time.
