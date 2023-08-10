import React from 'react';
import './page.css';
import { MoreHorizontal,Star,Share2} from 'react-feather';


const Event = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.img1} alt="Event" />
      <div className="event-details">
        <p className='da'>{event.date}&nbsp;{event.time}<MoreHorizontal  style={{marginLeft:'80px',marginTop:''}}/></p> 
       
        <p>{event.content}</p>
        <h5>{event.address}</h5>
        <p>{event.img2}{event.interested}</p>
        <span className='spa'>
            <button className='int'><Star   
            /> &nbsp; interested</button>
            <button><Share2 /> Share</button>
        </span>
      </div>
    </div>
  );
};

export default Event;