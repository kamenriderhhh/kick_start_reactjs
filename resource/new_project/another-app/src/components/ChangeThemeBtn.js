import React, { useState, useEffect } from "react";
import "./ChangeThemeBtn.css";

const ChangeThemeBtn = () => {
  const [globalInt, setGlobalInt] = useState(0);
  const [myTheme, setMyTheme] = useState(1);
  const paragraphText = "Hellosss World, click:";

  /**
   * initialy value 1 is light theme, value 2 is dark theme
   */
  useEffect(() => {
    if (myTheme !== null) {
      console.log(myTheme);
      switch (myTheme) {
        case 1:
          document.getElementById("container").className = "light-theme";
          break;
        case 2:
          document.getElementById("container").className = "cyan-theme";
          break;
        default:
          document.getElementById("container").className = "dark-theme";
      }
    }
    return () => {
      // cleanup
    };
  }, [myTheme]);

  return (
    <div id="container">
      <p>{`My harded text ${paragraphText} ${globalInt}`}</p>
      <button
        onClick={() => {
          setGlobalInt(globalInt + 1);
        }}
      >
        increase value!
      </button>
      {[1, 2, 3].map((value) => {
        return (
          <button
            onClick={() => {
              setMyTheme(value);
            }}
          >
            change theme {value}
          </button>
        );
      })}
    </div>
  );
};

export default ChangeThemeBtn;
