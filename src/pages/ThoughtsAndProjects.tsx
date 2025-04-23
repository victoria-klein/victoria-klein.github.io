
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
            <h2 className="font-courier text-2xl text-secondary mb-4 text-left">Thoughts</h2>
            <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none space-y-4">
              <div>
                <p className="font-courier text-lg text-gray-700 text-left font-normal">My own</p>
                <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2">On scaling</p>
              </div>
              <div>
                <p className="font-courier text-lg text-gray-700 text-left font-normal">Others'</p>
                <p className="font-courier text-md text-gray-500 mt-2 text-left border border-dashed border-gray-500 p-2 text-sm">
                  <a href="https://transformer-circuits.pub/" className="underline hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">
                    https://transformer-circuits.pub/
                  </a>
                  {" "}I find this blog interesting. I am interested in the distillation of attention outputs
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="font-courier text-2xl text-secondary mb-4 text-left">Projects</h2>
            <div className="bg-[#FFDEE2] border-2 border-dashed border-[#FF6B6B] p-6 rounded-none">
              <p className="font-courier text-lg text-gray-700">
                A showcase of personal and professional projects spanning mathematics, AI, and software development.
              </p>
              <p className="font-courier text-md text-gray-500 mt-4 border border-dashed border-gray-500 p-2">
                Coming soon: Detailed project descriptions and demonstrations.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>;
};

export default ThoughtsAndProjects;
