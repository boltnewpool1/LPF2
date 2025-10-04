import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import LegalAid from './components/LegalAid';
import Collaborations from './components/Collaborations';
import Events from './components/Events';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Home />
        <About />
        <Blog />
        <LegalAid />
        <Collaborations />
        <Events />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
      <Newsletter />
    </div>
  );
}

export default App;
