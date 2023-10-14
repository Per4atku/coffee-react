import styles from './styles/popularProducts.module.scss';
import { HiStar } from 'react-icons/hi';

const products = [
  {
    name: 'Espresso',
    price: '21 K',
    image: 'https://i.ibb.co/ch6xk8m/espresso.png',
    rating: '4.8',
  },
  {
    name: 'Vanilla Latte',
    price: '12 K',
    image: 'https://i.ibb.co/FVRVLSV/latte.png',
    rating: '4.8',
  },
  {
    name: 'Hazelnut Latte',
    price: '23 K',
    image: 'https://i.ibb.co/rQ3jcZy/hazeinut.png',
    rating: '4.8',
  },
];

const PopularProducts = () => {
  return (
    <div className="container">
      <div className={styles.bg}>
        <div className={styles.cards}>
          {products.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
          <div className={styles.logo_filler}></div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, rating, price, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.window} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.rate}>
          <div className={styles.rate_inner}>
            {rating} <HiStar color="#FFD057" />
          </div>
        </div>
        <div className={styles.coffee_image}></div>
      </div>
      <div className={styles.details}>
        <div className={styles.upper}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div className={styles.lower}>
          <div className={styles.buttons}>
            <button className={styles.button}>Hot</button>
            <button className={styles.button}>Cold</button>
          </div>
          <button className={styles.addToCard}></button>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
