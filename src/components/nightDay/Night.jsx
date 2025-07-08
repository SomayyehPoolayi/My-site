import React from "react";
import styled from "./night.module.css";

export default function Night({ isDarkMode, toggleDarkMode }) {
  return (
    <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
      {isDarkMode ? (
        // 🌙 حالت شب
        <div className={styled.moveMoonWrapper}>
          <svg
            width="90"
            height="90"
            viewBox="0 0 50 50"
            stroke="currentColor"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styled.moveMoon}
          >
            <path
              d="M40 48C33 48 27.5 42.5 27.5 35.5C27.5 31 29.9 26.9 33.7 24.6C34.3 24.3 34.2 23.4 33.5 23.2C32.1 22.7 30.6 22.5 29 22.5C21.3 22.5 15 28.8 15 36.5C15 44.2 21.3 50.5 29 50.5C34.6 50.5 39.4 47.1 41.6 41.9"
              fill="#FFD700"
            />
          </svg>
        </div>
      ) : (
        // ☀️ حالت روز
        <div className={styled.rotateSunWrapper}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styled.rotateCircle}
          >
            <circle cx="32" cy="32" r="12" fill="#FFA500" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 32 + Math.cos(angle) * 20;
              const y1 = 32 + Math.sin(angle) * 20;
              const x2 = 32 + Math.cos(angle) * 28;
              const y2 = 32 + Math.sin(angle) * 28;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FFA500"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
}
