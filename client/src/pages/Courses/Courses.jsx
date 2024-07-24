import styles from './Courses.module.css';

import { useEffect, useState } from 'react';

import { request } from '../../helper/request';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

export function Courses() {
  const [courseList, setCourseList] = useState([]);

  async function getAllCourses() {
    const courses = await request('course');
    setCourseList(courses);
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <>
      <Header />
      <div className={`bgColored main`}>
        <div className={`wrapper ${styles.mainWrapper}`}>
          <h1 className={styles.header}>Courses</h1>
          <div className={styles.courseList}>
            {courseList.map((el, i) => {
              return (
                <Link
                  key={i}
                  to={`/singleCourse/${el.id}`}
                  className="animationHovered"
                >
                  <div className={styles.courseItem}>
                    <div className={styles.ItemImg}></div>
                    <div className={styles.ItemContent}>
                      <h2 className="lineAccent">{el.course}</h2>
                      <p>{el.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
