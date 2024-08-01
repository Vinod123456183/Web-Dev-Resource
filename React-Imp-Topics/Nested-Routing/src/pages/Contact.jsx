import React from "react";
import { Outlet } from 'react-router-dom'

import { NavLink } from "react-router-dom";
 
function Contact() {
  return (
    <>
      Contact
      
      
      <div>

        {/* / Nahi lagana Path k aage */}
        {/* Rpute me {} mt lagana  */}

        <button><NavLink to="msgcontact">Msg us</NavLink></button>
        <button><NavLink to="contact-us">Contact us</NavLink></button>
          <Outlet/>
        {/* <button> Contact </button> */}



      </div>
    </>
  );
}

export default Contact;
