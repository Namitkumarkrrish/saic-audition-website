import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import saiclogo from "../../assets/saiclogo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={saiclogo} alt="saiclogo" />
      </div>
      <ul className={styles.links}>
        <li className={styles.home}>Home</li>
        <li className={styles.registerBtn}>
          <a href="#register">
            Register
          </a>
        </li>
      </ul>
      <div className={styles.collegeLogo}>
        <img src={logo} alt="nit logo" />
      </div>
    </nav>
  );
};

export default Navbar;
