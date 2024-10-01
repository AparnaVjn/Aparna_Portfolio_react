import React from 'react';
import './about.css';

export const About = () => {
  return (
    <>
     

      <section id="about" className="about">
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p  className='aboutme'>Learn more about me</p>
          </div>

          <div className="content">
            <h3>Web Developer</h3>
            <p className="fst-italic">
              Passionate MERN stack web developer dedicated to crafting immersive digital experiences. With a keen eye for design and a commitment to clean, efficient code, I specialize in bringing ideas to life through dynamic web applications.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 March 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.aparnavjn.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 773631 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kottayam, Kerala</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>aparnavjn@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
