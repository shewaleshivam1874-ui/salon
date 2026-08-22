import React from 'react';
import { Link } from 'react-router-dom';

export function HighResLotusIcon({ size = 34, color = "#C49A7D" }) {
  return (
    <svg
      width={size}
      height={size * 0.9}
      viewBox="0 0 60 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Central Sharp Petal */}
      <path
        d="M 30 42 C 24 26, 23 14, 30 6 C 37 14, 36 26, 30 42 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner Left Petal */}
      <path
        d="M 30 42 C 21 28, 18 16, 23 10 C 27 18, 28 28, 30 42 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner Right Petal */}
      <path
        d="M 30 42 C 39 28, 42 16, 37 10 C 33 18, 32 28, 30 42 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Outer Left Petal */}
      <path
        d="M 30 42 C 18 34, 10 26, 14 18 C 21 23, 26 32, 30 42 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Outer Right Petal */}
      <path
        d="M 30 42 C 42 34, 50 26, 46 18 C 39 23, 34 32, 30 42 Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Base Horizontal Ellipse Ring */}
      <ellipse
        cx="30"
        cy="35"
        rx="15"
        ry="4.5"
        stroke={color}
        strokeWidth="1.6"
        fill="none"
      />

      {/* Bottom Center Pointed Stem (V-Shape) */}
      <path
        d="M 23 37 L 30 48 L 37 37"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({
  isDark = false,
  align = "center",
  showIcon = true,
  iconSize = 34,
  fontSize = "1.45rem"
}) {
  const textColor = isDark ? "#FFFFFF" : "#111111";
  const subtitleColor = isDark ? "#D5CBD8" : "#111111";
  const lotusColor = isDark ? "#E0B598" : "#C49A7D";

  const alignment = align === "flex-start" ? "flex-start" : "center";

  return (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: alignment,
        justifyContent: 'center',
        textAlign: alignment === "center" ? 'center' : 'left',
        textDecoration: 'none',
        lineHeight: 1
      }}
    >
      {showIcon && (
        <div style={{ marginBottom: '4px', display: 'flex', justifyContent: alignment }}>
          <HighResLotusIcon size={iconSize} color={lotusColor} />
        </div>
      )}
      <span
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: fontSize,
          fontWeight: '700',
          fontStyle: 'normal',
          letterSpacing: '-0.01em',
          color: textColor,
          marginBottom: '2px',
          display: 'block'
        }}
      >
        Komal
      </span>
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.58rem',
          fontWeight: '700',
          fontStyle: 'normal',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: subtitleColor,
          display: 'block'
        }}
      >
        BEAUTY SALON
      </span>
    </Link>
  );
}
