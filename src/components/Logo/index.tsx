import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import RouterLink from "../RouterLink";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink href="/" className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
};

export default Logo;
