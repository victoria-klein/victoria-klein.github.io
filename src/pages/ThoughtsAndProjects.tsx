
import React from 'react';
import { motion } from "framer-motion";

const ThoughtsAndProjects = () => {
  return <div className="min-h-screen pt-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <h1 className="font-courier text-4xl text-primary mb-8 text-left md:text-2xl">
            Thoughts & Projects
          </h1>
          
          <section className="mb-12">
            <h2 className="font-courier text-2xl text-secondary mb-4">Thoughts</h2>
            <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-lg space-y-4">
              <div className="bg-white border border-[#FF6B6B] p-4 rounded-md">
                <p className="font-courier text-lg text-gray-700 text-left font-normal">My own</p>
                <p className="font-courier text-md text-gray-500 mt-2">A space for personal reflections and insights.</p>
              </div>
              <div className="bg-white border border-[#FF6B6B] p-4 rounded-md">
                <p className="font-courier text-lg text-gray-700 text-left font-normal">Emerging Ideas</p>
                <p className="font-courier text-md text-gray-500 mt-2">Exploring new concepts and perspectives.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-courier text-2xl text-secondary mb-4">Projects</h2>
            <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-lg">
              <p className="font-courier text-lg text-gray-700">
                A showcase of personal and professional projects spanning mathematics, AI, and software development.
              </p>
              <p className="font-courier text-md text-gray-500 mt-4">
                Coming soon: Detailed project descriptions and demonstrations.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>;
};

export default ThoughtsAndProjects;
