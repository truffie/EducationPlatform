import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <header className={`${styles.bgColored} ${styles.lineAccent} ${styles.header}`}>
        <div className={`${styles.headerWrapper} ${"wrapper"} ${styles.layout2Columns}`}>
          <p className={styles.logo}>Hschool</p>
          <div>
            <button className={`${styles.button} ${styles.login}`}>Login →</button>
            <button className={`${styles.button} ${styles.signup}`}>Sign Up</button>
          </div>
        </div>
      </header>
      <section className={`${styles.bgColored} ${styles.about}`}>
        <div className={`${styles.sectionWrapper} ${"wrapper"}`}>
          <div className={styles.Content}>
            <p className={styles.primaryColored}>E-COURSE PLATFORM</p>
            <div className={styles.ContentText}>
              <h1 className={`${styles.ContentHeader} ${styles.mainHeader}`}>
                Learning and teaching online, made easy.
              </h1>
              <p className={styles.ContentSubtitle}>Any subject, in any language, on any device, for all ages!</p>
            </div>
            <button className={`${styles.button} ${styles.primaryColored}`}>About platform</button>
            <div className={styles.statsWrapper}>
              <p className={`${styles.stats} ${styles.ContentHeader}`}>600</p>
              <p className={styles.ContentSubtitle}>Students</p>
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
      <section className={`${styles.textbook} ${styles.bgColored}`}>
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
      <footer className={styles.bgColored}>
        <div className={"wrapper"}>
          <div className={`${styles.footerTop} ${styles.layout2Columns} ${styles.lineAccent}`}>
            <nav>
              <ul>
                <li>Home</li>
                <li>Textbook</li>
                <li>Statistics</li>
                <li>Sprint</li>
              </ul>
            </nav>
            <div className={styles.contacts}>
              <p>Alex</p>
              <p>Gabriel</p>
              <p>Marcus</p>
            </div>
          </div>
          <div className={`${styles.footerBottom} ${styles.layout2Columns} `}>
            <div>
              <div className={styles.githubIco}></div>
              <div className={styles.gtIco}></div>
              <div className={styles.youtubeIco}></div>
            </div>
            <p>
              ©2021 Hschool. Project for <span>Hschool</span>.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Home;
