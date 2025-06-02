import React, { useState } from "react";
import styled from "./darkModeChange.module.css";
import Night from "../nightDay/Night";

function DarkMode(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
   };

  return (
    <div
      className={`${styled.darkModeWrapper} ${
        isDarkMode ? styled.darkMode : styled.lightMode
      }`}
    >
      <Night isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
{/* 
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, { isDarkMode, toggleDarkMode })
      )} */}

      <div>{props.children}</div>
    </div>
  );
}
export default DarkMode;
