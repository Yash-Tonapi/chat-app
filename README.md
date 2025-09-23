# 💬 Real-Time Chat Application

A modern, full-stack real-time chat application built with React, Node.js, Express, Socket.IO, and MongoDB. Features include user authentication, real-time messaging, image sharing, multiple themes, and online user tracking.

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- 💬 **Real-time Messaging** - Instant messaging using Socket.IO
- 🖼️ **Image Sharing** - Upload and share images in chat using Cloudinary
- 👥 **Online Users** - See who's currently online
- 🎨 **Multiple Themes** - 17+ beautiful themes using DaisyUI
- 📱 **Responsive Design** - Mobile-friendly interface
- 🔒 **Secure** - Password hashing with bcrypt
- 🍪 **Persistent Sessions** - Stay logged in with HTTP-only cookies

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Beautiful UI components
- **Socket.IO Client** - Real-time communication
- **Zustand** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons
- **Emoji Mart** - Emoji picker

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image upload and storage
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Chat-App/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Authentication middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── lib/           # Utilities (DB, Socket, Cloudinary)
│   │   └── index.js       # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand stores
│   │   ├── lib/          # Utilities
│   │   └── constants/     # App constants
│   └── package.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yash-Tonapi/Chat-App.git
   cd Chat-App
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run build
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   PORT=5001
   
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the development servers**
   
   For backend (from root directory):
   ```bash
   cd backend
   npm run dev
   ```
   
   For frontend (in a new terminal, from root directory):
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🔧 Available Scripts

### Root Directory
- `npm run build` - Install dependencies for both frontend and backend
- `npm start` - Start the production server

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Themes

The application includes 17+ beautiful themes:
- Light & Dark modes
- Cupcake, Bumblebee, Emerald
- Corporate, Synthwave, Retro
- Cyberpunk, Valentine, Halloween
- Garden, Forest, Aqua
- Lofi, Pastel, Fantasy
- And more!

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get all users for sidebar
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user

## 🔌 Socket Events

- `connection` - User connects to socket
- `disconnect` - User disconnects from socket
- `getOnlineUsers` - Broadcast online users
- `newMessage` - Send/receive new messages

## 🚀 Deployment

The application is configured for deployment with production-ready features:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set environment variables**
   ```env
   NODE_ENV=production
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

The backend serves the built frontend in production mode.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication
- [DaisyUI](https://daisyui.com/) for beautiful UI components
- [Cloudinary](https://cloudinary.com/) for image management
- [React](https://reactjs.org/) for the amazing frontend framework
- [Express.js](https://expressjs.com/) for the robust backend framework

## 📧 Contact

Yash Tonapi - [GitHub](https://github.com/Yash-Tonapi)

Project Link: [https://github.com/Yash-Tonapi/Chat-App](https://github.com/Yash-Tonapi/Chat-App)