import React, { Component } from 'react';  
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Menu/Home"
import About from "./Menu/About"
import Contact from "./Menu/Contact" 
import Login from "./Menu/Login" 
import Signup from "./Menu/Signup" 

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About/">About</Link>
            </li>
            <li>
              <Link to="/Contact/">Contact</Link>
            </li>
            <li>
            <Link to="/Login/" id="login">Login</Link>
            </li>
            <li>
            <Link to="/Signup/" id="login">Sign up</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={Home} />
        <Route path="/About/" component={About} />
        <Route path="/Contact/" component={Contact} />
        <Route path="/Login/" component={Login} />
        <Route path="/Signup/" component={Signup} />
      </div>
    </Router>
                
    );
  }
}
export default App;
