import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Box, Typography, Button, Chip, Paper, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Home.module.css';

const Home = () => {
  const { setTitle } = usePageTitle();
  useEffect(() => {
    setTitle('Home | Professional Portfolio');
  }, [setTitle]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Box className={styles.headline}>
          <Typography variant="overline" className={styles.greeting}>
            Welcome to my portfolio
          </Typography>
          <Typography variant="h1" className={styles.title}>
            Hello, I'm <span className={styles.name}>John Doe</span>
            <span className={styles.cursor}>|</span>
          </Typography>
          <Typography variant="h2" className={styles.subtitle}>
            Full Stack Developer & Computer Science Graduate
          </Typography>
          
          <Typography variant="body1" className={styles.intro}>
            Passionate about building elegant, user-centric applications with modern technologies.
            I specialize in creating responsive web applications with a focus on performance and accessibility.
          </Typography>
        </Box>
        
        <Box className={styles.techSection}>
          <Typography variant="h6" className={styles.sectionTitle}>
            My Technology Stack
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} className={styles.skillCard}>
                <Typography variant="subtitle1" className={styles.cardTitle}>
                  Core Technologies
                </Typography>
                <div className={styles.chipContainer}>
                  <Chip label="React" className={styles.techChip} />
                  <Chip label="Node.js" className={styles.techChip} />
                  <Chip label="MongoDB" className={styles.techChip} />
                  <Chip label="Express" className={styles.techChip} />
                  <Chip label="JavaScript" className={styles.techChip} />
                  <Chip label="HTML/CSS" className={styles.techChip} />
                </div>
              </Paper>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Paper elevation={0} className={styles.skillCard}>
                <Typography variant="subtitle1" className={styles.cardTitle}>
                  Currently Exploring
                </Typography>
                <div className={styles.chipContainer}>
                  <Chip label="AWS" className={styles.techChip} />
                  <Chip label="TypeScript" className={styles.techChip} />
                  <Chip label="Docker" className={styles.techChip} />
                  <Chip label="GraphQL" className={styles.techChip} />
                  <Chip label="Machine Learning" className={styles.techChip} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
  );
};

export default Home;