import React, {Component} from 'react';
import "./main.scss";
import { Link } from 'react-router-dom';


class NameForm extends Component{
    constructor(props) {
        super(props);
        this.state = {name: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({name: event.target.value});
      }
      render() {
        return (
          <form>
              <div className="title"><b>ชื่อของคุณ</b></div>
              <input type="text" required className="textbox" value={this.state.name} onChange={this.handleChange} /><br/><br/>
              <Link to="/CreateOrJoin" style={{ textDecoration: 'none' }}><input type="submit" className="button" value="ยืนยัน" /></Link>
          </form>
        );
      }
    }
export default NameForm;