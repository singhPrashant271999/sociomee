import React from "react";
import './Leftsidenavbar.css'
import { ArrowDownCircle } from 'react-feather';
import { Card } from "reactstrap";
import DOT from '../icon/Ellipse 1168.png'

const Leftsidenavbar = () => {
  return (
    <div className="sidenav2">
      <h3>Friends </h3><span className="dot">🟢</span>
      Start new conversation
      <br />
      <div className="search-container">
        <img className="search-icon" src="https://cdn-icons-png.flaticon.com/512/49/49116.png" alt="Search Icon" />
        <input className="search-input" type="text" placeholder="Search..." />
      </div>
      <br />
      <div className="sidenav2-content">

        <span>Close Friends <ArrowDownCircle style={{
          width: '20px', height: "20px", position: 'absolute', marginLeft: '80px'

        }} /></span>
        <span className="firtspan">
        <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
        <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
        <br/>
        </span>
       <span className="re"> Recent Chats <ArrowDownCircle style={{
          width: '20px', height: "20px", position: 'absolute', marginLeft: '80px'

        }} /></span>
        <span className="secondspan">
                <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
                <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
                <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
                <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
                <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
                <a className="icon12" href="#"><img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80' className="icon12"  href="#"/> <span className="va"> varun</span>Singh </a><img className="DOT" src={DOT}/><p className="pt">Breadford, England</p>
                </span>
      </div>

    </div>
  );
}

export default Leftsidenavbar;
