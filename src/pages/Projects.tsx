
import React from 'react';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen pt-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-courier text-4xl text-primary mb-8 text-left md:text-2xl">
            Projects
          </h1>
          
          <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none">
            <p className="font-courier text-lg text-gray-700">
              A showcase of personal and professional projects spanning mathematics, AI, and software development.
            </p>
            <p className="font-courier text-md text-gray-500 mt-4 border border-dashed border-gray-500 p-2">
              Coming soon: Detailed project descriptions and demonstrations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
