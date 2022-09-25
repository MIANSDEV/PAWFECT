import React from "react";
import Footer_logo from "../../images/Mians.png";
import {MdOutlineCopyright} from "react-icons/md"
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="f_logo">
        <a href="https://mians.io/" target={"_Mians"}><img src={Footer_logo} alt="Mians" /></a>
        
      </div>
      <br/>
      <div className="text">
        <p>
          We have a focused, sound and innovative approach which is derived from
          the cumulative experience of our team members and as a result of their
          combined practical business experience and knowledge.
        </p>
      </div>
      <div className="copy-right">
      CopyRight <MdOutlineCopyright/> Mians 2022.
      </div>
    </div>
  );
};

export default Footer;
