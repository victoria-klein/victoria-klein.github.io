
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";

const Index = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const links = [{
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
    <MainLayout>
      <div className="w-[600px] p-6 border-none bg-transparent">
        <p className="font-courier text-[#6E59A5] text-left px-0 mx-0">
          I am a machine learning scientist. My academic background is in mathematics and machine learning. I like to build things using the two.
        </p>
      </div>
      {links.map((link, index) => (
        <div
          key={link.path}
          className="absolute"
          style={{
            top: `${index * 50 + 130}px`,
            left: '-200px',
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
    </MainLayout>
  );
};

export default Index;
