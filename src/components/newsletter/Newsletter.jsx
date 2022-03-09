import "./newsletter.scss";
import { Send } from "@material-ui/icons";
import Popup from "../popup/Popup";
import React, { useState } from "react";
export default function Newsletter({ isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = useState(false);

  if(isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <div className="newsletter">
      <h1 className="title">
        GET ON THE EARLY ACCESS LIST TO BE THE FIRST SUBSCRIBERS FOR OUR BETA
        PRODUCTS AND EARLY-BID DEALS. SIGN UP NOW TO GET YOUR INVITATION.
      </h1>
      <div className="desc">You can unsubscribe at any time.</div>

      <div class="button_base b07_3d_double_roll" onClick={()=>setIsOpen(!isOpen)}>
      {/* <Popup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          // handleClose={togglePopup}
        /> */}
      <div>Subcribe Now</div>
        <div>Click Here</div>
        <div>Subcribe Now</div>
        <div>Click Here</div>
      </div>

   
      
     
    </div>
  );
}
