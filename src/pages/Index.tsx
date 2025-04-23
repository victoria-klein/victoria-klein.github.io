import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const text = "Hello! I'm a mathematician who loves AI and quirky design";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-courier text-4xl md:text-6xl text-primary mb-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="font-courier text-lg text-gray-600 mb-8">
            Welcome to my corner of the internet
          </p>
          <div className="inline-block relative">
            <span className="absolute inset-0 bg-secondary opacity-20 transform rotate-3"></span>
            <span className="relative font-courier text-primary px-4 py-2">
              Let's explore together
            </span>
          </div>
        </motion.div>
      </div>
      <div 
        className="absolute bottom-8 left-8 w-24 h-24"
        style={{
          clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)',
          position: 'relative'
        }}
      >
        <Avatar 
          className="w-full h-full overflow-hidden"
          style={{
            clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)',
          }}
        >
          <AvatarImage 
            src="/placeholder.svg" 
            alt="Your profile"
            className="object-cover w-full h-full"
          />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Index;
