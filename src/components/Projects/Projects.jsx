import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './projects.css'; 
import DatingImage from '../../assets/dating.jpg';
import LibraryImage from '../../assets/library.png'

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Library Management',
      image: LibraryImage,
      category: 'Website',
      client: 'St.marys GHS Chowwannur',
      date: 'May, 2024',
      url: 'https://library-chowwannur.onrender.com',
      description: `The Library Management System is a web application designed to facilitate efficient management of a library's resources. It provides a user-friendly interface for authorized administrators to perform various tasks related to managing books and tracking their availability.`,
    },
    {
      id: 2,
      title: 'Dating Platform',
      image: DatingImage,
      category: 'Website',
      client: 'self project',
      date: 'june, 2024',
      url: 'https://www.example.com',
      description: `
It is an online platform designed to help individuals meet and connect with others for romantic relationships, friendships, or casual encounters. Users typically create profiles with personal details, interests, and preferences, which are then used by the website's algorithms to match them with compatible people. Features often include messaging, and various filters for narrowing down matches based on factors like location, qualification and designation.`,
    },
    {
      id: 3,
      title: 'E-commerce',
      image: DatingImage,
      category: 'Website',
      client: 'self project',
      date: 'August, 2020',
      url: 'https://www.example.com',
      description: 'This is a sample project description. Add more details here.',
    },
    
  ];

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      
      <div className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleShow(project)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>

        {selectedProject && (
          <Modal show={showModal} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-content-wrapper">
                <div className="modal-image-wrapper">
                  <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                </div>
                <div className="modal-description">
                  <h2>{selectedProject.title}</h2>
                  <div className="project-info">
                    <p><strong>Category:</strong> {selectedProject.category}</p>
                    <p><strong>Client:</strong> {selectedProject.client}</p>
                    <p><strong>Project date:</strong> {selectedProject.date}</p>
                    <p><strong>Project URL:</strong> <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">{selectedProject.url}</a></p>
                  </div>
                  <p>{selectedProject.description}</p>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};
