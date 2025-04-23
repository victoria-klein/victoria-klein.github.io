import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { path: '/', label: 'Home', rotation: '-3deg' },
    { path: '/about', label: 'About', rotation: '2deg' },
    { path: '/academic', label: 'Academic Journey', rotation: '-2deg' },
    { path: '/professional', label: 'Professional Work', rotation: '3deg' },
    { path: '/thoughts', label: 'Thoughts & Projects', rotation: '-1deg' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            {links.map((link) => (
              <div key={link.path} className="inline-block relative">
                <span 
                  className="absolute inset-0 bg-secondary opacity-20"
                  style={{ transform: `rotate(${link.rotation})` }}
                ></span>
                <Link
                  to={link.path}
                  className={cn(
                    "relative font-courier px-3 py-2 text-sm transition-colors z-10",
                    "hover:text-secondary",
                    hoveredLink === link.path ? "text-secondary" : "text-primary"
                  )}
                  onMouseEnter={() => setHoveredLink(link.path)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
