import React, { useEffect, useState } from "react";
import styled from "./darkModeChange.module.css";
import Night from "../nightDay/Night";

function DarkMode(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    document.body.classList.remove(isDarkMode ? "lightMode" : "darkMode");
    document.body.classList.add(isDarkMode ? "darkMode" : "lightMode");
  }, [isDarkMode]);

  return (
    <div
      className={`${styled.darkModeWrapper} ${
        isDarkMode ? styled.darkMode : styled.lightMode
      }`}
    >
      <Night isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div>{props.children}</div>
    </div>
  );
}
export default DarkMode;
