import React from "react";
import "./main.scss";
import yourName from "yourName";

const App = () => {
  return (
    <div className = "bg">
      <div className ="logo">
        <img src="assets/images/logo.png" alt=""></img>
      </div>
      <div className = "container">
        <yourName />
      </div>
    </div>
    )
};

export default App;
