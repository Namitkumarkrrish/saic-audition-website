import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import saiclogo from "../../assets/saiclogo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="https://www.alumninitdgp.in/" target="_blank" rel="noopener noreferrer">
          <img src={saiclogo} alt="saiclogo" className={styles.slogo}/>
        </a>
      </div>
      <ul className={styles.links}>
        <Link to="/" className={styles.home}>
          Home
        </Link>
        <li className={styles.registerBtn}>
            Register
        </li>
        <li className={styles.contact}>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className={styles.collegeLogo}>
        <a href="https://nitdgp.ac.in/" target="blank" rel="noopener noreferrer">
            <img src={logo} alt="nit logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
