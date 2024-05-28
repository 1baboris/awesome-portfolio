import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default App;
