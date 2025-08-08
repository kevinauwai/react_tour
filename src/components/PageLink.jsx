import React from 'react'

const PageLink = ({className}) => {
  return (
    <ul className={className}>
        <li className="menu-item"><a href="#home">Home</a></li>
        <li className="menu-item"><a href="#about">About</a></li>
        <li className="menu-item"><a href="#services">Services</a></li>
        <li className="menu-item"><a href="#tours">Tours</a></li>
    </ul>
  )
}

export default PageLink