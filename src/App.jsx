import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

import Contact from './components/ContactFormWithInfo'
import Footer from './components/Footer'
import ProjectsShowcase from './components/ProjectsShowcase'
import Technologies from './components/Technologies'
import IdeaToLaunch from './IdeaToLaunch'
import WebsiteProjects from './components/WebsiteProjects'
import VisionMission from './components/VisionMission'

import ChatWidget from './components/ChatWidget'   // ✅ new import

export default function App(){
  return (
    <div className="font-sans text-slate-800">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Contact />
        <Services />
        <ProjectsShowcase />
        <Technologies />
        <WebsiteProjects />
        <IdeaToLaunch />
        <VisionMission />
      </main>
      <Footer />

      {/* ✅ AI Chat Widget */}
      <ChatWidget />
    </div>
  )
}
