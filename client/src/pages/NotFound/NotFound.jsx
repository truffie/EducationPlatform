import styles from "./NotFound.module.css";

import { Footer } from "./../../Components/Footer/Footer";
import { Header } from "./../../Components/Header/Header";
import { Button } from "./../../Components/Button/Button";

export function NotFound() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={`${"bgColored"} ${"main"} ${styles.main}`}>
        <div className={`${"wrapper"} ${styles.mainWrapper}`}>
          <div className={styles.content}>
            <h5>Error 404</h5>
            <h1 className={`${"ContentHeader"} ${"mainHeader"}`}>Hey Buddy</h1>
            <p>We can’t seem to find the page you are looking for.</p>
            <Button value={"Go home"} path={"/"} />
          </div>
          <div className={styles.image}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
