import React, {Component} from "react";
import "./main.scss";
import { Link } from 'react-router-dom';

class JoinRoom extends Component {
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
              <div className="title3"><b>เข้าร่วมแชท</b></div>
              <input type="text" required className="textbox3" value={this.state.room} onChange={this.handleChange} /><br/><br/>
              <Link to="/CreateOrJoin" ><input type="submit" className="Textbutton2" value="กลับ" /></Link>
              <Link to="/Chat" ><input type="submit" className="button3" value="เข้าร่วม" /></Link>
          </form>
            </div>
          </div>
          );
      }
    }

export default JoinRoom;