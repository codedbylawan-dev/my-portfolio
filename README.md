# 🏆 Lawan's Elite Full-Stack Portfolio

Welcome to the **World-Class Professional Developer Portfolio**. This project was built using a high-end 6-prompt engineering strategy to simulate a premium agency-grade product.

## 🚀 Project Overview
This is a **Full-Stack Application** designed for high-performance, discovery (SEO), and deep technical storytelling. It doesn't just show projects; it explains the logic and architecture behind them.

---

## 🔥 Key Elite features

### 1. ⚡ Premium User Experience (UX)
*   **Initial Loader**: A sleek `LAWAN.DEV` progress bar animation to mask resource loading.
*   **Custom Cursor Glow**: A subtle, mouse-following background glow that adds a "premium" interactive feel.
*   **Scroll Progress**: A dynamic indicator at the top showing how much of the page is left.
*   **Staggered Animations**: Every section (Skills, Timeline, Projects) uses staggered "reveal-on-scroll" logic.

### 2. 🔍 Project Deep-Dives (Modals)
*   **Interactive Cards**: Instead of just links, every project card opens a **Technical Deep-Dive Modal**.
*   **Storytelling**: Built-in sections for **Problem**, **Solution**, and **Technical Impact**. This proves your engineering discipline to recruiters.

### 3. 📊 Live Engineering Activity
*   **GitHub Dynamic Stats**: Integrates live contribution cards and top-language stats directly from GitHub. It proves your daily consistency.

### 4. 🔗 End-to-End Social Sharing (SEO)
*   **OpenGraph Optimized**: Site looks professional when shared on LinkedIn/Twitter with thumbnails and titles.
*   **Search Engine Ready**: Includes `robots.txt` and `sitemap.xml` for Google indexing.

### 5. 🏗️ Full-Stack Architecture
*   **Node.js Backend**: A dedicated server handled API requests.
*   **Live Contact Form**: Messages are sent to the backend and saved locally in `messages.json`.
*   **Orchestration**: Run both Frontend and Backend with a single command.

---

## 🛠️ How to Control & Experience

### 📂 Directory Map
*   `/src/data/portfolio.ts`: **The Brain.** Change your name, projects, and skills here. The whole UI updates automatically.
*   `/src/components/`: **The UI Layer.** Logic for Modals, Navbar, and Feature sections.
*   `/backend/server.js`: **The Server.** Handles API routes and form data.
*   `/public/`: **The Assets.** Drop your `resume.pdf` and `favicon.png` here.

### ⌨️ Commands
| Command | Action |
| :--- | :--- |
| `npm run dev:full` | **The Master Command.** Starts both React and Node.js. |
| `npm run build` | Generates the production-ready code in `/dist`. |
| `node backend/server.js` | Runs just the backend server. |

### 🎯 How to Test Features
1.  **Loading Screen**: Refresh the page to see the `LAWAN.DEV` animation.
2.  **Contact Form**: Submit a message. Check `backend/messages.json` to see the real-time data capture.
3.  **Project Modals**: Click any project title in the "Projects" section to see the deep-dive animation.
4.  **Mobile View**: Right-click -> Inspect -> Pick an iPhone/Android screen to see the custom mobile menu toggle.

---

## ✅ Final Production Checklist
- [ ] Add real `resume.pdf` to `/public`.
- [ ] Update `portfolio.ts` with your actual email and social links.

## 🚀 Deployment Roadmap

### 1. Backend (Server) - Host on Render/Railway
1.  Sign up for [Render](https://render.com) or [Railway](https://railway.app).
2.  Connect your GitHub repository.
3.  Set the **Root Directory** to `backend`.
4.  Build Command: `npm install`
5.  Start Command: `node server.js`
6.  **Environment Variables**: Add `PORT=5000`.
7.  Copy your live backend URL (e.g., `https://my-backend.onrender.com`).

### 2. Frontend (Client) - Host on Vercel
1.  Sign up for [Vercel](https://vercel.com).
2.  Connect your GitHub repository.
3.  Set the **Root Directory** to `./` (the root).
4.  Build Command: `npm run build`
5.  Output Directory: `dist`
6.  **Environment Variables**: Add `VITE_API_URL=https://my-backend.onrender.com/api/contact`.

**Crafted with excellence. Pro-code for a pro-career.** 🚀💯
