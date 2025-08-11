import React from 'react'

const SocialLink = ({className}) => {
  return (
    <div className={className}>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-threads"></i></a>
        </div>
  )
}

export default SocialLink;