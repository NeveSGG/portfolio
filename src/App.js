import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';
import ExperienceMenu from './components/ExperienceMenu';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <ExperienceMenu/>
      <Projects />
      <Contact />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
