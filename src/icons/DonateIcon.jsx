import React from "react";

export default function DonateIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 240"
      className={className}
    >
      {/* Group everything together */}
      <g transform="scale(1.6) translate(-40,-40)">
        {/* Hand Palm slightly extended */}
        <path
          d="M85 140 L85 120 100 120 100 160 85 160 85 140"
          fill="none"
          stroke="#1E90FF"
          strokeWidth="3"
        />
        <path
          d="M100 130 L115 123 118 123 135 130 140 131 141 132 143 136 138 140 115 135"
          fill="none"
          stroke="#1E90FF"
          strokeWidth="3"
        />
        <path
          d="M100 150 L130 157 150 150 165 135 165 127 160 127 140 140"
          fill="none"
          stroke="#1E90FF"
          strokeWidth="3"
        />
        <path
          d="M95 147 L90 147"
          fill="none"
          stroke="#1E90FF"
          strokeWidth="3"
        />

        {/* Coin slightly smaller and closer to hand */}
        <circle
          cx="125"
          cy="80"
          r="22" // smaller coin
          fill="gold"
          stroke="#B8860B"
          strokeWidth="5"
        />
        <text
          x="125"
          y="90"
          fontSize="30"
          fontFamily="Arial"
          fontWeight="bold"
          textAnchor="middle"
          fill="Red"
        >
          $
        </text>
      </g>
    </svg>
  );
}