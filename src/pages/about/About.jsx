import Footer from '../../partials/Footer';
import Navbar from '../../partials/Navbar';
import Header from './components/Header';

import styles from './about.module.scss';
import PopularProducts from './components/PopularProducts';

const About = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PopularProducts />
      <div className={styles.footer_bg}>
        <Footer />
      </div>
    </>
  );
};

export default About;
