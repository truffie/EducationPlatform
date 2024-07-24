import styles from './Home.module.css';

import { Footer } from '../../Components/Footer/Footer';
import { Button } from '../../Components/Button/Button';
import { Header } from '../../Components/Header/Header';

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <section className={`bgColored ${styles.about}`}>
          <div className={`${styles.sectionWrapper} wrapper`}>
            <div>
              <p className={styles.primaryColored}>E-COURSE PLATFORM</p>
              <div className={styles.Content}>
                <h1 className={`${styles.ContentHeader} ${styles.mainHeader}`}>
                  Learning and teaching online, made easy.
                </h1>
                <p className={styles.ContentSubtitle}>
                  Any subject, in any language, on any device, for all ages!
                </p>
                <Button
                  className={`${styles.primaryColored}`}
                  value={'About platform'}
                  path="/course"
                />
                <div className={styles.statsWrapper}>
                  <p className={`${styles.stats}`}>600</p>
                  <p className={styles.StatsSubtitle}>Students</p>
                </div>
              </div>
            </div>
            <div className={`${styles.aboutImg}`}>
              <div className={styles.aboutFlowerImg}></div>
            </div>
          </div>
        </section>
        <section className={styles.learn}>
          <div className={`${styles.sectionWrapper} wrapper`}>
            <div className={`${styles.learnImg}`}></div>
            <div className={styles.Content}>
              <h2 className={styles.ContentHeader}>
                Learn a language in a playful way
              </h2>
              <p className={styles.ContentSubtitle}>
                Make learning programming languages more fun with mini-games
              </p>
              <div className={styles.buttonsWrapper}>
                <Button
                  className={`${styles.secondaryColored} ${styles.button} ${styles.customButton}`}
                  value="Sprint →"
                />
                <Button
                  className={`${styles.button} ${styles.primaryColored} ${styles.customButton}`}
                  value="Tasks →"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.textbook} bgColored`}>
          <div className={` ${styles.sectionWrapper} wrapper`}>
            <div className={styles.Content}>
              <h2 className={styles.ContentHeader}>Increase your knowledge</h2>
              <p className={styles.ContentSubtitle}>
                Traditional and new effective approaches to learning languages
              </p>
              <Button
                className={`${styles.primaryColored}`}
                value="Textbook →"
              />
            </div>
            <div className={styles.textbookImg}></div>
          </div>
        </section>
        <section className={styles.statistic}>
          <div className={` ${styles.sectionWrapper} wrapper`}>
            <div className={styles.statisticImg}></div>
            <div className={styles.Content}>
              <h2 className={styles.ContentHeader}>
                Watch your progress every day
              </h2>
              <p className={styles.ContentSubtitle}>
                Save statistics on your achievements and mistakes
              </p>
              <Button
                className={`${styles.primaryColored}`}
                value="Statistics →"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Home;
