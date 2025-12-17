import Lottie from "lottie-react";
import networkAnimation from "../../../assets/network.json";
import styles from './Right.module.css'

const Right = () => {
  return (
    <div className={styles.anim}>
      <Lottie animationData={networkAnimation} loop />
    </div>
  );
};

export default Right;
