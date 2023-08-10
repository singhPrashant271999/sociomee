import React from "react";
import "./sidenavbar.css";
import { Home, ShoppingBag, Headphones, ShoppingCart, UserCheck, Zap, Star } from 'react-feather';
import { Card } from "reactstrap";

const Sidenavbar = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-content">
        <a href="#"><Home /> Home</a>
        <a href="#"><Headphones /> Favourites</a>
        <a href="#"><ShoppingBag /> Groups</a>
        <a href="#"><Home /> Connection</a>
        <a href="#"><ShoppingCart /> Shotz</a>
        <a href="#"><UserCheck /> Business Page</a>
        <a href="#"><Zap /> Events</a>
        <a href="#"><Star /> MarketPlace</a>
      </div>
      
    </div>
  );
}

export default Sidenavbar;
