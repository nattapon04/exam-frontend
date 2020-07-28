import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./main.scss";
import * as serviceWorker from "./serviceWorker";


import App from "./App";
import CreateOrJoin from "./createOrJoin";
import CreateRoom from "./createRoom";
import JoinRoom from "./joinRoom";
import Chat from "./chat";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
                <Route path="/" component={App} exact />
                <Route path="/CreateOrJoin" component={CreateOrJoin} />
                <Route path="/CreateRoom" component={CreateRoom} />
                <Route path="/JoinRoom" component={JoinRoom} />
                <Route path="/Chat" component={Chat} />
                <Route component={Error} />
        </Switch>
    </BrowserRouter>, 
document.getElementById("root"));

serviceWorker.unregister();
