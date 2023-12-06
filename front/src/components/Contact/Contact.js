import React from "react";
import "./style.css";

 const Contact = () => {
  return (
    <div className="contact">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" src="../../static/img/rectangle-3.png" />
          <div className="div" />
          <div className="text-wrapper">Offices</div>
          <p className="element-thornridge-cir">
            1901 Thornridge Cir...
            <br />
            Shiloh, Hawaii 81063
          </p>
          <p className="element-preston-rd">
            8502 Preston Rd.
            <br />
            Inglewood, Maine 98380
          </p>
          <div className="frame">
            <div className="frame-2">
              <div className="contact-us">CONTACT US</div>
              <p className="you-have-a-new">
                You have a new project?
                <br />
                or want to say hello...
              </p>
            </div>
            <div className="text-wrapper-2">info@email.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact