import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import Index from './components/index/Index.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
    <Home />
    <Index />
    </BrowserRouter>
  </StrictMode>
)
