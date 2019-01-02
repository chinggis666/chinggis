import React, { Component } from 'react';  
 import './style.css';
class Home extends Component {
  render() {
    return (
      <div className="Home"> 
              <div className="Header">
              Header
              </div>
              <div className="body" >
              
              <div class="row">

                <div class="column" >
                <img width="100%" height="100%" 
                src="https://facebookbrand.com/wp-content/themes/fb-branding/assets/images/fb-logo.png" />
                </div>
                <div class="column" ><img width="100%" height="100%" 
                src="https://cdn.vox-cdn.com/thumbor/SfyqZw6l_jidAYdkqYEis-Omdho=/0x0:1680x1050/1200x675/filters:focal(706x391:974x659):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/56414327/YTLogo_old_new_animation.0.gif" />
                </div>
                <div class="column" ><img width="100%" height="100%" 
                src="https://blog.hubspot.com/hubfs/image8-2.jpg" />
                </div>
              </div>

              <div className="animation"></div>
              
              </div>
              <div className="footer">
              footer
              </div>
      </div>
    );
  }
}

export default Home;

