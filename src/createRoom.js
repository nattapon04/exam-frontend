import React, {Component} from "react";
import "./main.scss";
import { Link } from 'react-router-dom';

class CreateRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {room: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({room: event.target.value});
      }
      render() {
        return (
            <div className = "bg">
              <div className ="logo">
                <img src="assets/images/logo.png" alt=""></img>
              </div>
            <div className = "container">
            <form>
              <div className="title3"><b>สร้างห้องใหม่</b></div>
              <input type="text" className="textbox3" value={this.state.room} onChange={this.handleChange} /><br/><br/>
              <Link to="/CreateOrJoin" style={{ textDecoration: 'none' }}><input type="submit" className="Textbutton2" value="กลับ" /></Link>
              <Link to="/Chat" style={{ textDecoration: 'none' }}><input type="submit" className="button3" value="ยืนยัน" /></Link>
          </form>
            </div>
          </div>
          );
      }
    }

export default CreateRoom;