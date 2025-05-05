import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Home.module.css';

const Home = () => {
  const { setTitle } = usePageTitle();
  useEffect(() => {
    setTitle('Home | MyPortfolio');
  }, [setTitle]);

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.subtitle}>
        This is the Home page. Replace this with your introduction.
      </p>
    </section>
  );
};

export default Home;
