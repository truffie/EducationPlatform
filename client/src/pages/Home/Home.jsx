import styles from "./Home.module.css";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Button } from './../../Components/Button/Button';
function Home() {
  return (
    <>
      <Header />
<main className="main">
  
        <section className={`${"bgColored"} ${styles.about}`}>
          <div className={`${styles.sectionWrapper} ${"wrapper"}`}>
            <div className={styles.Content}>
              <p className={styles.primaryColored}>E-COURSE PLATFORM</p>
              <div className={styles.ContentText}>
                <h1 className={`${styles.ContentHeader} ${styles.mainHeader}`}>
                  Learning and teaching online, made easy.
                </h1>
                <p className={styles.ContentSubtitle}>Any subject, in any language, on any device, for all ages!</p>
              </div>
              <Button className={styles.primaryColored} value={"About platform"} path="/course"/>
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
        <section className={styles.learn}>
          <div className={`${styles.sectionWrapper} ${"wrapper"}`}>
            <div className={`${styles.learnImg}`}></div>
            <div className={styles.Content}>
              <div className={styles.ContentText}>
                <h2 className={styles.ContentHeader}>Learn a language in a playful way</h2>
                <p className={styles.ContentSubtitle}>Make learning programming languages more fun with mini-games</p>
              </div>
              <div className={styles.buttonsWrapper}>
                <div className={`${styles.secondaryColored} ${styles.button} ${styles.customButton}`}>Sprint →</div>
                <div className={`${styles.button} ${styles.primaryColored} ${styles.customButton}`}>Tasks →</div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.textbook} ${"bgColored"}`}>
          <div className={` ${styles.sectionWrapper} ${"wrapper"}`}>
            <div className={styles.Content}>
              <div className={styles.ContentText}>
                <h2 className={styles.ContentHeader}>Increase your knowledge</h2>
                <p className={styles.ContentSubtitle}>Traditional and new effective approaches to learning languages</p>
              </div>
              <button className={`${styles.button} ${styles.primaryColored}`}>Textbook →</button>
            </div>
            <div className={styles.textbookImg}></div>
          </div>
        </section>
        <section className={styles.statistic}>
          <div className={` ${styles.sectionWrapper} ${"wrapper"}`}>
            <div className={styles.statisticImg}></div>
            <div className={styles.Content}>
              <div className={styles.ContentText}>
                <h2 className={styles.ContentHeader}>Watch your progress every day</h2>
                <p className={styles.ContentSubtitle}>Save statistics on your achievements and mistakes</p>
              </div>
              <button className={`${styles.button} ${styles.primaryColored}`}>Statistics →</button>
            </div>
          </div>
        </section>
</main>
      <Footer />
    </>
  );
}
export default Home;
