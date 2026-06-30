import './App.css'
import Navbar from "./components/layout/Navbar";
import Hero from './components/sections/Hero';
import Companies from './components/sections/Companies';
import Features from './components/sections/Features';
import Statistics from './components/sections/Statistics';
import Courses from './components/sections/Courses';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/sections/Footer';
import BackToTop from './components/ui/BackToTop';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  return (
    <>
    <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Statistics />
      <Testimonials />
      <Companies />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;