import React from 'react'
import {tours} from "../data";
import Tour from './Tour';
import Title from './Title';
const Tours = () => {
  return (
     <section id="tours" className="tours">
        <Title title="featured" subtitle="Tours"/>
        <div className="cards">
            {tours.map((tour)=>
            <Tour key={tour.id} {...tour}/>
            )}
        </div>
     </section>
  )
}

export default Tours