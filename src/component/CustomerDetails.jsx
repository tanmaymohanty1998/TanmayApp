import React from 'react'
import { useState } from 'react';
import SideNav from '../common/SideNav';
import Popup from '../common/Popup';

export default function CustomerDetails(props) {

    const [moreInfo, setMoreInfo] = useState(false);

    const handleMoreInfo = () => {
        setMoreInfo(!moreInfo)
    }

    // const closePopup = () => {
    //     setPopup(false);
    // }

    return (
        <>
            <div className='mainDashContainer'>

                <SideNav />

                <div className='dashBody'>
                    <div className="dashNav">
                        Action
                    </div>
                    <div className="dashContent">
                        <p className='title'>Customer Details</p>

                        <div className='formDiv'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">Create New Customer</label>
                                            <input className='formIp' type="text" id='cusType' />
                                        </div>
                                        {/* <button onClick={handleClickOpen} className='ipBtn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m39.75 42.75-13.3-13.3Q25 30.65 23 31.35t-4.25.7q-5.65 0-9.525-3.9t-3.875-9.4q0-5.5 3.9-9.4 3.9-3.9 9.4-3.9 5.55 0 9.4 3.9 3.85 3.9 3.85 9.4 0 2.2-.65 4.15-.65 1.95-1.95 3.7l13.35 13.25ZM18.7 28.05q3.85 0 6.55-2.725 2.7-2.725 2.7-6.575t-2.7-6.575Q22.55 9.45 18.7 9.45q-3.95 0-6.675 2.725Q9.3 14.9 9.3 18.75t2.725 6.575Q14.75 28.05 18.7 28.05Z" /></svg>
                                        </button> */}
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">Customer Type</label>
                                            <input className='formIp' type="text" id='cusType' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="name">Customer Name</label>
                                            <input className='formIp' type="text" id='name' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="contactNum">Customer Number</label>
                                            <input className='formIp' type="tel" id='contactNum' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="Email">Email Id</label>
                                            <input className='formIp' type="mail" id='Email' />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className='moreInfoContainer'>

                                            <div className="moreInfoBtnCon">
                                                <button onClick={handleMoreInfo} className='moreInfoBtn'>
                                                    More Info
                                                </button>
                                            </div>

                                        </div>
                                        {moreInfo ?
                                            <div className="moreInfoContent">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="dob">Date Of Birth</label>
                                                                <input className='formIp' type="date" id='dob' />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="panNum">PAN Number</label>
                                                                <input className='formIp' type="text" id='panNum' />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="input-container ">
                                                                <label className="form-label">Dou You have GST No ?</label>

                                                            </div>
                                                            <div className="d-flex dFlexAdjust bdrBlue">
                                                                <div className="input-container flxGrow">
                                                                    <input type="radio" name="actv_ind"/>
                                                                    <label htmlFor="Active" className="form-label click-lable sideLable">Active</label>
                                                                </div>
                                                                <div className="input-container flxGrow">
                                                                    <input type="radio" name="actv_ind"/>
                                                                    <label htmlFor="Inactive" className="form-label click-lable sideLable"> In Active</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="add1">Address 1</label>
                                                                <input className='formIp' type="text" id='add1' />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="add2">Address 2</label>
                                                                <input className='formIp' type="text" id='add2' />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="add3">Address 3</label>
                                                                <input className='formIp' type="text" id='add3' />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="add3">Pin Code / Area</label>
                                                                <input className='formIp' type="text" id='add3' />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="district">District</label>
                                                                <input className='formIp' type="text" id='district' />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="state">State</label>
                                                                <input className='formIp' type="text" id='state' />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3 col-sm-12">
                                                            <div className="ipDiv">
                                                                <label className='ipLable' htmlFor="city">City</label>
                                                                <input className='formIp' type="text" id='city' />
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div> : ""
                                        }

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-sm-12 text-md-end text-sm-center">
                                        <button className='btn'>
                                            <span>
                                                Back
                                            </span>
                                        </button>
                                    </div>

                                    <div className="col-md-6 col-sm-12 text-md-start text-sm-center">
                                        <button className='btn btnBlue'>
                                            <span>
                                                Proceed
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
