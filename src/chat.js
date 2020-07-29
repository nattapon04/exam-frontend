import React, {Component} from "react";
import "./main.scss";

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          room:'',
          message: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({message: event.target.value});
      }

      componentDidMount(){
        if (this.props.location.state) {
          this.setState({
            room: this.props.location.state
          })
        }
      }

      render() {
        return (
            <div className = "bg">
              <div className ="logo">
                <img src="assets/images/logo.png" alt=""></img>
              </div>
            <div className = "container">
        <div className="title4"><b>ห้อง {this.state.room}</b></div>
                <div className = "container2">
                  <div className="smalltext">คุณ eiei</div>
                  <div className="boxmessage">
                      <div className="message">สวัสดี</div>
                  </div>
                <input type="text"  className="textbox4" value={this.state.message} onChange={this.handleChange} placeholder="Enter เพื่อส่ง"/>
                </div>
            </div>
          </div>
          );
      }
    }

export default Chat;