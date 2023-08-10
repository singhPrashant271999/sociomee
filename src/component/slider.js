// import React, { Fragment, useState } from 'react';
// import { TabContent, TabPane, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; // Import necessary components from your libraries
// import { Calendar, ChevronRight, Share2, UserPlus, AlertTriangle, MapPin, Star, CheckCircle, X, CornerUpRight } from 'react-feather'; // Import necessary icons
// import AvatarGroup from 'react-avatar-group'; // Import AvatarGroup if you're using it
// import Slider from 'react-slick';

// const EventsCategories = () => (
//     <Fragment>
//         <div className='Categories_LeftPannel_slider'>
//             <div className="Categories_Left_block">
//                 <div className="EventsCustom-card-head  biz-carddetail-blk d-dlex justify-content-between">
//                     <div className='EventsCategories_calender'>
//                         <Calendar color='#81C14B' size={24}>
//                     </div>
//                     <h4>Event Categories</h4>
//                 </div>
//                 <div className="custom-card-head biz-carddetail-blk Total_count_Events_Categories">
//                     <h5>All Events ({numFormatter(eventCategory.length ? eventCategory.length : '0')})</h5>
//                 </div>
//                 <div className="Categories_LeftScroll_block" id='Categories-Scroll-1'>
//                     <div className="biz-about-cont">
//                         <ul>
//                             {
//                                 filteredData?.map((data) => (
//                                     <li className={categoriesActiveTab>
//                                         <div className='nave-items-bizPage d-flex ' xss=removed> { toggleCategories(data.categoryId) }} active={categoriesActiveTab === data.categoryId} >
//                                             <img>
//                                             < className>
//                                                 <h5>{data.categoryName}  ({numFormatter(data.events.length)})</h5>
//                                             </div>
//                                         </div>

//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </Fragment>
// )
// //=================== End_EventsCategories_function ===================//

// // useEffect(() => {
// //     dispatch(getUserEventsAction())

// // }, []);

// const UpCommingEvents = () => (
//     <Fragment>
//         <TabContent activeTab={categoriesActiveTab}>
//             <div className="custom-card-block">
//                 <div className="custom-card-head biz-carddetail-blk ">
//                     <h4>Upcomming Events</h4>
//                 </div>

//             </div>
//             <Fragment>
//                 <TabPane tabId="1">
//                     <div className="container-fluid section-t-space px-0">
//                         <div className="group-main-block">
//                             <ScheduleEvents title="Today">
//                             <ScheduleEvents title="Tommorrow">
//                             <ScheduleEvents title="This Week">
//                         </div>
//                     </div>
//                 </TabPane>
//             </Fragment>

//             <TabPane tabId="2">
//                 Arts (32)
//             </TabPane>
//             <TabPane tabId="3">
//                 Comedy (09)
//             </TabPane>

//             <TabPane tabId="4">
//                 Fitness(11)
//             </TabPane>
//             <TabPane tabId="5">
//                 Food (21)
//             </TabPane>
//             <TabPane tabId="6">
//                 Health (45)
//             </TabPane>
//         </TabContent>
//     </Fragment>

// )

// const ScheduleEvents = (props) => (
//     <Fragment>
//         <div className="group-custom-block">
//             <div className="heading-podcast-blk ">
//                 <h3>{props.title} ({upcommingEvent.length ? upcommingEvent.length : '0'})</h3>
//                 <p className='d-flex align-items-center text-primary ' xss=removed xss=removed> setSelectActive(!selectActive)} >See All <ChevronRight size={20}></p>
//             </div>

//             <Slider className="default-space">
//                 {
//                     upcommingEvent?.map((data) => (
//                         <div className='p-1'>
//                             <div className="MyEvents_box_slider_section">
//                                 <div className="MyEvent_tAG">
//                                     <div className='event_Tag_section'>
//                                         <h5>{data.tag}</h5>
//                                     </div>
//                                 </div>
//                                 &lt;Link to="#" &gt; <img alt="img" className="img-fluid MyEvent-img">&lt;/Link&gt;
//                                 <div className="MyEvent_BodySection">
//                                     <div className='MyEvent_First_BodySection '>
//                                         <small>{data.createdAt}</small>
//                                         <div className='MyEvents_more_btn text-center'>
//                                             <MoreHorizontal color='#808080' size={20} className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                             <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal MyeventsCategories_Option">
//                                                 <ul>
//                                                     <li>
//                                                         &lt;Link to="#"&gt;<Share2 color='#808080' size={16}> Share &lt;/Link&gt;
//                                                     </li>
//                                                     <li>
//                                                         &lt;Link to="#"&gt;<UserPlus color='#808080' size={16}> Invite&lt;/Link&gt;
//                                                     </li>
//                                                     <li xss=removed>
//                                                         &lt;Link to="#"&gt;<AlertTriangle color='#808080' size={16}> Report&lt;/Link&gt;
//                                                     </li>

//                                                 </ul>
//                                             </div>

//                                         </div>
//                                     </div>
//                                     <div className='py-2'>
//                                         <h4>{data.place}</h4>
//                                     </div>
//                                     <div className='py-1'>
//                                         <MapPin color='#808080' size={16}> 
//                                         <span>{data.location}</span>
//                                     </div>
//                                     <div className="people-likes matual-friend-sec ">
//                                         <AvatarGroup>
//                                         <h6 xss=removed xss=removed> {data.pplCount}</h6>
//                                     </div>
//                                     <div className="group-buttons-blk mt-3">
//                                         <UncontrolledButtonDropdown className='UncontrolledButtonDropdown ' direction='up'>
//                                             <DropdownToggle color='primary'>
//                                                 <p className='Categories_iNTERESTED'> <Star size={16}>  Interested   <ChevronDown size={16}></p>
//                                                 <DropdownMenu className="Going_Menu mt-1">
//                                                     <DropdownItem className="Option_going_btn d-flex align-items-center">
//                                                         <CheckCircle size={18}> Going
//                                                     </DropdownItem>
//                                                     <DropdownItem className="Option_going_btn d-flex align-items-center">
//                                                         <X size={18}> Not Interested</DropdownItem>
//                                                 </DropdownMenu>
//                                             </DropdownToggle>

//                                         </UncontrolledButtonDropdown>
//                                         &lt;Button className=" w-75 ml-2" color="primary" outline onClick={toggleForward} &gt;<CornerUpRight size={16}> Forward&lt;/Button&gt;
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </Slider>

//         </div>

//     </Fragment>
// )
 

// export default { EventsCategories, ScheduleEvents, UpCommingEvents };