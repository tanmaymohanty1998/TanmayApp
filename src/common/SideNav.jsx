import React, { useState } from 'react'
import '../css/SideNav.css'
import logo from '../images/logo.png';
import SideMenu from "../Sidemenu.json"

export default function SideNav() {
    const showSubMenu = (e) => {
        // debugger
        console.log(e.currentTarget.nextSibling);
        e.currentTarget.nextSibling.classList.contains("menuClose") ? e.currentTarget.nextSibling.classList.toggle("menuClose") : e.currentTarget.nextSibling.classList.toggle("menuClose");

    }
    return (
        <div className='sideNav'>

            <div>
                <img className='logo' src={logo} alt="" />
            </div>

            <div>
                {
                    SideMenu.map(sidemenu => {
                        return (
                            <>
                                <div className="mainMenu">

                                    <div className='parentMenu' onClick={showSubMenu} key={sidemenu.id}>  {sidemenu.mainMenuName}</div>

                                    <div className={"subMenu menuClose"}>
                                        {sidemenu.subMenu?.map(sbMenu => {
                                            return (
                                                <>
                                                    <p>{sbMenu.smName}</p>
                                                </>
                                            )
                                        })}
                                    </div>


                                </div>
                            </>
                        )
                    })
                }
                {/*  */}

                {/* <div className="mainMenu">
                    <div className='parentMenu' onClick={showSubMenu}>  Home</div>
                    <div className={"subMenu " + dispay}>
                        <p>Home Sub Menu 1</p>
                        <p>Home Sub Menu 2</p>
                        <p>Home Sub Menu 3</p>
                        <p>Home Sub Menu 4</p>
                    </div>
                </div>

                <div className="mainMenu">
                    <div className='parentMenu' onClick={showSubMenu}>Contact </div>
                </div>
                <div className="mainMenu">
                    <div className='parentMenu' onClick={showSubMenu}> Services </div>
                    <div className={"subMenu " + dispay}>
                        <p>Services Sub Menu 1</p>
                        <p>Services Sub Menu 2</p>
                        <p>Services Sub Menu 3</p>
                        <p>Services Sub Menu 4</p>
                    </div>
                </div>

                <div className="mainMenu">
                    <div className='parentMenu' onClick={showSubMenu}> About </div>
                    <div className={"subMenu " + dispay}>
                        <p>About Sub Menu 1</p>
                        <p>About Sub Menu 2</p>
                        <p>About Sub Menu 3</p>
                        <p>About Sub Menu 4</p>
                    </div>
                </div> */}

            </div>

        </div>
    )
}
