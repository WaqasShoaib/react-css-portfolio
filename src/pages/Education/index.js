import React from 'react';
import CustomTable from '../../components/CustomTable';
import styles from './Education.module.css';

const columns = ['Degree', 'Institution', 'Year'];
const data = [
  { Degree: 'B.Sc Computer Science', Institution: 'University X', Year: '2020' },
  { Degree: 'M.Sc Web Development', Institution: 'University Y', Year: '2022' },
  // add more rows as needed
];

const Education = () => (
  <section className={styles.education}>
    <h1>Education</h1>
    <CustomTable columns={columns} data={data} />
  </section>
);

export default Education;
