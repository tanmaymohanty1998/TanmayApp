import React from 'react'

export default function AdjustPremiumPopup(props) {
  return (
    <>
        <div className="popup">
                    <div className="popupHead">
                        <div className="popupTitle">
                            Adjust Premium
                        </div>
                        <div className="popupClose">
                            <svg onClick={props.popClose} className='popupCloseSvg' xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16.75 33.6 24 26.35l7.25 7.25 2.35-2.35L26.35 24l7.25-7.25-2.35-2.35L24 21.65l-7.25-7.25-2.35 2.35L21.65 24l-7.25 7.25ZM24 44.7q-4.25 0-8.025-1.625-3.775-1.625-6.6-4.45Q6.55 35.8 4.925 32.05T3.3 24q0-4.3 1.625-8.075Q6.55 12.15 9.35 9.35q2.8-2.8 6.575-4.45Q19.7 3.25 24 3.25q4.3 0 8.1 1.65t6.575 4.425q2.775 2.775 4.425 6.55T44.75 24q0 4.3-1.65 8.075-1.65 3.775-4.45 6.575-2.8 2.8-6.55 4.425T24 44.7Zm0-3.95q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" /></svg>
                        </div>
                    </div>
                    <div className="popupBody">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="ipDiv popupIpDiv">
                                        <label className='ipLable' htmlFor="Email">Email Id</label>
                                        <input className='formIp' type="mail" id='Email' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="ipDiv popupIpDiv">
                                        <label className='ipLable' htmlFor="Email">Email Id</label>
                                        <input className='formIp' type="mail" id='Email' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="ipDiv popupIpDiv">
                                        <label className='ipLable' htmlFor="Email">Email Id</label>
                                        <input className='formIp' type="mail" id='Email' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="ipDiv popupIpDiv">
                                        <label className='ipLable' htmlFor="Email">Email Id</label>
                                        <input className='formIp' type="mail" id='Email' />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="ipDiv popupIpDiv">
                                        <label className='ipLable' htmlFor="Email">Email Id</label>
                                        <input className='formIp' type="mail" id='Email' />
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
    </>
  )
}
