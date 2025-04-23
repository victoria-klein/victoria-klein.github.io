
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
    label: 'Thoughts /\nProjects',
    rotation: '-1deg'
  }];

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
      }} className="text-left">
          <div className="relative h-[500px] -ml-48">
            <div className="absolute left-56 top-16 h-full w-64">
              <div className="absolute left-0 top-0 z-40">
                <span className="font-courier text-2xl text-[#6E59A5] border-2 border-dashed border-[#FF6B6B] px-4 py-2 bg-[#FFDEE2]">
                  Victoria Klein
                </span>
              </div>
              <LadderSvg />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24" style={{
                clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)',
              }}>
                <Avatar className="w-full h-full overflow-hidden" style={{
                  clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)'
                }}>
                  <AvatarImage src="/lovable-uploads/86d1ae5f-fce3-4935-9fb3-55a67db6a5cb.png" alt="Victoria's profile" className="object-cover w-full h-full" />
                  <AvatarFallback>VK</AvatarFallback>
                </Avatar>
              </div>
            </div>
            {links.map((link, index) => <div key={link.path} className="absolute" style={{
              top: `${80 + index * 110}px`,
              left: '150px',
              transform: `rotate(${link.rotation})`,
              zIndex: 30
            }}>
                <Link to={link.path} className="inline-block font-courier text-2xl text-[#6E59A5] hover:text-[#9b87f5] transition-colors whitespace-pre-line leading-tight px-0 py-0 mx-[12px] my-[12px]">
                  {link.label}
                </Link>
              </div>)}
          </div>
        </motion.div>
      </div>
    </div>;
};

export default Index;
