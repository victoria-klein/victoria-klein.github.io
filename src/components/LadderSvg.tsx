const LadderSvg = () => {
  return (
    <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1/5 h-auto opacity-20">
      <defs>
        <pattern id="woodGrain" patternUnits="userSpaceOnUse" width="100" height="50">
          <path d="M0 0 Q25 10, 50 0 T100 0 M0 25 Q25 35, 50 25 T100 25" stroke="#E5664D" fill="none" strokeWidth="1.5" opacity="0.5"/>
        </pattern>
        <pattern id="woodKnots" patternUnits="userSpaceOnUse" width="100" height="100">
          <circle cx="20" cy="30" r="4" fill="#E5664D" opacity="0.7"/>
          <circle cx="80" cy="70" r="5" fill="#E5664D" opacity="0.7"/>
          <ellipse cx="50" cy="85" rx="3" ry="4" fill="#E5664D" opacity="0.7"/>
        </pattern>
      </defs>
      
      <path d="M63 20 C60 20, 60 30, 62 40 C58 60, 60 90, 59 110 C57 150, 61 200, 58 240 C59 280, 60 300, 62 330 C58 350, 60 370, 62 380 L75 380 C76 360, 73 340, 74 320 C72 280, 75 240, 73 200 C75 160, 73 120, 76 80 C73 60, 77 40, 75 20 Z" fill="#FF7F6B" />
      <path d="M225 20 C222 20, 222 30, 224 40 C220 60, 222 90, 221 110 C219 150, 223 200, 220 240 C221 280, 222 300, 224 330 C220 350, 222 370, 224 380 L237 380 C238 360, 235 340, 236 320 C234 280, 237 240, 235 200 C237 160, 235 120, 238 80 C235 60, 239 40, 237 20 Z" fill="#FF7F6B" />
      
      {[50, 100, 150, 200, 250, 300, 350].map((y) => (
        <path
          key={y}
          d={`M60 ${y} C60 ${y-3}, 65 ${y-4}, 70 ${y-1} L230 ${y-1} C235 ${y-4}, 240 ${y-3}, 240 ${y} C240 ${y+4}, 235 ${y+6}, 230 ${y+3} L70 ${y+3} C65 ${y+6}, 60 ${y+4}, 60 ${y} Z`}
          fill="#FF7F6B"
        />
      ))}
      
      <rect x="63" y="20" width="12" height="360" fill="url(#woodGrain)" opacity="0.8" />
      <rect x="225" y="20" width="12" height="360" fill="url(#woodGrain)" opacity="0.8" />
      
      <circle cx="67" cy="90" r="3" fill="#E5664D" opacity="0.7"/>
      <circle cx="69" cy="220" r="4" fill="#E5664D" opacity="0.7"/>
      <ellipse cx="68" cy="330" rx="2" ry="3" fill="#E5664D" opacity="0.7"/>
      
      <circle cx="230" cy="120" r="3" fill="#E5664D" opacity="0.7"/>
      <circle cx="232" cy="260" r="4" fill="#E5664D" opacity="0.7"/>
      <ellipse cx="229" cy="370" rx="2" ry="3" fill="#E5664D" opacity="0.7"/>
      
      <circle cx="120" cy="50" r="2" fill="#E5664D" opacity="0.7"/>
      <circle cx="180" cy="100" r="2" fill="#E5664D" opacity="0.7"/>
      <circle cx="140" cy="200" r="2" fill="#E5664D" opacity="0.7"/>
      <circle cx="200" cy="300" r="2" fill="#E5664D" opacity="0.7"/>
      
      <path d="M67 80 L72 80 L70 200 L69 200 Z" fill="#E5664D" opacity="0.6" />
      <path d="M230 150 L235 150 L232 300 L233 300 Z" fill="#E5664D" opacity="0.6" />
      
      {[50, 100, 150, 200, 250, 300, 350].map((y) => (
        <g key={`nails-${y}`}>
          <circle cx="65" cy={y} r="2" fill="#A05048" />
          <circle cx="235" cy={y} r="2" fill="#A05048" />
        </g>
      ))}
    </svg>
  );
};

export default LadderSvg;
