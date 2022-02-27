import "./footer.scss";
export default function Footer({ menuOpen, setMenuOpen }) {
  return (
    <div className="footer">
      <div className="one">
        <div className="onecontainer">
          <a className="imgcontainer" href="/">
            {" "}
            <img src="https://tripplus.ca/wp-content/uploads/2021/05/Drawing1.png" alt="" width="130px" height="40px" />
          </a>
          <p>420 - 477 West Hasting Street,</p>
          <p>Vancouver, BC V6C 1A5, Canada</p>
          <p className="info">info@tripplus.ca</p>
        </div>
      </div>
      <div className="two">
        <h1>ABOUT US</h1>
        <p className="info">
          Tripplus was founded in 2020, in the vision of the owner and CEO who
          works in Insurance industry, realized that she could blend her
          knowledge and passion to create a start-up company that would change
          the way of acquiring travel insurance. The mission of Tripplus is to
          provide everyone with the helpful advisor in the world of travel
          insurance.
        </p>
      </div>
      <div className="three">
        <h1>MENU</h1>

        <p className="info">HOME</p>
        <p>OUR PRODUCTS</p>
        <p>RESOURCES</p>
        <p>CONTACT US</p>
      </div>
      <div className="four">
        <h1>SUBSCRIBE TO TRIPPLUS NEWSLETTER</h1>
        <p className="info">
          Enter your email below to sign up for our newsletter
        </p>
        <input placeholder="email"></input>
        <button>SIGN UP</button>
      </div>
    </div>
  );
}
