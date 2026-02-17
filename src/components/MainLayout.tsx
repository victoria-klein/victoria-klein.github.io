import LadderSvg from "@/components/LadderSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { path: "/cv", label: "CV", rotation: "-2deg", top: 135 },
    { path: "/thoughts", label: "Thoughts", rotation: "-1deg", top: 180 },
    { path: "/projects", label: "Projects", rotation: "2deg", top: 230 },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Mobile */}
      <div className="lg:hidden">
        {isHome ? (
          /* Mobile Home: centered ladder with nav */
          <div className="min-h-screen flex items-center justify-center">
            <div className="relative" style={{ width: '220px', height: '310px' }}>
              <div className="absolute w-full text-center" style={{ top: '18px' }}>
                <span className="font-courier text-[#6E59A5] font-bold text-xl">Vic Klein</span>
              </div>
              <div className="absolute" style={{ left: '10px', top: '35px', width: '200px', height: '267px' }}>
                <LadderSvg />
              </div>
              <div className="absolute w-14 h-14" style={{ left: '75px', top: '240px', zIndex: 50 }}>
                <Avatar className="w-full h-full overflow-visible bg-transparent">
                  <AvatarImage src="/images/profile.png" alt="Victoria's profile" className="object-contain w-full h-full" />
                  <AvatarFallback>VK</AvatarFallback>
                </Avatar>
              </div>
              {links.map((link) => (
                <div
                  key={link.path}
                  className="absolute flex justify-center"
                  style={{
                    top: `${Math.round(link.top * 0.667 - 18)}px`,
                    left: '52px',
                    width: '116px',
                    transform: `rotate(${link.rotation})`,
                    zIndex: 30,
                  }}
                >
                  <Link
                    to={link.path}
                    className="inline-block font-courier text-lg text-primary hover:text-[#ea384c] transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <div
                className="absolute flex justify-center"
                style={{ top: '179px', left: '52px', width: '116px', zIndex: 30 }}
              >
                <a
                  href="https://x.com/its_hapenin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-[#ea384c] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
              <div
                className="absolute flex justify-center"
                style={{ top: '209px', left: '52px', width: '116px', zIndex: 30 }}
              >
                <a
                  href="https://www.linkedin.com/in/victoria--klein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-[#ea384c] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
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
                  <a
                    href="https://x.com/its_hapenin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    @its_hapenin
                  </a>
                  <a
                    href="https://www.linkedin.com/in/victoria--klein"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-courier text-2xl text-[#6E59A5] hover:text-[#ea384c] transition-colors whitespace-nowrap"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    victoria--klein
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
              <div className="absolute left-56 top-16 h-full w-64">
                <div className="absolute left-0 top-6 z-40 mb-4 w-full flex justify-center">
                  <Link
                    to="/"
                    className="font-courier text-[#6E59A5] hover:text-[#ea384c] transition-colors font-bold text-xl px-[16px] py-[8px]"
                  >
                    Vic Klein
                  </Link>
                </div>
                <LadderSvg />
                <div
                  className="absolute bottom-24 left-24 w-24 h-24"
                  style={{ position: "relative", zIndex: 50 }}
                >
                  <Avatar className="w-full h-full overflow-visible bg-transparent">
                    <AvatarImage
                      src="/images/profile.png"
                      alt="Victoria's profile"
                      className="object-contain w-full h-full"
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
                    top: `${link.top}px`,
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
              <div
                className="absolute"
                style={{
                  top: "280px",
                  left: "290px",
                  transform: "rotate(1deg)",
                  zIndex: 30,
                }}
              >
                <a
                  href="https://x.com/its_hapenin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 font-courier text-sm font-bold transition-colors whitespace-nowrap leading-tight px-3 ${hoveredLink === "twitter" ? "text-[#ea384c]" : "text-primary"}`}
                  onMouseEnter={() => setHoveredLink("twitter")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  @its_hapenin
                </a>
              </div>
              <div
                className="absolute"
                style={{
                  top: "325px",
                  left: "290px",
                  transform: "rotate(-1deg)",
                  zIndex: 30,
                }}
              >
                <a
                  href="https://www.linkedin.com/in/victoria--klein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 font-courier text-xs font-bold transition-colors whitespace-nowrap leading-tight px-3 ${hoveredLink === "linkedin" ? "text-[#ea384c]" : "text-primary"}`}
                  onMouseEnter={() => setHoveredLink("linkedin")}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  victoria--klein
                </a>
              </div>
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
