import React from 'react';
import styles from './SideNav.module.css';

const SideNav = () => (
  <aside className={styles.sidenav}>
    <div className={styles.profile}>
      <img
        src="/assets/profile.jpg"
        alt="Profile"
        className={styles.avatar}
      />
      <h2>Your Name</h2>
      <p>Web Developer</p>
    </div>
    <nav className={styles.navLinks}>
      <a href="#home">Home</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </aside>
);

export default SideNav;
