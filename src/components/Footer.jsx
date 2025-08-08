import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-menu">
            <ul className="menu-list">
                <li className="menu-item"><a href="#home">Home</a></li>
                <li className="menu-item"><a href="#about">About</a></li>
                <li className="menu-item"><a href="#services">Services</a></li>
                <li className="menu-item"><a href="#tours">Tours</a></li>
            </ul>
            
        </div>
        <div className="footer-icon-menu">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-threads"></i></a>
        </div>
        <p className="copyright">
            Copyright &copy;&nbsp; <span id="date">date</span>&nbsp; All Rights Reserved
        </p>
     </footer>
  )
}

export default Footer