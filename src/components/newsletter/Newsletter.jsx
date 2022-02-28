import "./newsletter.scss";
import { Send } from "@material-ui/icons";
export default function Newsletter({ menuOpen, setMenuOpen }) {
    return (
        <div className = "newsletter">
            <h1 className ="title">GET ON THE EARLY ACCESS LIST TO BE THE FIRST SUBSCRIBERS FOR OUR BETA PRODUCTS AND EARLY-BID DEALS. SIGN UP NOW TO GET YOUR INVITATION.</h1>
            <div className = "desc">You can unsubscribe at any time.</div>
            <div className = "inputcontainer">
                <input  placeholder="NAME"></input>
                <input  placeholder="EMAIL"></input>
                <input  placeholder="PHONE"></input>
                <input  placeholder="MESSAGE"></input>
           

                <button className = "button">
                <Send/>
                </button>
                
            </div>

        </div>
    );
  }