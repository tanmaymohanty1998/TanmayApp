
import { useState } from 'react';
import SideNav from '../common/SideNav';
function Miscellaneous() {
    return (
        <>
            <div className='mainDashContainer'>
                <SideNav />
                <div className='dashBody'>
                    <div className="dashNav">
                        Action
                    </div>
                    <div className="dashContent">
                        <p className='title'>Miscellaneous</p>

                        <div className='formDiv'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">BL/AWB/LR/RR No</label>
                                            <input className='formIp' type="text" id='cusType' />
                                        </div>
                                        {/* <button onClick={handleClickOpen} className='ipBtn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m39.75 42.75-13.3-13.3Q25 30.65 23 31.35t-4.25.7q-5.65 0-9.525-3.9t-3.875-9.4q0-5.5 3.9-9.4 3.9-3.9 9.4-3.9 5.55 0 9.4 3.9 3.85 3.9 3.85 9.4 0 2.2-.65 4.15-.65 1.95-1.95 3.7l13.35 13.25ZM18.7 28.05q3.85 0 6.55-2.725 2.7-2.725 2.7-6.575t-2.7-6.575Q22.55 9.45 18.7 9.45q-3.95 0-6.675 2.725Q9.3 14.9 9.3 18.75t2.725 6.575Q14.75 28.05 18.7 28.05Z" /></svg>
                                        </button> */}
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">BL/AWB/LR/RR No Date</label>
                                            <input className='formIp' type="date" id='cusType' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="name">Vessel/Airline Name</label>
                                            <input className='formIp' type="text" id='name' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="contactNum">Mark & No /container No:</label>
                                            <input className='formIp' type="tel" id='contactNum' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="Email">Consignee/Consignor Name</label>
                                            <input className='formIp' type="mail" id='Email' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">Consignee/Consignor Address</label>
                                            <input className='formIp' type="text" id='cusType' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="name">LC Number</label>
                                            <input className='formIp' type="text" id='name' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="contactNum">LC Date</label>
                                            <input className='formIp' type="date" id='contactNum' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="contactNum">Lc Conditions</label>
                                        <textarea className='ipTextarea' name="commodityDiscription" id=""></textarea>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-12  text-sm-center ">
                                        <button className='btn btnBlue m-2'>
                                            <span>
                                            Save As Quote
                                            </span>
                                        </button>
                                        <button className='btn btnBlue m-2'>
                                            <span>
                                              view Draft
                                            </span>
                                        </button>
                                        <button className='btn m-2'>
                                            <span>
                                                Back
                                            </span>
                                        </button>
                                        <button className='btn btnBlue m-2'>
                                            <span>
                                               Next
                                            </span>
                                        </button>
                                        <button className='btn btnBlue m-2'>
                                            <span>
                                               Payment With Advanced Collection
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {popup ? <Popup popClose={closePopup} /> : ""} */}
                </div>
            </div>
        </>
    )
}
export default Miscellaneous