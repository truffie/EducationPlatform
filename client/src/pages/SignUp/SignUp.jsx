//import { React } from " react "
import styles from "./SignUp.module.css";

import { Header } from "../../Components/Header/Header";
import { Footer } from "./../../Components/Footer/Footer";

export function SignUp() {
  return (
    <>
      <Header />
      <div className={`${"bgColored"} ${"main"} ${styles.SignUp}`}>
        <div className="wrapper">
          <div className={styles.content}>
            <h1 className={`${"ContentHeader"} ${"mainHeader"}`}>Sign Up</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
