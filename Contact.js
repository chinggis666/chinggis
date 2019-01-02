import React, { Component } from 'react';  
import './style.css';
class Contact extends Component {
 
  render() {
    return (
      <div className="Contact"> 
       
          <h3>Contact Form</h3>

          <div class="container">
              <div class="Contact">
              <p>Contact us and we'll get back to you within 24 hours.</p>
              <p><span class="glyphicon glyphicon-map-marker"></span> Chicago, US</p>
              <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
              <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
            </div>
            <form action="">
              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

              <input type="submit" value="Submit"/>
            </form>
      </div>
      </div>
    );
  }
}

export default Contact;

