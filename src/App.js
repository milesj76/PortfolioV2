import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
