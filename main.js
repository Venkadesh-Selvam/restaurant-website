import { createRoot } from "react-dom/client";
import "./index.css";
// import './custom.scss';
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  /*#__PURE__*/ React.createElement(
    BrowserRouter,
    null,
    /*#__PURE__*/ React.createElement(App, null)
  )
);
