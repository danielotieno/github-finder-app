import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Users} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
