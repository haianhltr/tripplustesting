import { useState } from "react";
import "./Popup.scss";
import axios from "axios";

export default function Popup({ isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInfo = {
      name,
      email,
      phone,
      message,
    };

    try {
      const res = await axios.post("/subcription", newInfo);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className={"model " + (isOpen && "active")}>
      <div className="overlay" onClick={() => setIsOpen(false)}></div>

      <div className="box">
        <div class="contactForm">
          <form onSubmit={handleSubmit}>
            <div class="contactInfo">
              <h1 class="title">Contact Us</h1>
              <ul class="contactDetails">
                <li>
                  <i class="fas fa-map-marker"></i>Vancouver, Canada
                </li>
                <li>
                  <i class="fas fa-envelope"></i>info@tripplus.ca
                </li>
                <li>
                  <i class="fas fa-user-circle"></i>TRIPPLUS
                </li>
                <li>
                  <i class="fas fa-mobile-alt"></i>+1 (778)-686-2090
                </li>
              </ul>
              <ul class="socialMedia">
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="contactInput">
              <span className="close-icon" onClick={() => setIsOpen(false)}>
                x
              </span>

              <h1 class="title">Get in Touch</h1>
              <p>Feel free to drop a line below</p>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type="phone"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <textarea
                placeholder="Type your message here"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
