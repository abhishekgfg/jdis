import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

import HomePage from './components/HomePage'
import CaseStudy from './components/CaseStudy'
import ContactFormWithInfo from './components/ContactFormWithInfo'
import ScrollToTop from './components/ScrollToTop' // ✅ import
import BlogPage from './components/BlogPage'

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scroll to top on route change */}
      <div className="font-sans text-slate-800">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/casestudy" element={<CaseStudy />} /> 
            <Route path="/contact" element={<ContactFormWithInfo />} /> 
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  )
}
