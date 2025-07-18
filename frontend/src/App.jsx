import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";


import { Routes, Route, Navigate} from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useChatStore } from "./store/useChatStore";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

import {Loader} from "lucide-react";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const {authUser, checkAuth, isCheckingAuth, onlineUsers, socket} = useAuthStore()
  const {theme} = useThemeStore()
  const { subscribeToMessages, unsubscribeFromMessages } = useChatStore()

  console.log({ onlineUsers } );

  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  // Set up message subscription when user is authenticated and socket is available
  useEffect(() => {
    if (authUser && socket) {
      subscribeToMessages();
    }
    
    return () => {
      if (socket) {
        unsubscribeFromMessages();
      }
    };
  }, [authUser, socket, subscribeToMessages, unsubscribeFromMessages]);

  console.log({ authUser });

if(isCheckingAuth && !authUser) return(
  <div className="flex items-center justify-center h-screen">
    <Loader className="animate-spin" />
  </div>
)


  return ( 
  <div data-theme= {theme}> 

    <Navbar />
    {/* Each Route has a path and an element(prop that tells React what to render) */}
    <Routes>
      <Route path="/" element= { authUser ? <HomePage /> : <Navigate to="/login" /> } />
      <Route path="/signup" element= { !authUser ? <SignUpPage /> : <Navigate to="/" /> } />
      <Route path="/login" element= { !authUser ?  <LoginPage /> : <Navigate to="/" /> } />
      <Route path="/settings" element= { <SettingsPage />  } />
      <Route path="/profile" element= { authUser ? <ProfilePage /> : <Navigate to="/login" /> } />
    </Routes>

    <Toaster />
  </div>
  );
};
export default App