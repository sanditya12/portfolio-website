import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/section/Hero";
import Projects from "./components/section/Projects";

function App() {
  return (
    <div className={`font-roboto bg-light min-h-screen `}>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
