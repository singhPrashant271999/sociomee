import Header from "./component/navbar";
import Sidenavbar from "./component/sidenavbar";
import Main from './component/main';
import React from 'react';
import Leftsidenavbar from "./component/Leftsidebar";
import Emojinavbar from "./component/Emojinavbar";
import { Columns } from "feather-icons-react/build/IconComponents";
import Page from './component/Page';
import './component/page.css';
import EventList from './component/EventList';
import { Today } from './component/dummyArray';
import EventList1 from './component/EventList1'


function App() {
  return (
    <div>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidenavbar />
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <Main />

          <Emojinavbar />

          <div className="app ">
            <h3>Upcoming Events</h3>

            <b><hr className="space"></hr></b>
            <h4>Today's Events (85)</h4>
            <EventList events={Today} />
            <h4>Tommorow Events(25)</h4>
            <EventList1 events={Today} />
          </div>
        </div>




        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Leftsidenavbar />

        </div>

      </div>

    </div>
  );
}

export default App;