import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import IndexSearch from "./Pages/SearchPage/indexSearch"
import { Route, Routes, BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App/> } />
      <Route path='/search' element={< IndexSearch/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
