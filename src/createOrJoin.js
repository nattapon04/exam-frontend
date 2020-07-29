import React, {Component} from "react";
import "./main.scss";
import { Link } from 'react-router-dom';

class CreateOrJoin extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
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
    <div className="title2"><b>คุณ {this.state.name} </b></div>
            <Link to = {{pathname :"/CreateRoom" , state: this.state.name}} style={{ textDecoration: 'none' }} ><input type="submit" className="button2" value="สร้างห้องใหม่" /></Link>
            <Link to = {{pathname :"/JoinRoom" , state: this.state.name}} style={{ textDecoration: 'none' }}><input type="submit" className="Textbutton" value="เข้าร่วมแชท" /></Link>
        </div>
    </div>
    );
  }
}

export default CreateOrJoin;
