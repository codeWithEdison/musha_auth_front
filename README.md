# React Authentication App - Setup Guide

This project is a simple authentication application built with React, Tailwind CSS, and Axios. It provides functionalities for user registration, login, profile management, and account deletion.

## Project Structure

```
auth-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── .env
├── package.json
└── tailwind.config.js
```

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- The backend API server running (your Express.js authentication API)

## Installation

1. **Clone the repository or create a new React project**

   ```bash
   npx create-react-app auth-react-app
   cd auth-react-app
   ```

2. **Install dependencies**

   ```bash
   npm install react-router-dom axios
   npm install tailwindcss @tailwindcss/vite
   ```

3. **Initialize Tailwind CSS**


4. **Create a .env file**

   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

5. **Replace the files in your project with the provided code files**

6. **Start the development server**

   ```bash
   npm run dev
   ```

## Configuration

Make sure to update the API_URL in App.jsx to match your backend server:

```javascript
const API_URL = 'http://localhost:5000/api'; // Change as needed
```

## Features

- **User Registration**: Create a new account with username, email, and password
- **User Login**: Authenticate using username and password
- **JWT Authentication**: Secure API calls with JSON Web Tokens
- **Protected Routes**: Restrict access to authenticated users only
- **Profile Management**: Update user profile information
- **Account Deletion**: Allow users to delete their accounts

## API Endpoints Used

- `POST /api/register`: Register a new user
- `POST /api/login`: Authenticate a user
- `GET /api/users/:id`: Get user details
- `PUT /api/users/:id`: Update user profile
- `DELETE /api/users/:id`: Delete user account

## Authentication Flow

1. User registers or logs in
2. Server returns a JWT token
3. Token is stored in localStorage
4. Token is included in the Authorization header for protected API calls
5. On logout, the token is removed from localStorage

## Security Considerations

- All passwords are hashed before being stored in the database (on the backend)
- JWT tokens are used for authentication
- Protected routes are secured on both client and server sides
- Input validation is performed on both client and server sides

## Notes

- This is a simple demonstration app and may need additional features for production use
- Consider adding features like password reset, email verification, etc. for a more complete authentication system
- For production, you should use HTTPS and consider more robust token storage solutions