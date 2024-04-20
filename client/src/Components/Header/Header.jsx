//import { React } from " react "
import styles from "./Header.module.css";
import { Button } from "./../Button/Button";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className={`${"bgColored"} ${"lineAccent"} ${styles.header}`}>
      <div className={`${styles.headerWrapper} ${"wrapper"} ${"layout2Columns"}`}>
        <Link to="/">
          <p className={styles.logo}>Hschool</p>
        </Link>
        <div>
            <Button className={styles.login} value={"Login →"} path={"/login"}/>
            <Button className={styles.signup} value={"Sign Up"}  path={"/signup"}/>
        </div>
      </div>
    </header>
  );
}
