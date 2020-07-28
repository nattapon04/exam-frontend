import React, {Component} from "react";
import "./main.scss";
import { Link } from 'react-router-dom';

class CreateOrJoin extends Component {
  render() {
    return (
      <div className = "bg">
        <div className ="logo">
          <img src="assets/images/logo.png" alt=""></img>
        </div>
        <div className = "container">
            <div className="title2"><b>คุณ ... </b></div>
            <Link to="/CreateRoom" ><input type="submit" className="button2" value="สร้างห้องใหม่" /></Link>
            <Link to="/JoinRoom" ><input type="submit" className="Textbutton" value="เข้าร่วมแชท" /></Link>
        </div>
    </div>
    );
  }
}

export default CreateOrJoin;
