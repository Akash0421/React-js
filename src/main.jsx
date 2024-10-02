import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from "./pages/Home"
import Info from "./pages/Info"
import Browse from './pages/Browse'
import MovieSelection from "./pages/MovieSelection"
import DashboardPage from './pages/DashboardPage'
import NotFound from './pages/104'

import {BrowserRouter, Routes, Route} from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/browse" element={<Browse />} />
        <Route path='/selection' element={<MovieSelection/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
