# E-Commerce Footwear Website

This is a full-stack e-commerce footwear website built using modern web technologies. The project is structured into a **backend** and **frontend**, utilizing TypeORM, PostgreSQL, Node.js, Express, React, Material UI, and Vite as the bundler.

## 🛠 Tech Stack

### **Backend:**
- **Node.js** (Runtime Environment)
- **Express.js** (Backend Framework)
- **PostgreSQL** (Database)
- **TypeORM** (ORM for PostgreSQL)
- **JWT (JSON Web Tokens)** (Authentication)
- **TypeScript**

### **Frontend:**
- **React.js** (Library for UI)
- **Material UI** (Component Library)
- **Vite** (Bundler)
- **Redux Toolkit** (State Management)
- **TypeScript**

---

## 📂 Project Structure

### **Backend Folder Structure (`backend/`)**
```
backend/
├── src/
│   ├── auth/              # JWT verifyToken function
│   ├── controllers/       # Handles request-response logic
│   ├── entities/          # TypeORM entity models
│   ├── routes/            # API routes
│   ├── services/          # Business logic and database queries
│   ├── types/             # TypeScript interfaces and types
├── app.ts                 # Main backend entry file
├── db.config.ts           # Database configuration
├── package.json           # Backend dependencies
├── package-lock.json      # Backend package lock
├── tsconfig.json          # TypeScript configuration
```

### **Frontend Folder Structure (`src/`)**
```
src/
├── assets/                # Static assets (images, icons, etc.)
├── components/            # Reusable React components
├── context/               # Context API for state management
├── data/                  # Static data
├── pages/                 # React pages
├── store/                 # Redux store
├── util/                  # Commonly used utility functions
├── App.tsx                # Main React component
├── main.tsx               # Entry point for React app
├── index.css              # Global styles
├── media.d.ts             # TypeScript media file definitions
├── types.ts               # TypeScript types
├── index.html             # HTML template
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
├── package.json           # Frontend dependencies
├── package-lock.json      # Frontend package lock
```

---

## 🚀 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/guptaabhay-celsys/React-Official-Task.git
cd Shopify
```

### **2️⃣ Setup & Run the Backend (Port 3000)**
Open a terminal and run:
```sh
cd backend
npm install
npm start
```

### **3️⃣ Setup & Run the Frontend (Port 5173)**
Open another terminal and run:
```sh
npm install
npm run dev
```

---

## 📌 Environment Variables
To run the project, set up a **.env** file in the backend root folder with the following variables:
```
PORT=3000
DATABASE_URL=your_postgresql_connection_url
JWT_SECRET=your_secret_key
```

---

## ❓ FAQ
**1. How do I change the database connection?**
- Modify `db.config.ts` inside the `backend/` folder with your PostgreSQL credentials.

**2. What if I encounter issues while running the project?**
- Ensure PostgreSQL is installed and running.
- Check that all dependencies are installed (`npm install` in both frontend and backend).
- Verify that your `.env` file is correctly set up.

---

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📧 Contact
For any inquiries or support, feel free to reach out at: **abhay.gupta@celestialsys.com**

Happy Coding! 🚀

