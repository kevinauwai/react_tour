import React, { useState } from 'react';
import logoimg from "/src/assets/react.svg";
import PageLink from "./PageLink";
import SocialLink from './SocialLink';
const Navbar = () => {
 const [isToggle,setToggle]=useState(false);
 const handleToggle=()=>{
    setToggle(!isToggle);
    console.log(isToggle);
 }
  return (
<nav className="navbar">
    <div className="container navbar-flex">
        <img src={logoimg} alt="" className="logo"/>
        {/* <!-- desktop menu --> */}
        <div className="main-menu">
            <PageLink className="menu-list"/>
        </div>
        <SocialLink/>
        {/* <!-- mobile menu --> */}
         <div className="mobile-menu">
            <div className="mobile-menu-toggle" onClick={handleToggle}>
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className={isToggle?"mobile-menu-items active":"mobile-menu-items "}>
                <PageLink className="mobile-menu-list"/>
                
            </div>   
         </div>
    </div>
</nav>
  );
};

export default Navbar;