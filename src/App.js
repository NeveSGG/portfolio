import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';
import ExperienceMenu from './components/ExperienceMenu';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded_hiding');
      const timer1 = setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 1000)
      clearTimeout(timer1)
    }, 1000)

    return () => {clearTimeout(timer)}
  }, [])

  return (
    <div className="App">
      <Preloader />
      <Header />
      <Hero/>
      <About/>
      <ExperienceMenu/>
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
