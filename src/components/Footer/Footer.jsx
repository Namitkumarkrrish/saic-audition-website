import styles from "./Footer.module.css";

const contacts = [
  {
    title: "Contact Person 1",
    detail: "Phone / Email here",
  },
  {
    title: "Contact Person 2",
    detail: "Phone / Email here",
  },
  {
    title: "Contact Person 3",
    detail: "Phone / Email here",
  },
  {
    title: "Contact Person 4",
    detail: "Phone / Email here",
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
