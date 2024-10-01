import React from 'react';
import './skills.css';




const skills = [
  { name: 'HTML5', icon: 'fab fa-html5' },
  { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Node.js', icon: 'fab fa-node' },
  { name: 'Express.js', icon: 'fab fa-code'},
  { name: 'MongoDB', icon: 'fas fa-database' },
  

  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
];

export const Skills = () => {
  return (
<>
    
    <section className="skills-section">

      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              <i className={skill.icon}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
