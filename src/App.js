import './App.css';
import React from "react"; 
import { Routes, Route } from 'react-router-dom'; 
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
import FAQ from "./Pages/FAQ";
import Portfolio from "./Pages/Portfolio";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Nav from "./Layout/Nav";    


function App() {


  return ( 
  <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<AboutUs/>}>
      </Route>
      <Route path="/AboutUs" element={<AboutUs/>}>
      </Route>
      <Route path="/Contacts" element={<Contacts/>}>
      </Route>
      <Route path="/FAQ" element={<FAQ/>}>
      </Route>
      <Route path="/Portfolio" element={<Portfolio/>}>
      </Route>
      <Route path="/Products" element={<Products/>}>
      </Route>
      <Route path="/Services" element={<Services/>}>
      </Route>
    </Routes>
  </div>
  ); 
 } 
 export default App;