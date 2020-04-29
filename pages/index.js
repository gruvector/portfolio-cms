import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export default () => {
  const heroData = {
    heading: "I'm John Doe, and I create",
    typed: [
      "fast websites.",
      "beautiful logos.",
      "great experiences."
    ],
    firstButton: {
      icon: "briefcase-outline",
      text: "My work",
      link: "/#portfolio"
    },
    secondButton: {
      icon: "whatsapp",
      text: "Contact",
      link: "/#contact"
    },
    social: {
      facebook: { show: true, link: "https://facebook.com" },
      instagram: { show: true, link: "https://instagram.com" },
      linkedin: { show: true, link: "https://linkedin.com" }
    },
    image: "/img/hero.jpg"
  }

  const aboutData = {
    heading: "Who am I?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi, sit amet consequat leo. Integer non dolor non elit sodales consequat. Integer tempor sollicitudin massa, vel sollicitudin ante dictum eu.",
    image: "/img/about.jpg"
  }

  const featuresData = [
    { icon: "monitor-screenshot", title: "UI/UX", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi." },
    { icon: "draw", title: "Logo Design", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi." },
    { icon: "xml", title: "Web Development", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi." },
  ]

  const portfolioData = {
    title: "My work",
    projects: [
      { image: "/img/project-1.jpg", title: "ShopoShopy", btnText: "View on Behance", btnLink: "https://behance.com" },
      { image: "/img/project-2.jpg", title: "LogoLogy", btnText: "View full image", btnLink: "/img/project-2.jpg" },
      { image: "/img/project-3.jpg", title: "SitoSity", btnText: "View website", btnLink: "https://google.com" },
      { image: "/img/project-4.jpg", title: "DrawoDrawy", btnText: "View full image", btnLink: "/img/project-4.jpg" },
      { image: "/img/project-5.jpg", title: "PagoPagy", btnText: "View on Behance", btnLink: "https://behance.com" },
      { image: "/img/project-6.jpg", title: "UIoUXy", btnText: "View website", btnLink: "https://google.com" }
    ]
  }

  const footerData = {
    text: "© John Doe"
  }

  return (
    <div className="container">
      <Hero data={heroData} />
      <About data={aboutData} />
      <Features data={featuresData} />
      <Portfolio data={portfolioData} />
      <Footer data={footerData} />
    </div>
  )
}