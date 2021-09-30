import React, { useState } from "react";
import "./myApp.css";

const MyApp = () => {
  const [like, setLike] = useState(false);
  const [theme, setTheme] = useState(false);

  return (
    <div
      className="main-body"
      style={theme ? { backgroundColor: "cyan" } : { backgroundColor: "white" }}
    >
      <button onClick={() => setLike(!like)}>Like</button>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <div className="display-text">
        {like ? "Like" : "Please give me a like"}
      </div>
    </div>
  );
};

export default MyApp;
