import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import ChatWidget from './components/ChatWidget'
import Seo from './seo/Seo'

import HomePage from './components/HomePage'
import CaseStudyPage from './case-study/CaseStudyPage'
import ContactPage from './contact/ContactPage'
import ScrollToTop from './components/ScrollToTop' // ✅ import
import BlogPage from './blog/BlogPage'
import MeetOurTeam from './pages/teams/MeetOurTeam'
// import Services from './components/Services'
import About from './about/About'
import Service from './service/Service'
import Website from './service/webiste/Website'
import Mobile from './service/mobile/Mobile'
import Solution from './solution/Solution'
import Portfolio from './portfolio/Portfolio'
import IndustriesPage from "./industries/IndustriesPage";
import TechnologyPage from "./technology/technology-page/TechnologyPage";




export default function App() {
  return (
    <Router>
      <Seo />
      <ScrollToTop /> {/* ✅ Scroll to top on route change */}
      <div className="font-sans text-slate-800">
        <Navbar />
        <main className="pt-24 md:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/casestudy" element={<Navigate to="/case-study" replace />} /> 
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/meet-our-team" element={<MeetOurTeam />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Navigate to="/portfolio" replace />} />
            {/* <Route path="/services" element={<Services />} />  */}


            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/website" element={<Website />} />
            <Route path="/services/mobile-application" element={<Mobile />} />
            <Route path="/solutions" element={<Solution />} />
        <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/technologies" element={<TechnologyPage />} />
          </Routes>
        </main>
        <Footer />
        {/* <ChatWidget /> */}
      </div>
    </Router>
  )
}
