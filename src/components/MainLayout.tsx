
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LadderSvg from "@/components/LadderSvg";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const links = [{
    path: '/',
    label: 'Home',
    rotation: '-3deg'
  }, {
    path: '/cv',
    label: 'CV',
    rotation: '-2deg'
  }, {
    path: '/thoughts',
    label: 'Thoughts',
    rotation: '-1deg'
  }, {
    path: '/projects',
    label: 'Projects',
    rotation: '2deg'
  }];

  return (
    <div className="min-h-screen pt-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative h-[400px] -ml-48 flex items-start">
          <div className="relative h-full w-64">
            <div className="absolute left-56 top-16 h-full w-64">
              <div className="absolute left-0 top-0 z-40 mb-4">
                <span className="font-courier text-[#6E59A5] border-2 border-dashed border-[#FF6B6B] bg-[#FFDEE2] font-medium text-base px-[16px] mx-[45px] py-[8px] my-0">
                  Victoria Klein
                </span>
              </div>
              <LadderSvg />
              <div className="absolute bottom-20 left-24 w-24 h-24" style={{
                clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)',
                position: 'relative'
              }}>
                <Avatar className="w-full h-full overflow-hidden" style={{
                  clipPath: 'polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)'
                }}>
                  <AvatarImage src="/lovable-uploads/86d1ae5f-fce3-4935-9fb3-55a67db6a5cb.png" alt="Victoria's profile" className="object-cover w-full h-full" />
                  <AvatarFallback>VK</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          {links.map((link, index) => (
            <div
              key={link.path}
              className="absolute"
              style={{
                top: `${index * 50 + 130}px`,
                left: '220px',
                transform: `rotate(${link.rotation})`,
                zIndex: 30
              }}
            >
              <Link
                to={link.path}
                className={`inline-block font-courier text-2xl transition-colors whitespace-pre-line leading-tight px-3 ${hoveredLink === link.path ? 'text-[#ea384c]' : 'text-primary'}`}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="absolute left-[500px] top-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
