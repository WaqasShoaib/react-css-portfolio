import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Portfolio React App',
    description: 'A personal portfolio built with React.',
    imageUrl: '/assets/project1.png',
    demoLink: 'https://demo.example.com',
    repoLink: 'https://github.com/yourname/react-portfolio-2025',
  },
  // add more projects here
];

const Projects = () => (
  <section className={styles.projects}>
    {projects.map((p) => (
      <ProjectCard key={p.title} {...p} />
    ))}
  </section>
);

export default Projects;
