import React from 'react'

const Title = ({title,subtitle}) => {
  return (
     <h2><span className="text-primary">{title}</span> <span className="text-secondary">{subtitle}</span></h2>
  )
}

export default Title