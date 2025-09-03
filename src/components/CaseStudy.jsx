// src/components/PortfolioPage.jsx
import React from "react";

// Sample static data for 9 projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    client: "StartupX",
    clientLogo: "https://via.placeholder.com/80x80?text=SX",
    screenshot: "https://www.iwdagency.com/cdn/shop/articles/eCommerce_Platform_Pic_2000x.jpg?v=1698957713",
    problem: "Client faced difficulty in managing products and orders efficiently.",
    solution: "Developed a scalable e-commerce platform with admin dashboard and analytics.",
    result: "Reduced order processing time by 40% and increased customer satisfaction."
  },
  {
    id: 2,
    title: "Healthcare App",
    client: "MediCare",
    clientLogo: "https://via.placeholder.com/80x80?text=MC",
    screenshot: "https://shivlab.com/wp-content/uploads/2025/03/Healthcare-App-Secure-Data-and-Efficient-Patient-Management.webp",
    problem: "Patients struggled to book appointments and access medical records.",
    solution: "Built a mobile-first healthcare app with appointment booking and secure record access.",
    result: "App downloads reached 50k+ within 3 months; appointment scheduling became seamless."
  },
  {
    id: 3,
    title: "FinTech Dashboard",
    client: "FinGrow",
    clientLogo: "https://via.placeholder.com/80x80?text=FG",
    screenshot: "https://star.global/_next/image/?url=https%3A%2F%2Fcms.star.global%2Fwp-content%2Fuploads%2F2022%2F05%2FThe-Dashboard-Age-content-2.jpeg&w=3840&q=75",
    problem: "Investors needed real-time data analytics and portfolio tracking.",
    solution: "Created an interactive dashboard with charts, insights, and alerts.",
    result: "Improved client decision-making speed and retention increased by 25%."
  },
  {
    id: 4,
    title: "Food Delivery App",
    client: "QuickEats",
    clientLogo: "https://via.placeholder.com/80x80?text=QE",
    screenshot: "https://miro.medium.com/v2/resize:fit:1400/1*eWbNRY_UnGFJC5YqcqBSwA.jpeg",
    problem: "High delivery delays and low customer engagement.",
    solution: "Developed a real-time tracking app with personalized offers.",
    result: "Delivery times improved by 35%, customer retention increased."
  },
  {
    id: 5,
    title: "Travel Booking Portal",
    client: "TripMaster",
    clientLogo: "https://via.placeholder.com/80x80?text=TM",
    screenshot: "https://miro.medium.com/v2/resize:fit:1400/1*3T_yqz5J8XAUx-O07vugvA.png",
    problem: "Complex booking process frustrated users.",
    solution: "Redesigned UI/UX with simplified booking flow and integrated payment options.",
    result: "Bookings increased by 50% in the first quarter post-launch."
  },
  {
    id: 6,
    title: "Education Platform",
    client: "Learnify",
    clientLogo: "https://via.placeholder.com/80x80?text=LF",
    screenshot: "https://www.slideteam.net/media/catalog/product/cache/1280x720/e/d/education_marketing_strategies_student_enrolment_dashboard_for_various_courses_slide01.jpg",
    problem: "Students struggled to track progress and assignments.",
    solution: "Developed a dashboard with progress tracking, quizzes, and notifications.",
    result: "Student engagement rose by 60% and completion rates improved."
  },
  {
    id: 7,
    title: "Fitness App",
    client: "FitTrack",
    clientLogo: "https://via.placeholder.com/80x80?text=FT",
    screenshot: "https://cdn.sanity.io/images/ordgikwe/production/a006de92bbca0a41e10bcc7ebe7e8fe7be0936ee-1600x1200.jpg?w=1600&h=1200&auto=format",
    problem: "Users lacked motivation and tracking of workouts.",
    solution: "Created gamified fitness app with reminders and progress charts.",
    result: "User retention improved by 45% within 3 months."
  },
  {
    id: 8,
    title: "Real Estate Platform",
    client: "HomeFinder",
    clientLogo: "https://via.placeholder.com/80x80?text=HF",
    screenshot: "https://www.seasiainfotech.com/assests/images/realesta/get-the-best-deals-in-your-area.png",
    problem: "Clients struggled to find suitable properties quickly.",
    solution: "Built an AI-powered search portal with filters and virtual tours.",
    result: "Leads increased by 70% and property viewings rose significantly."
  },
  {
    id: 9,
    title: "Social Media Management Tool",
    client: "SocialPro",
    clientLogo: "https://via.placeholder.com/80x80?text=SP",
    screenshot: "https://knowledge.hubspot.com/hs-fs/hubfs/hootsuite%20social%20media%20tool.png?width=1600&height=882&name=hootsuite%20social%20media%20tool.png",
    problem: "Businesses faced difficulty in scheduling posts across multiple platforms.",
    solution: "Developed a centralized dashboard with scheduling, analytics, and reporting.",
    result: "Time spent managing posts reduced by 50%, engagement improved."
  }
];

const CaseStudy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio & Case Studies</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore how we help startups grow with innovative solutions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            
            {/* Project Screenshot */}
            <img src={project.screenshot} alt={project.title} className="w-full h-55 object-cover" />

            <div className="p-6">
              {/* Client Logo & Name */}
              <div className="flex items-center mb-4">
                <img src={project.clientLogo} alt={project.client} className="w-12 h-12 rounded-full mr-4 border border-gray-200" />
                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
              </div>

              {/* Problem → Solution → Result */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-700">Problem</h3>
                  <p className="text-gray-600 text-sm">{project.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Solution</h3>
                  <p className="text-gray-600 text-sm">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Result</h3>
                  <p className="text-gray-600 text-sm">{project.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
