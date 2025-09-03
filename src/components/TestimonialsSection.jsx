// src/components/TestimonialsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Minimal Card component
function Card({ children, className }) {
  return <div className={`bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

// Minimal Button component
function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-blue-600 text-white py-2 px-6 hover:bg-blue-700 transition rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "CEO, TechWave Pvt. Ltd.",
      feedback:
        "JD Infotech Solutions completely transformed our online presence. Their UI/UX expertise is unmatched!",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "Founder, StyleNest",
      feedback:
        "The website is stunning, fast, and user-friendly. Our customers love it!",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Marketing Lead, DigiPlus",
      feedback:
        "Amazing service and attention to detail. Highly recommend their team for any tech solutions.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-purple-500 rounded-full opacity-20"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-15"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-500 rounded-full opacity-10"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-600 mb-12 text-lg">
          Hear from businesses that trusted JD Infotech Solutions to bring their
          vision to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="shadow-lg rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="text-yellow-500 fill-yellow-500"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">“{t.feedback}”</p>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Button size="lg" className="text-lg px-8">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
