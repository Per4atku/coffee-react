import styles from './styles/header.module.scss';

const Header = () => {
  return (
    <header className="container">
      <div className={styles.content}>
        <h1>Enjoy your coffee before your activity</h1>
        <p>Boost your productivity and build your mood with a glass of coffee in the morning </p>

        <div className={styles.buttons}>
          <button className={`${styles.order_btn} btn`}>
            <div>Order now</div>
          </button>
          <button className={`${styles.menu_btn} h-btn`}>More menu</button>
        </div>
      </div>
      <div className={styles.coffee_display}>
        <div className={styles.coffee_name}>
          <div className={styles.coffee_name_inner}>Cappuccino</div>
        </div>
        <div className={styles.coffee_price}>
          <div className={styles.coffee_price_inner}>18K</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
