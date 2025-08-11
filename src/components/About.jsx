import Title from "./Title"
const About = () => {
  return (
     <section id="about" className="about" name="about">
        <div className="subject">
            <Title title="ABOUT" subtitle="US"/>
            {/* <h2><span className="text-primary">ABOUT</span><span className="text-secondary"> US</span></h2> */}
            </div>
        <div className="about-content">
            <div className="about-img">
                <img src="img/about.jpg" alt=""/>
            </div>
            <div className="text">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, numquam?</p>
                <a href="#" className="btn-about">Read more</a>
            </div>
        </div>
    </section>
  )
}

export  default About