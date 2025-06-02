import { Children, useState } from "react";
import styles from "./darkModeChange.module.css";

function DarkMode(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
   
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${styles.darkModeWrapper} ${
        isDarkMode ? styles.darkMode : styles.lightMode
      }`}
    >
       
      <button onClick={toggleDarkMode} className={styles.buttonChangeColor}>
        حالت شب
      </button>
      {props.children}
    </div>
  );
}
export default DarkMode;
