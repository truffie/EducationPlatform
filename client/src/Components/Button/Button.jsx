import { Link } from "react-router-dom";
import styles from "./Button.module.css";
export function Button({ value, className, path, onClick }) {
  return (
    <>
      <Link to={path}>
        <button className={`${styles.button} animationHovered ${className || ""}`} onClick={onClick}>
          {value}
        </button>
      </Link>
    </>
  );
}
