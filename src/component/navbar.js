import React from "react";
import { Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import live from "../icon/live.png";
import Reel from '../icon/reel.png';
import Group from '../icon/group.png';
import Create from '../icon/create.png';
import Grid from '../icon/grid1.png';
import Chats from '../icon/chats.png';
import Notify from '../icon/notify.png';
import Arrow from '../icon/arrow.png';


const Header = () => {
  return (
    <Card>
      <CardBody className="card d-flex justify-content-between align-items-center header">
        <img className="logo" src="https://uat.sociomee.com/assets/images/logo.png"  alt=""/>
        <div className="search mx-auto">
          <input type="text" placeholder="Find Friends......." />
        </div>
        <div className="icon">
          <a href="/#"><img className="logo1" src={live} alt="" /></a>
          <a href="/#"><img className="logo1" src={Reel} alt=""/></a>
          <a href="/#"><img className="logo1" src={Group}alt="" /></a>
          <a href="/#"><img className="logo1" src={Create}alt="" /></a>
          <span className="image d-flex">
            <img
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              className="profileImg" alt=""
            />
            <img
              src="data:image/png;base64,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"
              className="green" alt=""
            />
          </span>
          <span className="name1">
            <h5 className="name">
              <b>williom</b>
            </h5>
          </span>
          <span className="icon2">
            <a href="/#"><img className="logo2" src={Grid}alt="" /></a>
            <a href="/#"><img className="logo2" src={Chats} alt=""/> </a>
            <a href="/#"> <img className="logo2" src={Notify} alt=""/></a>
            <a href="/#"><img className="logo2" src={Arrow}alt="" /> </a>
          </span>
        </div>
      </CardBody>
    </Card>
  )
}
export default Header;
