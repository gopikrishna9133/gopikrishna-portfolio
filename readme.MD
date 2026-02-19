# Gopi Krishna Kuncham — Full Stack Portfolio

A modern full-stack portfolio built with React, Node.js, Express, and MongoDB.
Designed with a clean dark UI and structured backend APIs for easy content management.

---

## 🚀 Live Deployments

Frontend (Vercel):
https://gopikrishna-portfolio-sandy.vercel.app/

Backend (Render):
https://gopikrishna-portfolio.onrender.com/

---

## 🚀 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- React Icons
- Axios

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Resend (Production Email Service)

---

## 📁 Project Structure

### Frontend (client)

    src/
     ├── components/
     ├── sections/
     ├── pages/
     ├── services/
     └── App.jsx

### Backend (server)

    server/
     ├── config/
     ├── controllers/
     ├── models/
     ├── routes/
     └── server.js

---

## ✨ Features

- Dynamic Hero section (editable via API)
- About section (single document structure)
- Flexible Skills with dynamic categories
- Certifications with external/PDF links
- Projects with full CRUD
- Contact form:
  - Stores messages in MongoDB
  - Sends production email via Resend
- Smooth scroll navigation with active section highlight
- Dark tech UI theme with cyan accent
- Fully deployment-ready (Railway + Vercel)

---

## 🔌 API Endpoints

### Hero

GET `/api/hero`  
PUT `/api/hero`

### About

GET `/api/about`  
PUT `/api/about`

### Skills

GET `/api/skills`  
PUT `/api/skills`

### Certifications

GET `/api/certifications`  
POST `/api/certifications`  
PUT `/api/certifications/:id`  
DELETE `/api/certifications/:id`

### Projects

GET `/api/projects`  
POST `/api/projects`  
PUT `/api/projects/:id`  
DELETE `/api/projects/:id`

### Contact

POST `/api/contact`  
GET `/api/contact`

---

## 📧 Email Configuration (Resend - Production)

1. Create account at https://resend.com
2. Generate API key
3. Add to environment variables:

Backend (.env):

    PORT=8000
    MONGO_URI=your_mongodb_connection_string
    RESEND_API_KEY=your_resend_api_key

Note:
Free Resend accounts require:
from: "onboarding@resend.dev"

For custom domain email, you must verify your domain in Resend.

---

## ⚙️ Environment Variables

### Backend

    PORT=8000
    MONGO_URI=your_mongodb_connection_string
    RESEND_API_KEY=your_resend_api_key

### Frontend

    VITE_API_URL=https://gopikrishna-portfolio.onrender.com/api

---

## 🛠 Local Development

### Backend

    cd server
    npm install
    npm run dev

### Frontend

    cd client
    npm install
    npm run dev

---

## 🌍 Deployment Architecture

Frontend → Vercel  
Backend → Render  
Database → MongoDB Atlas  
Email → Resend

---

## 📌 Design Philosophy

- Clean dark tech theme
- Clear section separation
- API-first architecture
- Production-ready backend structure
- Easy content updates via MongoDB

---

## 👨‍💻 Author

Gopi Krishna Kuncham  
Full Stack Software Engineer

LinkedIn: https://linkedin.com/in/gopi-krishna-kuncham  
GitHub: https://github.com/gopikrishna9133

---

© 2026 Gopi Krishna Kuncham. All rights reserved.
