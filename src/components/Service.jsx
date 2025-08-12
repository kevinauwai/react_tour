import React from 'react'

const Service = ({icon,title,info}) => {
  return (
            <div className="service">
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{info}</p>
                
            </div>
  )
}

export default Service