import styles from './SingleCourse.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { request } from './../../helper/request';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Button } from '../../Components/Button/Button';

export function SingleCourse() {
  const objectWithId = useParams();

  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);

  const getCourseById = async () => {
    const course = await request(`course/${objectWithId.id}`);
    setCourse(course);
  };

  const getLessonsByCourse = async () => {
    const lessons = await request(`lesson/${objectWithId.id}`);
    setLessons(lessons);
    console.log(lessons);
  };

  useEffect(() => {
    getCourseById();
    getLessonsByCourse();
  }, []);

  return !course ? (
    console.log('waiting')
  ) : (
    <div>
      <Header />
      <div className={`${'bgColored'} ${'main'}`}>
        <div className={`${'wrapper'} ${styles.mainWrapper}`}>
          <div className={styles.lesson}>
            <div className={styles.content}>
              <div className={styles.image}></div>
              <div className={styles.info}>
                <h1>{course && course[0]?.course}</h1>
                <p>{course && course[0]?.description}</p>
              </div>
            </div>
            <Button
              value="Go to course"
              className="primaryColored"
              path={'/course'}
            />
          </div>
          <div className={styles.programm}>
            <h1>{lessons.length} lessons</h1>
            <ol>
              {lessons.map((el) => (
                <li key={el.id}>{el.title}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
