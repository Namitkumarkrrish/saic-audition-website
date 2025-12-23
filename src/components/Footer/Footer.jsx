import styles from "./Footer.module.css";

const contacts = [
  {
    title: "Sambhav Gupta",
    detail: "+91 93684 65569",
  },
  {
    title: "Namit Kumar Krrish",
    detail: "893684355",
  },
];

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Contact Us</h3>

        <div className={styles.contacts}>
          {contacts.map((contact, index) => (
            <div key={index} className={styles.contactCard}>
              <h4>{contact.title}</h4>
              <p>{contact.detail}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© SAIC, NIT Durgapur</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
