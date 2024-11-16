// frontend/src/pages/Project.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const Project = () => {
  const [projects, setProjects] = useState([]);

  // Fonction pour récupérer les projets depuis le backend
  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <Header />
      <h2>Mes Projets</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Project;
