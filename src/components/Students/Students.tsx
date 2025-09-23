'use client';

import useStudents from '@/hooks/useStudents';
import type StudentInterface from '@/types/StudentInterface';
import styles from './Students.module.scss';

const Students = (): React.ReactElement => {
  const { students: students } = useStudents();

    return (
    <div className={styles.students}>
      {students.map((stundent: StudentInterface) => (
        <h2 key={stundent.id}>
          {stundent.first_name}
        </h2>
      ))}
    </div>
  );
};

export default Students;