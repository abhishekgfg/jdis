import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import ChatWidget from './components/ChatWidget'

import HomePage from './components/HomePage'
import CaseStudy from './components/CaseStudy'
import ContactFormWithInfo from './components/ContactFormWithInfo'
import ScrollToTop from './components/ScrollToTop' // ✅ import
import BlogPage from './components/BlogPage'
import MeetOurTeam from './pages/teams/MeetOurTeam'
import ProjectsShowcase from './components/ProjectsShowcase'
// import Services from './components/Services'
import About from './about/About'
import Service from './service/Service'
import Website from './service/webiste/Website'
import Mobile from './service/mobile/Mobile'
import Solution from './solution/Solution'





export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Scroll to top on route change */}
      <div className="font-sans text-slate-800">
        <Navbar />
        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/casestudy" element={<CaseStudy />} /> 
            <Route path="/contact" element={<ContactFormWithInfo />} /> 
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/meet-our-team" element={<MeetOurTeam />} />
            <Route path="/projects" element={<ProjectsShowcase />} /> {/* Fallback to ProjectsShowcase for unknown routes */}
            {/* <Route path="/services" element={<Services />} />  */}


            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/website" element={<Website />} />
            <Route path="/services/mobile-application" element={<Mobile />} />
            <Route path="/solutions" element={<Solution />} />
          </Routes>
        </main>
        <Footer />
        {/* <ChatWidget /> */}
      </div>
    </Router>
  )
}
