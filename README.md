# Student Fee Management System

A modern, full-stack web application for students to manage and update their fee payment status through a secure, login-based system.

---

## 🚀 Features
- **Landing Page:** Modern, responsive, and dark-themed with a modal for login/signup.
- **Authentication:** Secure JWT-based login and signup.
- **All Students Page:** View all students and their fee status (admin-style view for demo).
- **Profile Page:** View and edit your details, see fee status, and pay fees if unpaid.
- **Payment Simulation:** Simulate fee payment (no real payment gateway).
- **Responsive Design:** Works beautifully on mobile, tablet, and desktop.
- **Modern UI:** Dark mode, accent colors, smooth transitions, and mobile-friendly navigation.

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL (via Prisma ORM)
- **Authentication:** JWT (JSON Web Token)

---

## 📦 Project Structure
```
student-fee-management/
├── backend/      # Express + TypeScript + Prisma + PostgreSQL
├── frontend/     # Vite + React + Tailwind CSS
```

---

## ⚙️ Setup Instructions

### 1. **Clone the Repository**
```sh
git clone https://github.com/Pahari47/elite8-assignment
```

### 2. **Backend Setup**
```sh
cd backend
npm install
# Set up your PostgreSQL connection in .env
# Example:
# DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
# JWT_SECRET=your_jwt_secret
npx prisma migrate dev --name init
npm run dev
```

### 3. **Frontend Setup**
```sh
cd ../frontend
npm install
# Create a .env file:
# VITE_API_URL=http://localhost:5000/api
npm run dev
```

---

## 🧑‍💻 Usage
- Visit `http://localhost:5173` in your browser.
- Use the **Get Started** or **Login** button to sign up or log in.
- View and edit your profile, pay fees, and see all students.
- All changes update in real time across the app.

---

## 🌐 Deployment
- Update the `.env` files in both `backend/` and `frontend/` for your production URLs and secrets.
- Deploy backend (e.g., Render, Heroku, Railway) and frontend (e.g., Vercel, Netlify).
- Use [Prisma docs](https://www.prisma.io/docs/) for database migrations in production.

---

## 📄 License
MIT
 