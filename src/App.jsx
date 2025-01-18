import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Research from "./components/Research";

export default function App() {
  return (
    <div
      className={`min-h-screen bg-light-background dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary`}
    >
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
