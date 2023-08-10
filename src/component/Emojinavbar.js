import React from "react";
import "./Emoji.css";
import { Calendar } from 'react-feather';
import { Card } from "reactstrap";

const Emojinavbar = () => {
  return (
    <div className="sidenav1">
        <h3 className="cat" > <Calendar  style={{backgroundColor:'rgba(129, 193, 75, 0.1)'}}/>Event Categoies</h3>
        <br/>
           <p className="all"> All Event(232)</p>
      <div className="sidenav-content1">
        <a href="#"> 🎵 Music (16)</a>
        <a href="#">  🎭 Arts (32)</a>
       
        <a href="#">  🤣Comedy(09)</a>
        <a href="#"> 🏋🏽Finess(11) </a>
        <a href="#">  🥘 Food(21)</a>
        <a href="#"> 💕Health(45) </a>
        <a href="#">🛕Spirituality(26) </a>
        <a href="#"> 🏫Educational(19) </a>
        <a href="#">  🎭Arts (32)</a>
       
        <a href="#">  🤣Comedy(09)</a>
        <a href="#"> 🏋🏽Finess(11) </a>
        <a href="#">  🥘 Food(21)</a>
        <a href="#"> 💕Health(45) </a>
        <a href="#">🛕Spirituality(26) </a>
        <a href="#"> 🏫Educational(19) </a>
        
        
      </div>
      
    </div>
  );
}

export default Emojinavbar;
