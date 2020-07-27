import React, {Component} from "react";
import "./main.scss";

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
              <input type="text" required className="textbox3" value={this.state.room} onChange={this.handleChange} /><br/><br/>
              <input type="submit" className="Textbutton2" value="กลับ" />
              <input type="submit" className="button3" value="ยืนยัน" />
          </form>
            </div>
          </div>
          );
      }
    }

export default CreateRoom;