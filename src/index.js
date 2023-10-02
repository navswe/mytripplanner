import React from "react";
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client"; 
// NOTE: for some reason google-map-react does not work with react v18 anymore, so this can only work with react v17 and thus react-dom and not react-dom/client

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/authContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <AuthContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </AuthContextProvider>
// );

ReactDOM.render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>,
  document.getElementById("root")
);