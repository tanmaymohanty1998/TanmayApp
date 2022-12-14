import React, { useState } from 'react';
import AdjustPremiumPopup from '../component/AdjustPremiumPopup';
import CustomerSearchPopup from '../component/CustomerSearchPopup';
import '../css/Popup.css'


export default function Popup(props) {

    // const [popup, setPopup] = useState(true)

    // const closePopup = ()=>{
    //     debugger;
        
    //     setPopup(false);
    //     console.log(setPopup)
    // }

    return (
        <>
            <div className="mainPopup">
                {/* <AdjustPremiumPopup /> */}
                <CustomerSearchPopup />
            </div>
        </>
    )
}
