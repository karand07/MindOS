# 🧠 MindOS Backend

MindOS is the backend service for a "Second Brain" application, allowing users to store, organize, and share their digital content. It provides a robust RESTful API built with Node.js, Express, and TypeScript, backed by a MongoDB database.

---

## 🌟 Features

*   **User Authentication**: Secure signup and signin functionality using JWT and bcrypt.
*   **Content Management**: Store various types of digital content including Tweets, YouTube videos, Blogs, Articles, and Photos.
*   **Tagging System**: Organize content efficiently using custom tags.
*   **Brain Sharing (Shareable Links)**: Generate secure, time-limited sharing links to share your "Second Brain" with others. Links automatically expire after 1 hour for enhanced security.
*   **CORS Enabled**: Configured to seamlessly integrate with a specific frontend application.

---

## 🛠️ Technology Stack

*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Language**: TypeScript
*   **Database**: MongoDB (with Mongoose ORM)
*   **Authentication**: JSON Web Tokens (JWT)
*   **Security & Encryption**: bcrypt (for password hashing)
*   **Validation**: Zod

---

## 🚀 Getting Started

Follow these instructions to set up the backend locally.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn
*   MongoDB instance (local or Atlas)

### 1. Clone the Repository

```bash
git clone https://github.com/karand07/MindOS.git
cd MindOS
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGO_URL="mongodb://localhost:27017/mindos"  # Or your MongoDB Atlas connection string
JWT_SECRET="your_super_secret_jwt_key"
FRONTEND_URL="http://localhost:3000"          # URL of your frontend application
```

### 4. Running the Server

**Development Mode (with live reload/build):**
```bash
npm run dev
```

**Build for Production:**
```bash
npm run build
```

**Start Production Server:**
```bash
npm run start
```

---

## 📂 Project Structure

```
MindOS/
├── src/
│   ├── index.ts           # Application entry point and server setup
│   ├── middleware/        # Express middlewares (e.g., Auth protection)
│   ├── model/             # Mongoose database schemas (User, Content, Link)
│   ├── routers/           # API route handlers (Auth, Content, Brain/Link)
│   └── types/             # TypeScript type definitions
├── tsconfig.json          # TypeScript compiler configuration
├── package.json           # Dependencies and scripts
└── .env                   # Environment variables
```

---

## 🗄️ Database Models

*   **User**: Manages credentials (username, password).
*   **Content**: Stores the actual saved items (link, type, title, tags) and references the user who created it.
*   **Link**: Manages the shareable hashes for users to temporarily share their brain content. Contains a TTL index to expire after 1 hour.
