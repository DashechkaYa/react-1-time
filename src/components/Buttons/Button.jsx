import styles from "./Button.module.css";
import clsx from "clsx";

export const Button = function Button( {children, order = ''} ) {
return <button className={clsx(styles.button, styles[order])}>{children}</button>
};