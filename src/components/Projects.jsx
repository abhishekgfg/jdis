import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {title:'NimbusPay', desc:'Payment orchestration for SMBs', tech:'React • Node • Stripe', img:'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'},
  {title:'Fleetmind', desc:'Logistics optimization platform', tech:'React • Python • GCP', img:'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop'},
  {title:'EduFlow', desc:'Adaptive learning SaaS', tech:'React • Firebase', img:'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop'}
]

export default function Projects(){
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Selected Work</h3>
        <p className="text-slate-500 mt-2">A snapshot of products we've shipped.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p,i)=>(
            <motion.a key={i} href="#" className="block rounded-2xl overflow-hidden shadow" whileHover={{ scale:1.02 }}>
              <div className="h-44 w-full">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-4 bg-white">
                <div className="text-sm text-slate-400">{p.tech}</div>
                <div className="font-semibold mt-1">{p.title}</div>
                <div className="text-slate-600 mt-2 text-sm">{p.desc}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
