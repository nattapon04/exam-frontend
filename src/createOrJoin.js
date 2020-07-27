import React, {Component} from "react";
import "./main.scss";

class CreateOrJoin extends Component {
  render() {
    return (
      <div className = "bg">
        <div className ="logo">
          <img src="assets/images/logo.png" alt=""></img>
        </div>
        <div className = "container">
            <div className="title2"><b>คุณ ... </b></div>
            <input type="submit" className="button2" value="สร้างห้องใหม่" />
            <input type="submit" className="Textbutton" value="เข้าร่วมแชท" />
        </div>
    </div>
    );
  }
}

export default CreateOrJoin;
