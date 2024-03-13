import styles from "./Button.module.css";
import clsx from "clsx";
import {ReactComponent as IconButtonPlus} from "../../assets/imgs/9056775_arrows_exchange_icon.svg";
import {ReactComponent as IconButtonArrow} from "../../assets/imgs/Button.svg";

const icons = {
  plus: IconButtonPlus,
  arrow: IconButtonArrow,
};

export const Button = function Button( {children, order = null, icon} ) {
  const Icon = icons[icon];
  return <button className={clsx(styles.button, styles[order])}>
    {Icon ? <Icon className={styles.icon} /> : null }
    {children}
    </button>
};