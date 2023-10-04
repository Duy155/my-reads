import React from "react";
import "./App.css";
import IndexHome from "./Pages/Homepage/indexHome"
import { Link } from "react-router-dom";
class MyReadsApp extends React.Component {
  render() {
    return (
      <div className="app">
        <IndexHome />
        <div className='open-search'>
          <Link className="add" to='search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MyReadsApp;
