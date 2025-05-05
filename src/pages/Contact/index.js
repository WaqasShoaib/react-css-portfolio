import React from 'react';
import ContactForm from '../../components/ContactForm';
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contact}>
    <h1>Contact Me</h1>
    <ContactForm />
  </section>
);

export default Contact;
