import React from 'react'
import "./About.css"

const Services = () => {
    return (
        <section id="services" className="services section-bg ">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>“Donate your blood for a reason, let the reason to be life”</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <i className="icofont-computer"></i>
              <h4><a href="#">Trade with Hospitals</a></h4>
              <p>Respective hospitals are supposed to request blood and get through payment.</p>
            </div>
          </div>
          
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <i className="icofont-image"></i>
              <h4><a href="#">Service to Blood Donation Camps</a></h4>
              <p>Respective Blood Banks are supposed to request the nearby donors details and we will feed them by info required </p>
            </div>
          </div>
         
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="500">
              <i className="icofont-earth"></i>
              <h4><a href="#">Near by Blood Banks and donors</a></h4>
              <p>In case of emergency the shortage of blood problem can be sorted by providing the details of the nearby donors and blood banks</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Services