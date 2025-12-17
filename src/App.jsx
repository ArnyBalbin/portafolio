import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import RevealOnScroll from "./components/common/RevealOnScroll";

function App() {
  return (
    <Layout>
      <section
        id="home"
        className="min-h-[calc(100vh-96px)] flex items-center justify-center relative pt-24"
      >
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
      </section>
      <section id="about">
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
      </section>
    </Layout>
  );
}

export default App;
