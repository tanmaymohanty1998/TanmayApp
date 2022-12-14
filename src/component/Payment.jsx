

import jquery from 'jquery';
import { useState } from 'react';
import SideNav from '../common/SideNav';
import $ from "jquery"
function Payment() {

    $(document).ready(function () {
        $('#example').DataTable();
    });

    return (
        <>

            <div className='mainDashContainer'>

                <SideNav />

                <div className='dashBody'>
                    <div className="dashNav">
                        Action
                    </div>
                    <div className="dashContent">
                        {/* <p className='title'>Miscellaneous</p> */}

                        <div className="tblCon">
                            <table id="example" className="display">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011-04-25</td>
                                        <td>$320,800</td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>2011-07-25</td>
                                        <td>$170,750</td>
                                    </tr>
                                    <tr>
                                        <td>Ashton Cox</td>
                                        <td>Junior Technical Author</td>
                                        <td>San Francisco</td>
                                        <td>66</td>
                                        <td>2009-01-12</td>
                                        <td>$86,000</td>
                                    </tr>
                                    <tr>
                                        <td>Cedric Kelly</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2012-03-29</td>
                                        <td>$433,060</td>
                                    </tr>
                                    <tr>
                                        <td>Airi Satou</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>33</td>
                                        <td>2008-11-28</td>
                                        <td>$162,700</td>
                                    </tr>
                                    <tr>
                                        <td>Brielle Williamson</td>
                                        <td>Integration Specialist</td>
                                        <td>New York</td>
                                        <td>61</td>
                                        <td>2012-12-02</td>
                                        <td>$372,000</td>
                                    </tr>
                                    <tr>
                                        <td>Herrod Chandler</td>
                                        <td>Sales Assistant</td>
                                        <td>San Francisco</td>
                                        <td>59</td>
                                        <td>2012-08-06</td>
                                        <td>$137,500</td>
                                    </tr>
                                    <tr>
                                        <td>Rhona Davidson</td>
                                        <td>Integration Specialist</td>
                                        <td>Tokyo</td>
                                        <td>55</td>
                                        <td>2010-10-14</td>
                                        <td>$327,900</td>
                                    </tr>
                                    <tr>
                                        <td>Colleen Hurst</td>
                                        <td>Javascript Developer</td>
                                        <td>San Francisco</td>
                                        <td>39</td>
                                        <td>2009-09-15</td>
                                        <td>$205,500</td>
                                    </tr>
                                    <tr>
                                        <td>Sonya Frost</td>
                                        <td>Software Engineer</td>
                                        <td>Edinburgh</td>
                                        <td>23</td>
                                        <td>2008-12-13</td>
                                        <td>$103,600</td>
                                    </tr>
                                    <tr>
                                        <td>Jena Gaines</td>
                                        <td>Office Manager</td>
                                        <td>London</td>
                                        <td>30</td>
                                        <td>2008-12-19</td>
                                        <td>$90,560</td>
                                    </tr>
                                    <tr>
                                        <td>Quinn Flynn</td>
                                        <td>Support Lead</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2013-03-03</td>
                                        <td>$342,000</td>
                                    </tr>
                                    <tr>
                                        <td>Charde Marshall</td>
                                        <td>Regional Director</td>
                                        <td>San Francisco</td>
                                        <td>36</td>
                                        <td>2008-10-16</td>
                                        <td>$470,600</td>
                                    </tr>
                                    <tr>
                                        <td>Donna Snider</td>
                                        <td>Customer Support</td>
                                        <td>New York</td>
                                        <td>27</td>
                                        <td>2011-01-25</td>
                                        <td>$112,000</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                       
                       
                        <p className='title'>PAYMENT SUMMURY</p> 
                        <div className='formDiv'>
                            <div className="container-fluid">
                                <div className="row">
                               
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">Total Premium</label>
                                            <input className='formIp' type="text" id='cusType' />
                                        </div>
                                        {/* <button onClick={handleClickOpen} className='ipBtn'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m39.75 42.75-13.3-13.3Q25 30.65 23 31.35t-4.25.7q-5.65 0-9.525-3.9t-3.875-9.4q0-5.5 3.9-9.4 3.9-3.9 9.4-3.9 5.55 0 9.4 3.9 3.85 3.9 3.85 9.4 0 2.2-.65 4.15-.65 1.95-1.95 3.7l13.35 13.25ZM18.7 28.05q3.85 0 6.55-2.725 2.7-2.725 2.7-6.575t-2.7-6.575Q22.55 9.45 18.7 9.45q-3.95 0-6.675 2.725Q9.3 14.9 9.3 18.75t2.725 6.575Q14.75 28.05 18.7 28.05Z" /></svg>
                            </button> */}
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="cusType">Total Value Of Payment Selected</label>
                                            <input className='formIp' type="date" id='cusType' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="name">Short Fall</label>
                                            <input className='formIp' type="text" id='name' />
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-12">
                                        <div className="ipDiv">
                                            <label className='ipLable' htmlFor="contactNum">Excess Value</label>
                                            <input className='formIp' type="tel" id='contactNum' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12  text-sm-center">
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

export default Payment;