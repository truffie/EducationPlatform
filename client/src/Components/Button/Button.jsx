//import { React } from " react "
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
export function Button({ value, className, path }) {
  console.log(className);
  return (
    <>
      <Link to={path}>
        <button className={`${styles.button} ${className || ""}`}>{value}</button>
      </Link>
    </>
  );
}
