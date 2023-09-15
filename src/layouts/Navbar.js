import React from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { MdAccountCircle } from "react-icons/md";
import logo from '../assests/Rent and Borrow-logos_white.png';
import "../styles/Navbar.css";

const Navbar = () => {
  // Define the authentication link
  const authLink = "https://rentandborrowcustomers.b2clogin.com/rentandborrowcustomers.onmicrosoft.com/b2c_1_signupsignin1/oauth2/v2.0/authorize?client_id=d947a67d-1ec4-4162-b923-5102aa45e47d&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Frentandborrow.azurewebsites.net%2F&client-request-id=cb993695-7df2-4a78-9a68-929ddd03b1b8&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=3.1.0&client_info=1&code_challenge=Yxb5S4Fw9xEVlor0kDxpOYBxRgDcr_T2-Q_Xpglkibo&code_challenge_method=S256&nonce=10620b5a-86e9-41c4-8804-7983c2e3d575&state=eyJpZCI6ImU2NWExMzg4LWUyMmMtNDk5NS1hNjUwLWZhMWRhYWU3MjNmMCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D";

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink exact to="/" activeClassName="active">
          <img src={logo} alt="Logo" style={{ height: "60px" }} />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pricing" activeClassName="active">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/how-it-works" activeClassName="active">
            How It Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" activeClassName="active">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/submit-listings" className="submit-link">
            + Submit Listings
          </NavLink>
        </li>
      </ul>
      <div className="user-icons">
        <a href={authLink}>
          <MdAccountCircle style={{ fill: "#65d6ad" }} />
        </a>
      </div>
      <div className="user-icons">
        <NavLink to="/cart">
          <TiShoppingCart style={{ fill: "#65d6ad" }} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
