
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Stairs } from "lucide-react";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const text = "Hello! I'm a mathematician who loves AI and quirky design";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prev => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { path: '/about', label: 'About', rotation: '2deg' },
    { path: '/cv', label: 'CV', rotation: '-2deg' },
    { path: '/thoughts', label: 'Thoughts & Projects', rotation: '-1deg' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white relative">
      <div className="fixed top-16 left-8 z-40">
        <span className="font-courier text-2xl text-[#6E59A5] border-2 border-dashed border-[#FF6B6B] px-4 py-2 bg-[#FFDEE2]">
          Victoria Klein
        </span>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-courier text-4xl text-primary mb-8 text-left md:text-2xl">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="font-courier text-lg text-gray-600 mb-12">
            Welcome to my corner of the internet
          </p>
          <div className="relative mx-auto w-48 space-y-12">
            <Stairs className="absolute left-1/2 -translate-x-1/2 h-[400px] w-12 text-[#FF6B6B] opacity-20" />
            {links.map((link, index) => (
              <div 
                key={link.path} 
                className="relative w-full"
                style={{
                  transform: `translateY(${index * 100}px)`
                }}
              >
                <span 
                  className="absolute inset-0 bg-[#FF6B6B] opacity-20"
                  style={{ transform: `rotate(${link.rotation})` }}
                ></span>
                <Link
                  to={link.path}
                  className="relative font-courier text-2xl text-primary hover:text-secondary transition-colors z-10 block py-2 text-center"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="fixed bottom-8 left-8 w-24 h-24" style={{
        clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)',
        position: 'relative'
      }}>
        <Avatar className="w-full h-full overflow-hidden" style={{
          clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)'
        }}>
          <AvatarImage src="/placeholder.svg" alt="Your profile" className="object-cover w-full h-full" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Index;
