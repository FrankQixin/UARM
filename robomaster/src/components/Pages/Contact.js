import React from "react";
import './Contact.css'

export const Contact = () => {
  return (
    <div>
      <div className="title">
        <h3>Contact US</h3>
      </div>
      <div className="email-info">
          <p>If you have any questions or would like to become a sponser, please contact us at <a href="mailto:robomaster@ualberta.ca">robomaster@ualberta.ca</a>.</p>    
      </div>
      <div className="info-container">
      <div className="map">
          <iframe className='loc' title="loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.826020928637!2d-113.52977903400397!3d53.52516396900289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02189e0dfae9d%3A0x64eb2c39b51fa60b!2sEngineering%20Teaching%20and%20Learning%20Complex!5e0!3m2!1sen!2sca!4v1660458492356!5m2!1sen!2sca" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-info">
            <p className="contact-info-title">Contact Information</p>
            <ul className="contact-info-list">
              <li>116 St 85 Ave</li>
              <li>ETLC E3-002</li>
              <li>Edmonton, AB T6G 2R3</li>
              <li>Canada</li>
              <li>E: robomasters@ualberta.ca</li>
              <li>P: 780-655-0141</li>
            </ul>
            <div className="contact-icon">
                <a aria-label="Visit our instagram" tabindex="0" href="https://www.instagram.com/uofa_robomaster/" ><div><span class="fa fa-instagram fa-sm" ></span></div></a>
                <a aria-label="Visit our youtube" tabindex="0" href="https://www.youtube.com/channel/UC6pk5Kh9GXBE8UwWx2lRegQ" ><div><span class="fa fa-youtube-play fa-sm" ></span></div></a>
                <a aria-label="Visit our facebook" tabindex="0" href="https://www.facebook.com/UofARoboMaster/"><div><span class="fa fa-facebook-square fa-sm" ></span></div></a>
            </div>
        </div>
       
        </div>
    </div>
  );
};
