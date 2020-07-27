import React from "react";
import bg from './assets/images/bg.jpg';
import logo from './assets/images/logo.png';

const App = () => {
  return<img src={bg} style={{flex:1, 
      width: "100%" ,
      height:"100%",
      resizeMode: 'contain'}}></img>

};

export default App;
