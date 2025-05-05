import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, imageUrl, demoLink, repoLink }) => (
  <div className={styles.card}>
    <div className={styles.imageWrapper}>
      <img src={imageUrl} alt={title} className={styles.image} />
    </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <div className={styles.links}>
      {demoLink && (
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
      {repoLink && (
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          Source Code
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
