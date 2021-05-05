import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id="about"  className="about section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">
                <h3>We Care For You!</h3>
                <p>
                  To raise awareness that individuals can save lives and improve the health of others by donating blood. To encourage people to donate blood voluntarily without compensation.
                </p>
                <a href="#" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <i className="bx bx-receipt"></i>
                    <h4>What makes us unique?</h4>
                    <p>Our way of motivating and spreading awareness makes us diiferent.</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <i className="bx bx-cube-alt"></i>
                    <h4>What is our primary motivation?</h4>
                    <p>Safe blood is critical for proper medical care. Access to safe blood is an important factor in preventing the spread of infectious diseases at a global level</p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <i className="bx bx-images"></i>
                    <h4>How do we do it?</h4>
                    <p>By encouraging the donors in such a way that they are being benifited in the health domain itself </p>
                  </div>
                  <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <i className="bx bx-shield"></i>
                    <h4>Team Members</h4>
                    <p>P.Nagendra Babu,Y.Vishnu Teja,V.Sowmya,N.Siva Sai Krishna,M.Sumanth </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    )
}

export default About;