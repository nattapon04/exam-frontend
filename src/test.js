import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value; //ดึงค่าจากตัวแปร getName
        const message = this.getMessage.value; //ดึงค่าจากตัวแปร getMessage 
        //Object data  เก็บ id, name, message 
        const data = {
            id: new Date(),
            name,
            message,
            editing:false
        }

        this.props.dispatch({
            type:'ADD_COMMENT',
            data
        });


        this.getName.value="";
        this.getMessage.value="";
    }


    render(){
        return(
            <div>
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder ="name" required ref={(input)=>this.getName =input}></input><br/><br/>
                    <textarea required row="5" cols="28" placeholder="text" ref={(input)=>this.getMessage =input}></textarea><br/>
                    <button>Comment</button>               
                </form>
            </div>
        );
    }
}

export default connect()(CommentForm);