import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import Developer from '../assets/developer.json'; // Replace with your Lottie animation file path
import Particles from '../components/Particles'; // Import the Particles component
import { Helmet } from 'react-helmet';
import { Github, Linkedin, FileText } from "lucide-react"; // Import Lucide icons

const Home = ({ viewCount }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Developer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const name = "Sojan O Nelson";

  return (
    <section id="home" className="h-screen relative bg-[#101010] flex items-center justify-center w-full text-white overflow-hidden">
      <Particles />
      <Helmet>
        <title>Sojan O Nelson | Software Developer</title>
        <meta name="description" content="Portfolio of Sojan O Nelson, a skilled Software Developer." />
        <meta name="keywords" content="Sojan, Software Developer, Web Developer" />
      </Helmet>
      <div className="flex flex-col md:flex-row items-center md:w-3/4 w-full justify-around space-y-10 md:space-y-0 px-5 md:px-0 relative">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-col">
            <motion.h1
              className="text-xl lg:text-3xl md:text-5xl poppins-bold font-bold mb-2 lg:mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hi there 👋🏼,
            </motion.h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center space-x-1 md:space-x-5">
              <h1 className="text-3xl md:text-5xl px-2 lg:px-0 poppins-bold font-bold">I'm</h1>
              <div className="flex space-x-1 md:space-x-2">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-4xl poppins-bold md:text-5xl text-orange-400 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
          <motion.p
            className="text-lg md:text-2xl font-regular poppins-regular py-2 mb-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Software Developer
          </motion.p>
          <div>
            <iframe 
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=112534" 
              style={{ border: "none", width: "100%", height: "auto" }}
            ></iframe>
          </div>
          
          <motion.div
            className="flex flex-wrap justify-center md:justify-start space-x-3 space-y-2 lg:mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <a href="#"></a>
            <a
              href="https://drive.google.com/file/d/1DyPfWou7L4kro2tIsQqcDgzhsXvhbsmZ/view?usp=drive_link"
              download
              className="px-4 py-0 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold flex items-center space-x-2"
            >
              <FileText size={19} />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/sojanonelson"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold flex items-center space-x-2"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://linkedin.com/in/sojanonelson"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center space-x-2"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </section>
  );
};

export default Home;
