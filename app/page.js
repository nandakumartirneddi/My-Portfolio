"use client"; 

import { useState } from "react";  
import Image from "next/image";
import Link from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";  
import { motion } from "framer-motion";  
import { FaChevronDown, FaGraduationCap,FaHtml5,FaDatabase,FaRobot,FaBriefcase,FaCloud, FaEnvelope,FaCode, FaLinkedin, FaGithub} from "react-icons/fa";  

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
     

      {/* Sections Container */}
      <div className="space-y-0">

         {/* ✅ Home Section */}
         <Element name="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
          
          {/* Profile Image Section */}
          <motion.div
            className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/profile1.jpg" // ✅ Replace with your actual profile image
              alt="Profile Picture"
              width={250}
              height={250}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Animated Name with Motion Effect */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight font-typewriter text-center"
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
          >
            {["Hi, ", "I'm", "  Sai ", "Nanda ", "Kumar"].map((word, index) => (
              <motion.span key={index} className="mr-3 text-yellow-400 inline-block" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext - Matching Image Style */}
          <motion.p
            className="text-gray-300 text-lg sm:text-xl md:text-2xl mt-3 leading-relaxed text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Full-Stack Developer | Java, Spring Boot, React | AI & GenAI Enthusiast
          </motion.p>

          {/* Buttons - Keeping Your Existing Style */}
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

          {/* Scroll Down Indicator */}
          <div className="mt-16 flex flex-col items-center">
            <p className="text-gray-400 text-lg">Scroll down to explore my work</p>
            <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer mt-3">
              <FaChevronDown className="text-yellow-400 text-3xl animate-bounce" />
            </ScrollLink>
          </div>
        </Element>
        {/* ✅ About Section */}
        <Element name="about" className="min-h-screen flex flex-col items-center justify-center px-6 text-center w-full bg-gradient-to-b from-[#0f172a] to-[#111827] relative overflow-hidden">
  
  {/* 🔹 Max Width */}
  <div className="max-w-6xl mx-auto w-full px-6">

    {/* 🔹 About Me Title Section */}
    <motion.div 
      className="mb-10 text-center relative z-10 pt-24"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-sm font-semibold text-gray-400 px-3 py-1 border border-gray-600 rounded-full">
        About Me
      </span>
      <h1 className="text-[2.1rem] font-bold text-white mt-4">
        Building Smart, Scalable & Efficient Software Solutions
      </h1>
      <p className="text-md text-gray-400 max-w-3xl mx-auto mt-3">
        Full-Stack Developer | AI & GenAI Enthusiast
      </p>
    </motion.div>

    {/* 🔹 Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-6 w-full items-start">

      {/* 📚 Background Card (Left Column - Dynamic Height) */}
      <motion.div 
        className="md:row-span-2 bg-gray-900 p-5 rounded-xl shadow-lg text-left flex flex-col border border-gray-800 w-full"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h3 className="text-[1.1rem] font-bold text-white flex items-center">
          <FaGraduationCap className="mr-3 text-yellow-400 text-[1.7rem]" /> Background
        </h3>
        <p className="text-gray-300 text-[0.95rem] mt-3 leading-relaxed font-typewriter">
          Self-motivated IT professional with 1.5 years of full-stack development experience in Java, Spring Boot, React.js, and AI. Pursuing a Master’s in Computer Science, specializing in deep learning, NLP, and computer vision. Passionate about building high-performance software solutions, optimizing performance, and driving innovation.
        </p>
      </motion.div>

      {/* 💾 Backend Tech & Databases */}
      <motion.div 
        className="bg-gray-900 p-5 rounded-xl shadow-lg text-left flex flex-col border border-gray-800 w-full h-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3 className="text-[1.1rem] font-bold text-white flex items-center">
          <FaDatabase className="mr-3 text-blue-400 text-[1.7rem]" /> Backend Tech & Databases
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {["Spring Boot", "Spring Security", "JDBC", "Hibernate", "JWT", "JUnit", "Node.js", "SQL", "PL/SQL", "MongoDB"].map((tech, index) => (
            <span key={index} className="bg-gray-800 px-3 py-1 rounded-md text-[0.9rem] text-gray-200 font-semibold hover:bg-gray-700 transition">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 🌐 API's & Cloud */}
      <motion.div 
        className="bg-gray-900 p-5 rounded-xl shadow-lg text-left flex flex-col border border-gray-800 w-full h-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <h3 className="text-[1.1rem] font-bold text-white flex items-center">
          <FaCloud className="mr-3 text-green-400 text-[1.7rem]" /> API's & Cloud
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {["RESTful API", "Docker", "CI/CD", "AWS", "GraphQL","Kubernetes"].map((tech, index) => (
            <span key={index} className="bg-gray-800 px-4 py-1 rounded-md text-[0.9rem] text-gray-200 font-semibold hover:bg-gray-700 transition">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 💻 Programming - Fixed Height Issue */}
      <motion.div 
        className="bg-gray-900 p-5 rounded-xl shadow-lg text-left flex flex-col border border-gray-800 w-full h-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h3 className="text-[1.1rem] font-bold text-white flex items-center">
          <FaCode className="mr-3 text-purple-400 text-[1.7rem]" /> Programming
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {["Java", "Python", "React", "Node.js", "Next.js"].map((lang, index) => (
            <span key={index} className="bg-gray-800 px-3 py-1 rounded-md text-[0.9rem] text-gray-200 font-semibold hover:bg-gray-700 transition">
              {lang}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 🖥 Web Technologies & Build Tools */}
      <motion.div 
        className="bg-gray-900 p-6 rounded-xl shadow-lg text-left flex flex-col border border-gray-800 w-full h-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h3 className="text-[1.1rem] font-bold text-white flex items-center">
          <FaHtml5 className="mr-3 text-red-400 text-[1.7rem]" /> Web Technologies & Build Tools
        </h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {["HTML5", "CSS", "React.js", "Next.js", "Redux", "Tailwind CSS", "Webpack", "Babel", "npm", "Git", "Maven", "Postman"].map((tech, index) => (
            <span key={index} className="bg-gray-800 px-3 py-1 rounded-md text-[0.9rem] text-gray-200 font-semibold hover:bg-gray-700 transition">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Button */}
    <div className="flex justify-center mt-12 mb-16">
    <Link href="/about">
  <motion.button 
    className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition-all flex items-center"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.6 }}
  >
    Learn More About Me →
  </motion.button>
  </Link>
</div>

  </div>
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
            <a href="mailto:sainandakumar.tirneddi@gmail.com" target="_blank"><FaEnvelope className="hover:text-yellow-500 transition" /></a>
            <a href="https://www.linkedin.com/in/tirneddi-sai-nanda-kumar-5167b1191/" target="_blank"><FaLinkedin className="hover:text-yellow-500 transition" /></a>
            <a href="https://github.com/nandakumartirneddi" target="_blank"><FaGithub className="hover:text-yellow-500 transition" /></a>
          </div>
        </Element>

      </div>
    </div>
  );
}