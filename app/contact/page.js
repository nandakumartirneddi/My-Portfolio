"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { PiProjectorScreenFill } from "react-icons/pi"; // Example of an additional icon

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold font-mono mb-6"
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
        I am a **recent graduate** and currently **looking for opportunities** to contribute and grow in the tech industry.
        My inbox is always open! Feel free to reach out if you have any questions, want to collaborate, or discuss a new opportunity.
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Hit me up if you have some question, want a collaboration, or just play a game of chess. I'll try to get back to you as soon as I can.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 text-3xl md:text-4xl text-yellow-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link href="mailto:your.sainandakumartirneddi@gmail.com" target="_blank">
          <FaEnvelope className="hover:text-yellow-500 transition" />
        </Link>
        <Link href="https://www.linkedin.com/in/tirneddi-sai-nanda-kumar-5167b1191/" target="_blank">
          <FaLinkedin className="hover:text-yellow-500 transition" />
        </Link>
        <Link href="https://github.com/nandakumartirneddi" target="_blank">
          <FaGithub className="hover:text-yellow-500 transition" />
        </Link>
      </motion.div>
    </div>
  );
}