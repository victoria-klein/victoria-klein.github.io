
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LadderSvg from "@/components/LadderSvg";

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

  const links = [{
    path: '/about',
    label: 'About',
    rotation: '2deg'
  }, {
    path: '/cv',
    label: 'CV',
    rotation: '-2deg'
  }, {
    path: '/thoughts',
    label: 'Thoughts &\nProjects',
    rotation: '-1deg'
  }];

  return <div className="min-h-screen pt-16 bg-white relative">
      <div className="fixed top-16 left-8 z-40">
        <span className="font-courier text-2xl text-[#6E59A5] border-2 border-dashed border-[#FF6B6B] px-4 py-2 bg-[#FFDEE2]">
          Victoria Klein
        </span>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-left">
          <div className="relative h-[400px] -ml-48">
            <div className="absolute left-32 h-full w-64">
              <LadderSvg />
            </div>
            {links.map((link, index) => <div key={link.path} className="absolute" style={{
            top: `${index * 50 + 100}px`,
            left: '250px', // Moved further to the right
            transform: `rotate(${link.rotation})`,
            zIndex: 30
          }}>
                <Link to={link.path} className="inline-block font-courier text-2xl text-primary hover:text-secondary transition-colors whitespace-pre-line leading-tight">
                  {link.label}
                </Link>
              </div>)}
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
    </div>;
};

export default Index;

