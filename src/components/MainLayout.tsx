import LadderSvg from "@/components/LadderSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useWhiteMode } from "@/contexts/WhiteModeContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isWhiteMode, toggleWhiteMode, getBackgroundClass } = useWhiteMode();

  const links = [
    { path: "/", label: "Home", rotation: "-3deg" },
    { path: "/cv", label: "CV", rotation: "-2deg" },
    { path: "/thoughts", label: "Thoughts", rotation: "-1deg" },
    { path: "/projects", label: "Projects", rotation: "2deg" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <span
              className={`font-courier text-[#6E59A5] border-2 border-dashed border-[#FF6B6B] ${getBackgroundClass()} font-medium text-sm px-3 py-2`}
            >
              Victoria Klein
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6E59A5]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-20">
            <div className="flex flex-col items-center space-y-8 pt-12">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={toggleWhiteMode}
                className="px-6 py-3 border-2 border-dashed border-[#FF6B6B] bg-[#FFDEE2] hover:bg-[#FFB6C1] font-courier text-sm text-[#6E59A5] transition-colors"
              >
                {isWhiteMode ? "colour" : "plain"}
              </button>
            </div>
          </div>
        )}

        {/* Mobile Content */}
        <div className="pt-20 px-4">{children}</div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen pt-16">
        {/* White Mode Toggle Button */}
        <button
          onClick={toggleWhiteMode}
          className="fixed top-48 right-8 z-50 px-4 py-2 border-2 border-dashed border-[#FF6B6B] bg-[#FFDEE2] hover:bg-[#FFB6C1] font-courier text-sm text-[#6E59A5] transition-colors"
        >
          {isWhiteMode ? "colour" : "plain"}
        </button>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="fixed h-[400px] -ml-48">
            <div className="relative h-full w-64">
              <div className="absolute left-56 top-16 h-full w-64">
                <div className="absolute left-0 top-0 z-40 mb-4">
                  <span
                    className={`font-courier text-[#6E59A5] border-2 border-dashed border-[#FF6B6B] ${getBackgroundClass()} font-medium text-base px-[16px] mx-[45px] py-[8px] my-0`}
                  >
                    Victoria Klein
                  </span>
                </div>
                <LadderSvg />
                <div
                  className="absolute bottom-20 left-24 w-24 h-24"
                  style={{
                    clipPath:
                      "polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)",
                    position: "relative",
                  }}
                >
                  <Avatar
                    className="w-full h-full overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(40% 0%, 90% 10%, 100% 60%, 70% 90%, 20% 100%, 0% 50%, 15% 10%)",
                    }}
                  >
                    <AvatarImage
                      src="/lovable-uploads/86d1ae5f-fce3-4935-9fb3-55a67db6a5cb.png"
                      alt="Victoria's profile"
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback>VK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              {links.map((link, index) => (
                <div
                  key={link.path}
                  className="absolute"
                  style={{
                    top: `${index * 50 + 130}px`,
                    left: "300px",
                    transform: `rotate(${link.rotation})`,
                    zIndex: 30,
                  }}
                >
                  <Link
                    to={link.path}
                    className={`inline-block font-courier text-2xl transition-colors whitespace-pre-line leading-tight px-3 ${hoveredLink === link.path ? "text-[#ea384c]" : "text-primary"}`}
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
        {/* Desktop Scrollable content area */}
        <div className="flex">
          <div className="w-[500px] flex-shrink-0"></div>
          <div className="flex-1 px-8">{children}</div>
          <div className="w-32 flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
