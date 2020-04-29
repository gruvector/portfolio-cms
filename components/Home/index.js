import Hero from '../Hero'
import About from '../About'
import Features from '../Features'
import Portfolio from '../Portfolio'
import Footer from '../Footer'

export default (attributes) => {
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