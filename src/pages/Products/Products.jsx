import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Menu from "../../components/menu/Menu";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./Products.scss";

const Products = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="productspage">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<div className="container" onClick={()=>setMenuOpen(false)} >
      <div className="wrap1">
        <div className="title">
          <h1>First travel insurance market place</h1>
          <p>Quickly get right travel insurance</p>
        </div>
        <img
          className="img1"
          alt="Travel Image"
          src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>

      <div className="wrap2">
        <div className="title">
          <h1>OUR PRODUCT</h1>
          <p>
            Tripplus is a bridge that provides best solution for both Insurers
            and Traveler. Data-driven enables us to provides our value customers
            with best-fit travel insurance coverage.
          </p>
        </div>
      </div>

      <div className="wrap3">
        <div className="imgContainer">
          <img
            className="img"
            alt="Travel Image"
            src="https://tripplus.ca/wp-content/uploads/2021/03/GettyImages-1127125431.jpeg"
          />
        </div>
        <div className="title">
          <h1>EMERGING ARTIFICIAL INTELLIGENCE</h1>
          <p>
            We learn from you and maintain it in our knowledge database. This
            empowers Tripplus to produce more and more helpful advise to our
            customer.
          </p>
        </div>
      </div>

      <div className="wrap4">
        <div className="imgContainer">
          <img
            className="img"
            alt="Travel Image"
            src="https://tripplus.ca/wp-content/uploads/2021/03/GettyImages-1127125431.jpeg"
          />
        </div>
        <div className="title">
          <h1>FOR WHETHER BUSINESS OR PLEASURE TRIP</h1>
          <p>
            Our goal is to give you the resources that you need to avoid
            unexpected expenses by finding a protective travel insurance policy
            that is tailored to your needs no matter what the purpose of your
            trip.
          </p>
          <p>Our key features and advantages: </p>
          <ul>
            <li>Personalize for you</li>
            <li>User-friendly interface</li>
            <li>Secure purchase</li>
            <li>Easily keep trach all plans, documents</li>
          </ul>
        </div>
      </div>
      <div className="wrap5">
        <div className="title">
          <h1>Travel Insurance news</h1>
          <ul>
            <li>Insurance 2030—The impact of AI on the future of insurance</li>
            <li>What’s happening in Canada and around the world on Sunday</li>
            <li>Vaccination passport</li>
            <li>Travel insurance in 2021</li>
          </ul>
        </div>
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default Products;
