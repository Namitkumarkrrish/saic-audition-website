import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import saiclogo from "../../assets/saiclogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={saiclogo} alt="saiclogo" />
      </div>
      <ul className={styles.links}>
        <Link to="/" className={styles.home}>
          Home
        </Link>
        <li className={styles.registerBtn}>
          <a href="#register">
            Register
          </a>
        </li>
        <li className={styles.contact}>
          Contact us
        </li>
      </ul>
      <div className={styles.collegeLogo}>
        <img src={logo} alt="nit logo" />
      </div>
    </nav>
  );
};

export default Navbar;
