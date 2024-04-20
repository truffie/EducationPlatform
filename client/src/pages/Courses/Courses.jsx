//import { React } from " react "
//import styles from "./Courses.module.css"

import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import styles from "./Courses.module.css";

export function Courses() {
  return (
    <>
      <Header />
      <div className={`${"bgColored"} ${"main"}`}>
        <div className={`${"wrapper"} ${styles.mainWrapper}`}>
          <h1 className={styles.header}>Courses</h1>
          <div className={styles.courseList}>
            <div className={styles.courseItem}>
              <div className={styles.ItemImg}></div>
              <div className={styles.ItemContent}>
                <h2 className={"lineAccent"}>JavaScript</h2>
                <p>
                  JavaScript is a practical course where students learn the basics of JavaScript. It covers variables,
                  operators, conditionals, loops, functions, and data manipulation.
                </p>
              </div>
            </div>
            <div className={styles.courseItem}>
              <div className={styles.ItemImg}></div>
              <div className={styles.ItemContent}>
                <h2 className={"lineAccent"}>TypeScript</h2>
                <p>
                  TypeScript is a course that provides an introduction to TypeScript. Students will learn about
                  TypeScript's key features, such as type annotations, interfaces, classes, and modules
                </p>
              </div>
            </div>
            <div className={styles.courseItem}>
              <div className={styles.ItemImg}></div>
              <div className={styles.ItemContent}>
                <h2 className={"lineAccent"}>Python</h2>
                <p>
                  Students will learn about variables, data types, conditionals, loops, functions, and file handling.
                  Through hands-on exercises and projects, students will gain proficiency in writing Python code and
                  solving real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
