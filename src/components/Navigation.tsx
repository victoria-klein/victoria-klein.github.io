
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academic', label: 'Academic Journey' },
    { path: '/professional', label: 'Professional Work' },
    { path: '/thoughts', label: 'Thoughts' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-courier relative px-3 py-2 text-sm transition-colors",
                  "hover:text-secondary",
                  hoveredLink === link.path ? "text-secondary" : "text-primary"
                )}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
                {hoveredLink === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-200" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
