import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import store from "./redux/store";
import "./main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SkeletonTheme
          baseColor="#e9ecef"
          highlightColor="#ffffff"
          borderRadius="7px"
        >
          <App />
        </SkeletonTheme>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
