import React from 'react';
import Event1 from './Event1';
import './page.css';
import {responsive} from './dummyArray'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const EventList1 = ({ events }) => {
  return (
    <div className="event-list">
      <Carousel showArrows={true} infiniteLoop={true} reaponsive={responsive}>
        {events.map((event, index) => (
          <Event1 key={index} event={event} />
        ))}
      </Carousel>
    </div>
  );
};

export default EventList1;