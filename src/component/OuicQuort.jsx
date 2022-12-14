import React from 'react'
import SideNav from '../common/SideNav'

export default function OuicQuort() {
    return (
        <div className='mainDashContainer'>

            <SideNav />

            <div className='dashBody'>
                <div className="dashNav">
                    Action
                </div>
                <div className="dashContent">
                    <div className="titleCon">
                        <p className='title'>Voyage and Commodity Details </p>
                    </div>

                    <div className='formDiv'>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="cusType">Voyage Type</label>
                                        <input className='formIp' type="text" id='cusType' />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="cusType">Policy Start Date</label>
                                        <input className='formIp' type="date" id='cusType' />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="name">Expected Date for Voyage</label>
                                        <input className='formIp' type="text" id='name' />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="contactNum">Commodity Discription</label>
                                        <textarea className='ipTextarea' name="commodityDiscription" id=""></textarea>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="Email">Mode Of Convinience</label>
                                        <input className='formIp' type="mail" id='Email' />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="Email">Coverage Details</label>

                                        <input className='formIp' list="coverageDetails" name="browser" id="browser" />
                                        <datalist id="coverageDetails">
                                            <option value="Coverage Details 1" />
                                            <option value="Coverage Details 2" />
                                            <option value="Coverage Details 3" />
                                            <option value="Coverage Details 4" />
                                            <option value="Coverage Details 5" />
                                        </datalist>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv ipDivContainer">
                                        <label className='ipLable' htmlFor="Email">Basis Of Valuation</label>
                                        <input className='formIp' list="ValuationList" name="browser" id="browser" placeholder='Valuation' />
                                        <datalist id="ValuationList">
                                            <option value="Valuation 1" />
                                            <option value="Valuation 2" />
                                            <option value="Valuation 3" />
                                            <option value="Valuation 4" />
                                            <option value="Valuation 5" />
                                        </datalist>
                                        <span className='ipAdder'>+</span>
                                        <input className='formIp' type="text" id='name' placeholder='Percent' />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="Email">Service Tax Exemption Category</label>
                                        <input className='formIp' list="serviceTax" name="browser" id="browser" />
                                        <datalist id="serviceTax">
                                            <option value="Service Tax 1" />
                                            <option value="Service Tax 2" />
                                            <option value="Service Tax 3" />
                                            <option value="Service Tax 4" />
                                            <option value="Service Tax 5" />
                                        </datalist>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="Email">Orignating Country</label>
                                        <input className='formIp' list="orignatingCountry" name="browser" id="browser" />
                                        <datalist id="orignatingCountry">
                                            <option value="Orignating Country 1" />
                                            <option value="Orignating Country 2" />
                                            <option value="Orignating Country 3" />
                                            <option value="Orignating Country 4" />
                                            <option value="Orignating Country 5" />
                                        </datalist>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="browser">Destination Country</label>
                                        <input className='formIp' list="destinationCountry" name="browser" id="browser" />
                                        <datalist id="destinationCountry">
                                            <option value="Destination Country 1" />
                                            <option value="Destination Country 2" />
                                            <option value="Destination Country 3" />
                                            <option value="Destination Country 4" />
                                            <option value="Destination Country 5" />
                                        </datalist>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="voyageFrom">Voyage From</label>
                                        <input className='formIp' type="text" id='voyageFrom' />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="voyageTo">Voyage To</label>
                                        <input className='formIp' type="text" id='voyageTo' />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="surveyDest">Survey at Destination</label>
                                        <input className='formIp' type="text" id='surveyDest' />
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="financierAgreement">Financier Agreement Type</label>
                                        <input className='formIp' type="text" id='financierAgreement' />
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="titleCon">
                                    <p className='title'>Voyage and Commodity Details </p>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="invoiceNum">Invoice No</label>
                                        <input className='formIp' type="text" id='invoiceNum' />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="invoiceDate">Invoice Date</label>
                                        <input className='formIp' type="date" id='invoiceDate' />
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="currencyInvoice">Currency of Invoice</label>
                                        <select className='formIp selectIp' name="currency" id="currencyInvoice">
                                            <option value="INR">Indian Rupee (INR)</option>
                                            <option value="USD">Doller (USD)</option>
                                            <option value="EUR">Doller (EUR)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="exchangeRate">Exchange Rate</label>
                                        <input className='formIp' type="text" id='exchangeRate' placeholder='can be between (1 & 1)'/>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="cargoSum">Cargo Sum Insured Rs</label>
                                        <input className='formIp' type="text" id='cargoSum'/>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="cargoSum">Cargo Sum Insured Rs</label>
                                        <input className='formIp' type="text" id='cargoSum'/>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="ipDiv">
                                        <label className='ipLable' htmlFor="cargoSum">Cargo Sum Insured Rs</label>
                                        <input className='formIp' type="text" id='cargoSum'/>
                                    </div>
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

            </div>

        </div>
    )
}
