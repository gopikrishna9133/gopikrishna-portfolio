# Gopi Krishna Kuncham --- Full Stack Portfolio

A modern full-stack portfolio built with React, Node.js, Express, and
MongoDB.\
Designed with a clean dark UI and structured backend APIs for easy
content management.

------------------------------------------------------------------------

## 🚀 Tech Stack

### Frontend

-   React (Vite)
-   Tailwind CSS
-   React Icons
-   Axios

### Backend

-   Node.js
-   Express.js
-   MongoDB Atlas
-   Mongoose
-   Nodemailer (Contact Email Integration)

------------------------------------------------------------------------

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

------------------------------------------------------------------------

## ✨ Features

-   Dynamic Hero section (editable from MongoDB)
-   About section (single document structure)
-   Dynamic Skills with flexible categories
-   Certifications with external/PDF links
-   Projects with full CRUD
-   Contact form:
    -   Stores data in MongoDB
    -   Sends email notification via Gmail SMTP
-   Smooth scroll navigation with active state highlight
-   Clean dark UI with cyan accent theme
-   Fully deployment-ready

------------------------------------------------------------------------

## 🔌 API Endpoints

### Hero

GET `/api/hero`\
PUT `/api/hero`

### About

GET `/api/about`\
PUT `/api/about`

### Skills

GET `/api/skills`\
PUT `/api/skills`

### Certifications

GET `/api/certifications`\
POST `/api/certifications`\
PUT `/api/certifications/:id`\
DELETE `/api/certifications/:id`

### Projects

GET `/api/projects`\
POST `/api/projects`\
PUT `/api/projects/:id`\
DELETE `/api/projects/:id`

### Contact

POST `/api/contact`\
GET `/api/contact`

------------------------------------------------------------------------

## 📧 Contact Email Setup

To enable email notifications:

1.  Enable 2-Step Verification in Gmail.
2.  Generate an App Password.
3.  Add to `.env`:

```{=html}
<!-- -->
```
    EMAIL_USER=yourgmail@gmail.com
    EMAIL_PASS=your_app_password

------------------------------------------------------------------------

## ⚙️ Environment Variables

    PORT=8000
    MONGO_URI=your_mongodb_connection_string
    EMAIL_USER=yourgmail@gmail.com
    EMAIL_PASS=your_app_password

------------------------------------------------------------------------

## 🛠 Local Development

### Backend

    cd server
    npm install
    npm run dev

### Frontend

    cd client
    npm install
    npm run dev

------------------------------------------------------------------------

## 🌍 Deployment

Recommended setup:

Frontend → Vercel\
Backend → Render / Railway\
Database → MongoDB Atlas

Update frontend `.env`:

    VITE_API_URL=https://your-backend-url/api

------------------------------------------------------------------------

## 📌 Design Philosophy

-   Minimal dark tech theme
-   Clean spacing and typography
-   Structured backend for easy updates
-   Scalable API-first architecture

------------------------------------------------------------------------

## 👨‍💻 Author

**Gopi Krishna Kuncham**\
Full Stack Software Engineer

LinkedIn: https://linkedin.com/in/gopi-krishna-kuncham\
GitHub: https://github.com/gopikrishna9133

------------------------------------------------------------------------

© 2026 Gopi Krishna Kuncham. All rights reserved.
