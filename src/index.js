import React from "react";
import ReactDOM from "react-dom";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "business/reducer";

//Style
import "antd/dist/antd.css";
import "./index.css";

//Body
import App from "./App";

//Store
let store = createStore(reducer);

//Render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
