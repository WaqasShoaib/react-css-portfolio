import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import ContactForm from '../../components/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  const { setTitle } = usePageTitle();
  useEffect(() => {
    setTitle('Contact | MyPortfolio');
  }, [setTitle]);

  return (
    <section className={styles.contact}>
      <h1 className={styles.heading}>Contact Me</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
