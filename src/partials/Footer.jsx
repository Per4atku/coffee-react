import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className="container">
      <div className={styles.upper}>
        <a className={styles.feed} href="#">
          Instagram Feed
        </a>
        <div className={styles.logo}>
          <img src="/assets/logo-l.svg" alt="Logo" />
          <div className={styles.logo_name}>Cotask</div>
        </div>
        <div className={styles.links}>
          <a href="#">
            <img src="/assets/Insta.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/assets/Fb.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/assets/Pintrest.svg" alt="Pinterest" />
          </a>
          <a href="#">
            <img src="/assets/Twiter.svg" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.contact}>
          <h5>Contact</h5>
          <div className={styles.contact_info}>
            5 Rue Dalou, 75015 Paris <br />
            <b>Call</b> - +33 156 78 89 56 <br />
            <b>benoit@mail.com</b>
          </div>
        </div>
        <div className={styles.mail}>
          <div className={styles.mail_header}>
            Join our mailing list for updates, <br />
            Get news & offers events.
          </div>
          <div className={styles.mail_field}>
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.working_hours}>
          <h5>Working Hours</h5>
          <div className={styles.working_hours_info}>
            <b>Mon – Fri</b>: 7.00am – 6.00pm <br />
            <b>Sat</b>: 7.00am – 6.00pm <br />
            <b>Sun</b>: 8.00am – 6.00pm <br />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.line}></div>
        <div className={styles.copyright_container}>
          <div className={styles.left}>© Copyright - Cotask</div>
          <div className={styles.right}>Styleguide / Licenses</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
