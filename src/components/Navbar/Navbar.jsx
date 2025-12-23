import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import saiclogo from "../../assets/saiclogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <nav className={styles.navbar}>
        <a href="https://www.alumninitdgp.in/" className={styles.navItemRound}>
          <img src={saiclogo} alt="SAIC Logo" className={styles.navLogo} />
        </a>
        
        <div className={styles.navPillMain}>
          SAIC Audition 2K26
        </div>
        
        <a href="https://nitdgp.ac.in/" className={styles.navItemRound}>
          <img src={logo} alt="NIT Durgapur Logo" className={styles.navLogo} />
        </a>
      </nav>
  );
};

export default Navbar;
