import LadderSvg from "@/components/LadderSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const navLinks = [
  { path: "/thoughts", label: "Thoughts", rotation: "-1deg" },
  { path: "/projects", label: "Projects", rotation: "2deg" },
];

export const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

export const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

export const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

// Positions are in LadderSvg's 300x400 viewBox units and converted to
// percentages, so labels stay between the rails and rungs at any size and in
// any browser. Rails' inner edges sit at x=76 and x=220; rungs at y=50..350
// are ~10 units thick, leaving a clear gap from y+6 to y+46.
const VIEWBOX_W = 300;
const VIEWBOX_H = 400;
const RAIL_INNER_LEFT = 76;
const RAIL_INNER_RIGHT = 220;

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

const betweenRails = (top: number, bottom: number) => ({
  left: pct(RAIL_INNER_LEFT, VIEWBOX_W),
  width: pct(RAIL_INNER_RIGHT - RAIL_INNER_LEFT, VIEWBOX_W),
  top: pct(top, VIEWBOX_H),
  height: pct(bottom - top, VIEWBOX_H),
});

const rungGap = (index: number) => betweenRails(50 * (index + 1) + 6, 50 * (index + 1) + 46);

const linkClass = "text-primary hover:text-[#ea384c] transition-colors";

const socialLinks = [
  { href: "https://x.com/its_hapenin", label: "@its_hapenin on X", Icon: XIcon, rotation: "1deg" },
  { href: "https://www.linkedin.com/in/victoria--klein", label: "victoria--klein on LinkedIn", Icon: LinkedInIcon, rotation: "-1deg" },
  { href: "https://github.com/victoria-klein", label: "victoria-klein on GitHub", Icon: GitHubIcon, rotation: "1deg" },
];

const LadderNav = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative w-64 aspect-[3/4]", className)}>
      <div className="absolute inset-0">
        <LadderSvg />
      </div>

      <div className="absolute flex items-center justify-center z-30" style={betweenRails(0, 46)}>
        <Link to="/" className="font-courier text-[#6E59A5] hover:text-[#ea384c] transition-colors font-bold text-xl whitespace-nowrap">
          Vic Klein
        </Link>
      </div>

      {navLinks.map((link, index) => (
        <div
          key={link.path}
          className="absolute flex items-center justify-center z-30"
          style={{ ...rungGap(index), transform: `rotate(${link.rotation})` }}
        >
          <Link to={link.path} className={`font-courier text-xl leading-none whitespace-nowrap ${linkClass}`}>
            {link.label}
          </Link>
        </div>
      ))}

      {socialLinks.map(({ href, label, Icon, rotation }, index) => (
        <div
          key={href}
          className="absolute flex items-center justify-center z-30"
          style={{ ...rungGap(navLinks.length + index), transform: `rotate(${rotation})` }}
        >
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={linkClass}>
            <Icon className="w-5 h-5" />
          </a>
        </div>
      ))}

      <div
        className="absolute aspect-square z-50"
        style={{ left: pct(92, VIEWBOX_W), width: pct(112, VIEWBOX_W), top: pct(318, VIEWBOX_H) }}
      >
        <Avatar className="w-full h-full overflow-visible bg-transparent">
          <AvatarImage src="/images/profile.png" alt="Victoria's profile" className="object-contain w-full h-full" />
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default LadderNav;
