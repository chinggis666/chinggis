import React, { Component } from 'react';  
import './style.css';
 
class About extends Component {
  constructor(){
    super();
     this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {count: state.count + 1}
    }); 
     
  } 
  open(){
    return('hello world');
  }
  
  render() { 
    return (
      <div className="Home"> 
        <p>Hello world</p> 
        
        <button onclick="open()">
        About
        </button>
      </div>
      
    );
    
  }
  
}

export default About;

