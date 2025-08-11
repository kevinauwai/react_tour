import React from 'react'

const PageLink = (item) => {
  return (
    <li className="menu-item"><a href={item.link}>{item.text}</a></li>
  )
}

export default PageLink