import React, { useState } from 'react'

export default function MoreInfo() {

    const [moreInfo, setMoreInfo] = useState(0);

    console.log(moreInfo + " _______ " + setMoreInfo);

    const showMoreInfo = ()=>{
        setMoreInfo(1)
        console.log(moreInfo + " ________ " + setMoreInfo);
    }

    return (
        <>

            <div className="moreInfo" onClick={showMoreInfo}>
                <h3>More Information</h3>

                <div className="moreInfoContent">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut similique nostrum in, velit optio
                    dolorem assumenda perspiciatis deserunt ab deleniti quaerat ipsum aperiam dignissimos,
                    itaque nesciunt ducimus sunt illo accusantium.
                </div>
            </div>

        </>
    )
}
