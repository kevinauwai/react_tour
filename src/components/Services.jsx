import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'
const Services = () => {
  return (
     <section  id="services" className="services">
            <Title title="our" subtitle="services"/>
        <div className="services-content">
            {services.map((service)=>
                <Service key={service.id} {...service}/>
            )}
            
        </div>
       
     </section>
  )
}

export default Services