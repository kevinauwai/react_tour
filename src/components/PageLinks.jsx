import React from 'react'
import { menuitems } from '../data'
import PageLink from './PageLink'

const PageLinks = ({className}) => {
  return (

    <ul className={className}>
      {menuitems.map((item,index)=><PageLink key={index} {...item}/>)}
    </ul>
  )
}

export default PageLinks