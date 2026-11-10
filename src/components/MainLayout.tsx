import LadderNav, { GitHubIcon, LinkedInIcon, navLinks, XIcon } from "@/components/LadderNav";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile */}
      <div className="lg:hidden">
        {isHome ? (
          /* Mobile Home: centered ladder with nav */
          <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-12">
            <LadderNav />
            <div className="w-full max-w-md">{children}</div>
          </div>
        ) : (
          /* Mobile Other Pages: burger menu + content */
          <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
              <div className="flex items-center justify-between p-4">
                <Link to="/" className="font-courier text-[#6E59A5] font-bold text-sm px-3 py-2">
                  Vic Klein
                </Link>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#6E59A5]">
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-20">
                <div className="flex flex-col items-center space-y-8 pt-12">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="https://x.com/its_hapenin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <XIcon className="w-3.5 h-3.5" />
                    @its_hapenin
                  </a>
                  <a
                    href="https://www.linkedin.com/in/victoria--klein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LinkedInIcon className="w-3 h-3" />
                    victoria--klein
                  </a>
                  <a
                    href="https://github.com/victoria-klein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    victoria-klein
                  </a>
                </div>
              </div>
            )}
            <div className="pt-20 px-4">{children}</div>
          </>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="fixed h-[400px] lg:-ml-56 xl:-ml-64 2xl:-ml-72">
            <div className="relative h-full w-64">
              <LadderNav className="absolute left-56 top-24" />
            </div>
          </div>
        </div>
        {/* Desktop Scrollable content area */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="lg:pl-[250px] xl:pl-[220px] 2xl:pl-[190px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
