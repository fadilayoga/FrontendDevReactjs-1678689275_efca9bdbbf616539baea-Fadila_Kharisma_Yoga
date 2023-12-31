import './App.css'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import React, { useEffect } from 'react'

function App() {
  const history = useNavigate()
  let user = JSON.parse(sessionStorage.getItem('user'))
  useEffect(() => {}, [history])
  
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant/:id" element={user ? <Detail /> : <Navigate to="/login" />} />
        <Route path="/" element={user ? <Main /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
