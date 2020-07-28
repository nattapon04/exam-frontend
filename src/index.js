import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import CreateOrJoin from "./createOrJoin";
import CreateRoom from "./createRoom";
import JoinRoom from "./joinRoom";
import Chat from "./chat";

ReactDOM.render(<Chat />, document.getElementById("root"));

serviceWorker.unregister();
