//import { React } from " react "
import styles from "./About.module.css";
import { Button } from "./../Button/Button";

export function About() {
  return (
    <>
      <section className={`${"bgColored"} ${styles.about}`}>
        <div className={`${"sectionWrapper"} ${"wrapper"}`}>
          <div className={"Content"}>
            <p className={"primaryColored"}>E-COURSE PLATFORM</p>
            <div className={"ContentText"}>
              <h1 className={`${"ContentHeader"} ${styles.mainHeader}`}>
                Learning and teaching online, made easy.
              </h1>
              <p className={"ContentSubtitle"}>Any subject, in any language, on any device, for all ages!</p>
            </div>
            <Button className={"primaryColored"} value={"About platform"} path="/course" />
            <div className={styles.statsWrapper}>
              <p className={`${styles.stats}`}>600</p>
              <p className={styles.StatsSubtitle}>Students</p>
            </div>
          </div>
          <div className={`${styles.aboutImg}`}>
            <div className={styles.aboutFlowerImg}></div>
          </div>
        </div>
      </section>
    </>
  );
}
