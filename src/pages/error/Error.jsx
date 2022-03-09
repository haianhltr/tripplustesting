import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";

const Error = () => {
  return (
	 
    <div className ="error">
	
	<div className ="buttonhome">
	<Link to="/"  style={{ color: 'inherit', textDecoration: 'inherit'}} className="link">
			<button>HOMEPAGE</button>
			</Link>
			</div>
		 <div className ="imagecontainer">
			 {/* <img
              alt='Travel'
              src='https://api.time.com/wp-content/uploads/2014/10/tripomatic.png'
            />   */}
		
	</div>
	</div>
  );
};



export default Error;
