import React from "react";
import "./main.scss";
import yourName from "./yourName";

const App = () => {
  return (
    <div className = "bg">
      <div className ="logo">
        <img src="assets/images/logo.png" alt=""></img>
      </div>
      <div className = "container">
        <div className="title"><b>ชื่อของคุณ</b></div>
        <input type="text" required></input><br/><br/>
      </div>
    </div>
    )
};

export default App;
