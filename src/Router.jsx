import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import EmailReset from './pages/EmailReset'
import PasswordReset from './pages/PasswordReset'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/emailreset" element={<EmailReset />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  )
}
