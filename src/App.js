import React, {Component} from "react";
import "./main.scss";
import NameForm from "./nameForm";

class App extends Component {
  render() {
    return (
      <div className = "bg">
        <div className ="logo">
          <img src="assets/images/logo.png" alt=""></img>
        </div>
      <div className = "container">
        <NameForm />
      </div>
    </div>
    );
  }
}

export default App;
