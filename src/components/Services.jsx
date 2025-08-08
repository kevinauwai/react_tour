import React from 'react'

const Services = () => {
  return (
     <section  id="services" className="services">
             <h2><span className="text-primary">our</span> <span className="text-secondary">services</span></h2>
        <div className="services-content">
            <div className="service">
                <i className="fa-solid fa-wallet"></i>
                <h3>saving money</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic optio nihil quaerat eum doloremque.</p>
                
            </div>
            <div className="service">
                <i className="fa-solid fa-tree"></i>
                <h3>endless hiking</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora adipisci architecto facere iusto voluptates. Repellat?</p>
            </div>
            <div className="service">
                <i className="fa-solid fa-socks"></i>
                <h3>Lorem, ipsum.</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, accusamus.</p>
            </div>
        </div>
       
     </section>
  )
}

export default Services