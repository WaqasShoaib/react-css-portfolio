import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import ProjectCard from '../../components/ProjectCard';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Portfolio React App',
    description: 'A personal portfolio built with React.',
    imageUrl: '/assets/project1.png',
    demoLink: '#',
    repoLink: '#',
  },
  // more projects...
];

const Projects = () => {
  const { setTitle } = usePageTitle();
  useEffect(() => {
    setTitle('Projects | MyPortfolio');
  }, [setTitle]);

  return (
    <section className={styles.projects}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
