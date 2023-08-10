import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './main.css';
import { Calendar, Navigation2, Edit, Filter } from 'react-feather';

const Main = () => {
    return (

        <CardBody>
            <div className='bg'>
                <h1>L A T E S T <span className='event'>  &nbsp; E V E N T</span>  </h1>


                <Card className='custom-card'>

                    <CardBody>


                        <h2>Today events</h2> 
                        
                        <span className='edit'><Edit  /></span>
                        <p><Calendar />March 2022</p>

                        <div>
                            <p className='nav2'> <Navigation2 />  Wembley Centre Albert Luthuli, Pitemematieburg , London ,UK</p>


                        </div>


                    </CardBody>

                </Card>
            </div>

            <div className='tabel '>
                <div className='tabel2 '>
                    <span className='cal' ><Calendar style={{ height: '40px', width: '40px' }} /></span>
                    <h3> Event to Remeber </h3>
                    <p> Connect with exclisive event & </p>
                    <p>priceless memories</p>

                </div>
                <div className='week'>
                    <h3>Today </h3>
                    <h3>Tomorrow </h3>
                    <h3>This week  </h3>
                    <h3>This month </h3>
                    <h3>This year </h3>
                </div>
                <div className='week2'>
                    <p>12 Event </p>
                    <p> 36 Event  </p>
                    <p>42 Event</p>
                    <p> 51 Event</p>
                    <p>51 Event</p>

                </div>
            </div>

            <Card className='toogle'>
                <CardBody className=''>
                    <div><button className='upc btn btn-success' >Upcoming</button>
                        <button className='eve'>My Event</button></div>
                    <div className="container">
                           <div className='ser'>
                            <input type="search" placeholder="Search" className="search-field" />
                            <button type="submit" className="search-button">
                                <img src="https://cdn-icons-png.flaticon.com/512/49/49116.png"/>
                            </button>
                            </div>

                            <div className='fil'> <button className='filter'><Filter style={{}}
                            />Filter</button></div>
                           
                       
                    </div>

                </CardBody>
            </Card>
        </CardBody>







    );
}

export default Main;
