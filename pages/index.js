import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { attributes } from '../content/main.md'

export default () => {
  const { hero, about, features, portfolio, footer } = attributes;
  return (
    <div className="container">
      <Hero data={hero} />
      <About data={about} />
      <Features data={features} />
      <Portfolio data={portfolio} />
      <Footer data={footer} />
    </div>
  )
}