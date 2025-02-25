"use client"; 

import { useState } from "react";  
import { Element, Link as ScrollLink } from "react-scroll";  
import { motion } from "framer-motion";  
import Navbar from "./components/Navbar";  
import { FaChevronDown, FaGraduationCap, FaBriefcase, FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";  

// ✅ Text Animations
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Education & Experience Data
const education = [
  { year: "2023 - 2025", title: "Master's In Computer Science", college: "California State University Long Beach" },
  { year: "2018 - 2022", title: "B.Tech - Computer Science and Engineering", college: "KL University" },
];

const experience = [
  { year: "June 2022 - June 2023", title: "Analyst", company: "Deloitte USI Pvt Ltd" },
  { year: "Jan 2022 - May 2022", title: "Engineering Intern", company: "Deloitte USI Pvt Ltd" },
];


// Project Data
const projects = [
  {
    title: "Online Job Portal",
    desc: "A job application system for recruiters and applicants to manage job postings and applications efficiently.",
    tech: "Spring Boot, React, MySQL",
    color: "bg-gradient-to-r from-blue-600 to-purple-500",
  },
  {
    title: "Chat Application",
    desc: "A real-time chat application enabling seamless messaging with WebSockets and real-time updates.",
    tech: "React, WebSockets, Node.js",
    color: "bg-gradient-to-r from-green-600 to-blue-400",
  },
  {
    title: "Portfolio Website",
    desc: "An interactive personal portfolio with animations and smooth scrolling to showcase projects.",
    tech: "Next.js, Tailwind CSS",
    color: "bg-gradient-to-r from-orange-600 to-red-500",
  },
  {
    title: "AI Image Recognition",
    desc: "A machine learning-based image recognition system capable of detecting objects in images.",
    tech: "Python, TensorFlow",
    color: "bg-gradient-to-r from-teal-600 to-cyan-500",
  },
];


export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("education");
  const [flipped, setFlipped] = useState([false, false, false, false]);// ✅ Track each card's flip state
  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((f, i) => (i === index ? !f : f)));
  };
  return (
    <div className="bg-[#0f172a] text-white">
      <Navbar />

      {/* Sections Container */}
      <div className="space-y-0">

         {/* ✅ Home Section */}
      <Element name="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-4xl text-center sm:text-left">
          <p className="text-gray-400 text-sm sm:text-lg">Hi there,</p>

          {/* Animated Name Text */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold mt-2 leading-tight font-typewriter"
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {["My ", "name ", "is ", "Sai ", "Nanda ", "Kumar ", "Tirneddi"].map((word, index) => (
              <motion.span
                key={index}
                className="mr-2 text-yellow-400 inline-block"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-2xl mt-3 leading-relaxed font-typewriter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            I am a Full-Stack Developer
          </motion.p>

          {/* Buttons */}
          <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <ScrollLink to="contact" smooth={true} duration={800} className="cursor-pointer">
              <button className="px-5 py-2 sm:px-7 sm:py-3 bg-yellow-400 text-gray-900 font-bold rounded-md shadow-md hover:bg-yellow-500 transition-all text-lg">
                Get In Touch
              </button>
            </ScrollLink>
            <a href="/SaiNandaKumar_Tirneddi.pdf" target="_blank">
              <button className="px-5 py-2 sm:px-7 sm:py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-md hover:bg-yellow-400 hover:text-gray-900 transition-all text-lg">
                Download Resume
              </button>
            </a>
          </motion.div>

          {/* Scroll Down Text & Icon */}
          <div className="mt-10 sm:mt-16 flex flex-col items-center">
            <p className="text-gray-400 text-sm sm:text-lg">Scroll down to explore my work</p>
            <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer mt-2">
              <FaChevronDown className="text-yellow-400 text-3xl animate-bounce hover:text-yellow-500 transition" />
            </ScrollLink>
          </div>
        </div>
      </Element>
        {/* ✅ About Section */}
        <Element name="about" className="min-h-screen flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto pt-24">
          <motion.h1 className="text-4xl font-bold text-white font-typewriter">About</motion.h1>


  {/* Animated Paragraphs */}
  <motion.p
    className="text-lg text-gray-300 mt-6 leading-relaxed font-typewriter"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
   I am Sai Nanda Kumar Tirneddi, a Full-Stack Developer with 1.5 years of experience in building scalable and efficient applications. My expertise lies in Java, Spring Boot, React.js, and Artificial Intelligence, and I am passionate about crafting high-performance software solutions.
  </motion.p>

  <motion.p
    className="text-lg text-gray-300 mt-4 leading-relaxed font-typewriter"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    Currently, I am pursuing my Master&apos;s in Computer Science at California State University, Long Beach, where I specialize in Deep Learning, Natural Language Processing (NLP), and Computer Vision. My coursework includes Advanced Algorithms, Software Engineering, Artificial Intelligence, and Data Visualization, providing me with a strong theoretical foundation.
  </motion.p>

  <motion.p
    className="text-lg text-gray-300 mt-4 leading-relaxed font-typewriter"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.9 }}
  >
    I thrive in dynamic and collaborative environments, always looking for opportunities to learn, innovate, and contribute. 
  </motion.p>

  {/* ✅ Tech Stack Section */}
  <motion.h2
    className="text-2xl font-bold text-yellow-400 mt-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.2 }}
  >
    My Tech Stack
  </motion.h2>

  {/* Tech Stack Badges */}
  <motion.div
    className="flex flex-wrap gap-3 mt-4 justify-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 1.5 }}
  >
    {[
      "JavaScript", "React", "Next.js", "Node.js", "Spring Boot",
      "Tailwind CSS", "PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS"
    ].map((tech, index) => (
      <motion.span
        key={index}
        className="bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-200 font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {tech}
      </motion.span>
    ))}
  </motion.div>

          {/* ✅ Academic & Professional Toggle */}
          <div className="mt-10 flex gap-6 text-lg">
            <button onClick={() => setSelectedTab("education")} className={`font-semibold flex items-center ${selectedTab === "education" ? "text-yellow-400" : "text-gray-400"} transition-all`}>
              <FaGraduationCap className="text-3xl mr-2" /> Academic
            </button>
            <button onClick={() => setSelectedTab("experience")} className={`font-semibold flex items-center ${selectedTab === "experience" ? "text-yellow-400" : "text-gray-400"} transition-all`}>
              <FaBriefcase className="text-3xl mr-2" /> Professional
            </button>
          </div>

          {/* ✅ Dynamic Content */}
          <motion.div className="mt-8 border-l-4 border-yellow-400 pl-6">
            {selectedTab === "education"
              ? education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <p className="text-gray-400">{edu.year}</p>
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  <p className="text-gray-300">{edu.college}</p>
                </div>
              ))
              : experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <p className="text-gray-400">{exp.year}</p>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
              ))}
          </motion.div>
        </Element>

      {/* Project Section*/}
        <Element name="projects" className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-28">
  <h2 className="text-4xl font-bold text-yellow-400 mb-10">My Projects</h2>

  {/* Project Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
    {projects.map((project, index) => (
      <div
        key={index}
        className="relative w-96 h-80 cursor-pointer"
        style={{ perspective: "1000px" }} // ✅ Ensures correct 3D effect
        onClick={() => handleFlip(index)}
      >
        <motion.div
          className="w-full h-full rounded-lg border-white border-2 shadow-lg relative"
          animate={flipped[index] ? { rotateY: 180 } : { rotateY: 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }} // ✅ Ensures 3D flip works correctly
        >
          {/* Front Side (Title & Tech Stack - Always Visible First) */}
          <motion.div
            className={`absolute w-full h-full flex flex-col items-center justify-center rounded-lg p-6 bg-gradient-to-b from-[#1a1f36] to-[#0f172a]`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <h3 className="text-3xl font-bold text-yellow-400 font-typewriter">
              {project.title}
            </h3>
            <p className="mt-4 text-blue-200 text-lg font-typewriter">{project.tech}</p>
            <p className="mt-2 text-white text-sm">Click to flip</p>
          </motion.div>

          {/* Back Side (Project Description) */}
          <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white rounded-lg p-6"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <p className="text-lg text-gray-300 font-typewriter">{project.desc}</p>
            <p className="mt-2 text-sm text-gray-500">Click to flip back</p>
          </motion.div>
        </motion.div>
      </div>
    ))}
  </div>
</Element>
        {/* Contact Section */}
        <Element name="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold font-mono text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Get In Touch
      </motion.h1>
      {/* Contact Description */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        I am a Recent graduate and currently looking for opportunities to contribute and grow in the tech industry.
        My inbox is always open! Feel free to reach out if you have any questions, want to collaborate, or discuss a new opportunity.
      </motion.p>
          <div className="mt-6 flex space-x-6 text-3xl text-yellow-400">
            <a href="mailto:your.email@example.com" target="_blank"><FaEnvelope className="hover:text-yellow-500 transition" /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank"><FaLinkedin className="hover:text-yellow-500 transition" /></a>
            <a href="https://github.com/yourprofile" target="_blank"><FaGithub className="hover:text-yellow-500 transition" /></a>
          </div>
        </Element>

      </div>
    </div>
  );
}