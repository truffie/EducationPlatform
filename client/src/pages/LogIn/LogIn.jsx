//import { React } from " react "
import styles from "./LogIn.module.css";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "./../../Components/Header/Header";

export function LogIn() {
  return (
    <>
      <Header />
      <div className={`${"bgColored"} ${"main"}`}>
        <div className="wrapper">
          <div className={styles.content}>
            <h1 className={`${"ContentHeader"} ${"mainHeader"}`}>Login</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
