'use client';

const RathYatraRouteMap = () => {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    >
      {/* Background */}
      <rect width="800" height="600" fill="#f8fafc" />

      {/* Temple Icon */}
      <g transform="translate(100,100)">
        <path
          d="M40 80V60H30V80H20V40L40 20L60 40V80H50V60H40zM35 45H45V55H35z"
          fill="#ea580c"
        />
        <text x="30" y="100" textAnchor="middle" className="text-sm" fill="#334155">
          ISKCON Temple
        </text>
      </g>

      {/* Road Network */}
      <g>
        {/* Background Roads */}
        <g>
          <path
            d="M120 120 L320 120 M320 120 L320 270 M320 270 L520 270 M520 270 L520 420 M520 420 L320 420 M320 420 L320 520 M320 520 L120 520 M120 520 L120 120"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Connecting Roads */}
          <path
            d="M220 120 L220 520 M420 270 L420 420"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Road Markings */}
        <g>
          <path
            d="M120 120 L320 120 M320 120 L320 270 M320 270 L520 270 M520 270 L520 420 M520 420 L320 420 M320 420 L320 520 M320 520 L120 520 M120 520 L120 120"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 10"
          />
          {/* Connecting Road Markings */}
          <path
            d="M220 120 L220 520 M420 270 L420 420"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 10"
          />
        </g>

        {/* Route Highlight */}
        <path
          d="M140 140 L300 140 L300 250 L500 250 L500 400 L300 400 L300 500 L140 500 L140 140"
          fill="none"
          stroke="#ea580c"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 12"
          className="animate-pulse"
        />

        {/* Intersections */}
        <g>
          <circle cx="300" cy="140" r="15" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="300" cy="250" r="15" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="500" cy="250" r="15" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="500" cy="400" r="15" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="300" cy="400" r="15" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="300" cy="500" r="15" fill="#94a3b8" stroke="white" strokeWidth="2" />
          {/* Additional Intersections */}
          <circle cx="220" cy="140" r="12" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="220" cy="250" r="12" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="220" cy="400" r="12" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="220" cy="500" r="12" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="420" cy="250" r="12" fill="#94a3b8" stroke="white" strokeWidth="2" />
          <circle cx="420" cy="400" r="12" fill="#94a3b8" stroke="white" strokeWidth="2" />
        </g>
      </g>

      {/* Direction Arrows */}
      <g className="text-orange-600">
        <path d="M200 135 L220 140 L200 145z" fill="currentColor" />
        <path d="M295 200 L300 220 L305 200z" fill="currentColor" />
        <path d="M495 300 L500 320 L505 300z" fill="currentColor" />
        <path d="M295 450 L300 470 L305 450z" fill="currentColor" />
        <path d="M200 495 L180 500 L200 505z" fill="currentColor" />
      </g>

      {/* Landmarks and Road Names */}
      <g className="text-slate-700">
        {/* Hirapur Main Road */}
        <circle cx="300" cy="140" r="6" fill="#ea580c" />
        <text x="320" y="130" className="text-sm font-semibold" fill="currentColor">
          Hirapur Main Road
        </text>
        <text x="220" y="110" className="text-xs italic" fill="#64748b" transform="rotate(-90 220,110)">
          Hirapur Road
        </text>

        {/* Court More */}
        <circle cx="300" cy="250" r="6" fill="#ea580c" />
        <text x="320" y="240" className="text-sm font-semibold" fill="currentColor">
          Court More
        </text>
        <text x="420" y="260" className="text-xs italic" fill="#64748b">
          Court Road
        </text>

        {/* Burnpur Road */}
        <circle cx="500" cy="250" r="6" fill="#ea580c" />
        <text x="520" y="240" className="text-sm font-semibold" fill="currentColor">
          Burnpur Road
        </text>
        <text x="510" y="320" className="text-xs italic" fill="#64748b" transform="rotate(-90 510,320)">
          Burnpur Main Road
        </text>

        {/* Galaxy Mall */}
        <circle cx="500" cy="400" r="6" fill="#ea580c" />
        <text x="520" y="390" className="text-sm font-semibold" fill="currentColor">
          Galaxy Mall
        </text>
        <text x="300" y="460" className="text-xs italic" fill="#64748b">
          Return Route
        </text>
      </g>

      {/* Legend */}
      <g transform="translate(600,500)">
        <path
          d="M0 0 L40 0"
          stroke="#ea580c"
          strokeWidth="8"
          strokeDasharray="1 12"
        />
        <text x="50" y="5" className="text-sm" fill="#334155">
          Procession Route
        </text>
        <circle cx="20" cy="30" r="6" fill="#ea580c" />
        <text x="50" y="35" className="text-sm" fill="#334155">
          Major Stops
        </text>
      </g>

      {/* Compass */}
      <g transform="translate(700,100)">
        <circle cx="0" cy="0" r="30" fill="white" stroke="#ea580c" />
        <path d="M0 -25 L0 25 M-25 0 L25 0" stroke="#ea580c" strokeWidth="2" />
        <text x="0" y="-15" textAnchor="middle" fill="#ea580c" className="text-sm">
          N
        </text>
        <text x="15" y="5" fill="#ea580c" className="text-sm">
          E
        </text>
        <text x="0" y="20" textAnchor="middle" fill="#ea580c" className="text-sm">
          S
        </text>
        <text x="-15" y="5" fill="#ea580c" className="text-sm">
          W
        </text>
      </g>
    </svg>
  );
};

export default RathYatraRouteMap;