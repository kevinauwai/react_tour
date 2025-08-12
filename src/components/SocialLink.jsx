import React from 'react'
import { socialLinks } from '../data';
const SocialLink = ({className}) => {
  return (
    <div className={className}>
      {socialLinks.map((link)=><a href={link.href} key={link.id}><i className={link.icon}></i></a>)}
        </div>
  )
}

export default SocialLink;