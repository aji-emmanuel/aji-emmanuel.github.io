import './App.css';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Theme from './components/theme/Theme';

function App() {

  const [isDark, setTheme] = useState(false);

  return (
    <main className={isDark? 'dark' : null}>
      <Header isDark={isDark} />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <Theme isDark={isDark} setTheme={setTheme}/>
    </main>
  );
};

export default App;
