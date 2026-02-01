import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Hero } from './components/BaseComponents';
import { Skills, Projects, Timeline, GithubStats, Certifications } from './components/FeatureComponents';
import ContactForm from './components/ContactForm';
import { ScrollToTop, LoadingScreen } from './components/Utilities';
import { portfolioData } from './data/portfolio';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        backgroundColor: 'rgba(59, 130, 246, 0.08)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: -1,
        filter: 'blur(100px)',
        x: mousePos.x - 200,
        y: mousePos.y - 200,
      }}
    />
  );
};

const Footer = () => (
  <footer className="glass" style={{ margin: '4rem 2rem 2rem', padding: '4rem 2rem', textAlign: 'center' }}>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let's Build Something <span className="gradient-text">Exceptional</span></h3>
    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Currently open to Full Stack and Frontend opportunities.</p>
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <a href={`mailto:${portfolioData.profile.email}`} className="gradient-text" style={{ fontWeight: 600 }}>Email</a>
      <a href={portfolioData.profile.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
    <p style={{ marginTop: '4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
      © {new Date().getFullYear()} {portfolioData.profile.name}. Crafted with focus and code.
    </p>
  </footer>
);

const About = () => (
  <section id="about" className="container">
    <div className="glass" style={{ padding: '4rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Beyond the <span className="gradient-text">Code</span></h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        I don't just write scripts; I design systems. {portfolioData.profile.brandStatement}
        Self-taught and project-driven, I thrive in environments that challenge my technical architecture skills.
      </p>
    </div>
  </section>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <GithubStats />
        <Timeline />
        <Certifications />
        <Projects />
        <About />
        <ContactForm />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
