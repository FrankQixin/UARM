import React from "react";
import './Home.css'
import Myvideo from'../../static/rm_video.mp4' 

export const Home = () => {
  return (
    <div className="page">


     <div className="intro-video">
        <video width="40%" height='40%'  autoplay="autoplay"   loop muted>   {/* autoplay="autoplay"  */}
          <source src={Myvideo} type="video/mp4" />
          
      </video>
       
     </div>

          {/* <div className="intro-name">
              <h3>  UA Robomaster</h3>
          </div> */}
    </div>
  );
};
