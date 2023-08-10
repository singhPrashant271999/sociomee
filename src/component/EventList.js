import React from 'react';
import Event from './Event';
import { Carousel } from 'react-responsive-carousel';
import './page.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {responsive} from './dummyArray'

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <Carousel showArrows={true} infiniteLoop={true} reaponsive={responsive} showThumbs={false} showStatus={false}>
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </Carousel>
    </div>
  );
};

export default EventList;