import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import { attributes } from '../content/main.js';

const Home = () => {
  const { hero, about, features, portfolio, footer } = attributes;
  return (
    <div className="container">
      <Hero data={hero} />
      <About data={about} />
      <Features data={features} />
      <Portfolio data={portfolio} />
      <Footer data={footer} />
    </div>
  );
};

export default Home;
