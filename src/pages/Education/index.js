import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import CustomTable from '../../components/CustomTable';
import styles from './Education.module.css';

const columns = ['Degree', 'Institution', 'Year'];
const data = [
  { Degree: 'B.Sc Computer Science', Institution: 'University X', Year: '2020' },
  { Degree: 'M.Sc Web Development', Institution: 'University Y', Year: '2022' },
];

const Education = () => {
  const { setTitle } = usePageTitle();
  useEffect(() => {
    setTitle('Education | MyPortfolio');
  }, [setTitle]);

  return (
    <section className={styles.education}>
      <h1 className={styles.heading}>Education</h1>
      <CustomTable columns={columns} data={data} />
    </section>
  );
};

export default Education;
