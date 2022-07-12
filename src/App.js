import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';
import ExperienceMenu from './components/ExperienceMenu';
import Work from './components/Work';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <ExperienceMenu/>
      <Projects />
      <Links />
    </div>
  );
}

export default App;
