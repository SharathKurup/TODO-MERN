## Summary
This is a ToDo application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to sign up, log in, create, view, and manage their tasks.

## Description
The application consists of a backend server built with Express and MongoDB for handling user authentication and task management. The frontend is built with React and provides a user-friendly interface for interacting with the application. The app uses JWT for authentication and bcrypt for password hashing.

## Setup Instructions

### Prerequisites
- Node.js
- npm
- MongoDB

### Steps to Set Up Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/SharathKurup/ToDo-MERN.git
    cd ToDo-MERN
    ```

2. Install dependencies for both backend and frontend:
    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:
    ```env
    PORT=5000
    DB_URL=mongodb://localhost:27017/todoapp
    JWT_SECRET=your_jwt_secret # You can generate a strong secret key using: node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
    ```

4. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

5. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to use the application.