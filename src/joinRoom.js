import React, {Component} from "react";
import "./main.scss";
import { Link } from 'react-router-dom';

class JoinRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
          room: '',
          name: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({room: event.target.value});
      }
      
      handleSubmit(event) {
        event.preventDefault();
      }

      componentDidMount(){
        if (this.props.location.state) {
          this.setState({
            name: this.props.location.state
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
            <form onSubmit={this.handleSubmit}>
              <div className="title3"><b>เข้าร่วมแชท</b></div>
              <input type="text" required className="textbox3" value={this.state.room} onChange={this.handleChange} /><br/><br/>
              <Link to={{pathname :"/CreateOrJoin" , state: this.state.name}} style={{ textDecoration: 'none' }}><input type="submit" className="Textbutton2" value="กลับ" /></Link>
              <Link to={{pathname :"/Chat" , state: this.state.room}} style={{ textDecoration: 'none' }} ><input type="submit" className="button3" value="เข้าร่วม" /></Link>
          </form>
            </div>
          </div>
          );
      }
    }

export default JoinRoom;