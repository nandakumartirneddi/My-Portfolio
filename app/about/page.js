"use client";
import { useState } from "react"; 
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const education = [
  {
    year: "2023 - 2025",
    title: "Master's In Computer Science",
    college: "California State University Long Beach",
  },
  {
    year: "2018 - 2022",
    title: "B.Tech - Computer Science and Engineering",
    college: "KL University",
  }
];

const experience = [
  {
    year: "June 2022 - June 2023",
    title: "Analyst",
    company: "Deloitte USI Pvt Ltd",
  },
  {
    year: "Jan 2022 - May 2022",
    title: "Engineering Intern",
    company: "Deloitte USI Pvt Ltd",
  },
];
export default function About() {
  const [selectedTab, setSelectedTab] = useState("education"); // ✅ Ensures state is initialized

  if (!selectedTab) {
    return <p>Loading...</p>; // ✅ Prevents render errors
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-10 mb-10">
          <button
            onClick={() => setSelectedTab("education")}
            className={`text-2xl font-semibold flex items-center space-x-2 ${
              selectedTab === "education" ? "text-yellow-400" : "text-gray-400"
            } transition-all duration-300`}
          >
            <FaGraduationCap className="text-3xl" />
            <span>Academic</span>
          </button>
          <button
            onClick={() => setSelectedTab("experience")}
            className={`text-2xl font-semibold flex items-center space-x-2 ${
              selectedTab === "experience" ? "text-yellow-400" : "text-gray-400"
            } transition-all duration-300`}
          >
            <FaBriefcase className="text-3xl" />
            <span>Professional</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-yellow-400 pl-6">
          
          {/* Show Education when Academic is Selected */}
          {selectedTab === "education" &&
            education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2"></div>
                <p className="text-gray-400">{edu.year}</p>
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                <p className="text-gray-300">{edu.college}</p>
              </motion.div>
            ))}

          {/* Show Experience when Professional is Selected */}
          {selectedTab === "experience" &&
            experience.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2"></div>
                <p className="text-gray-400">{exp.year}</p>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-gray-300">{exp.company}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}