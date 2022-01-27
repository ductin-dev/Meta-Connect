import React from "react";
import ReactDOM from "react-dom";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

//Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer, { walletType } from "application/context/reducer";

//Style
import "antd/dist/antd.css";
import "./index.css";

//Body
import App from "./App";

//Store
const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  reducer
);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

//Render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
