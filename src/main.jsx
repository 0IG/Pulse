// Import libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import styles
import './index.css'
// Import components
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/account/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    </Router>
  </StrictMode>
)
