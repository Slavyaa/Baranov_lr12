import React from "react";
import { Link } from "react-router-dom";
import img1 from './images/logo.svg';
import classes from "./Nav.module.css";
import img2 from './images/measering.svg';
import img3 from './images/calculation.svg';


function Nav() { 


 return ( 
<header className={classes.header}>
      <div className={classes.logo}>
        <img src={img1} alt="Logo" className={classes.logo_img} />
      </div>
      <nav className={classes.menu}>
        <Link to="/Services">Services</Link>
         <Link to="/Products">Products</Link>
         <Link to="/AboutUs">About us</Link>
         <Link to="/Portfolio">Portfolio</Link>
         <Link to="/FAQ">FAQ</Link>
         <Link to="/Contacts">Contacts</Link>
      </nav>
      <div className={classes.buttons}>
        <button className={classes.request_btn}>
            <img src={img2} alt="Logo" className={classes.logo_img} />
            Make request
        </button>
        <button className={classes.calculation_btn}>
            <img src={img3} alt="Logo" className={classes.logo_img} />
            Calculation
        </button>
      </div>
    </header>
 ); 
} 


export default Nav;