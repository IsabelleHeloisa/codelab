import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import EmailReset from './pages/EmailReset'
import PasswordReset from './pages/PasswordReset'
import Profile from './pages/Profile'
import Feed from './pages/Feed'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/emailreset" element={<EmailReset />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  )
}
