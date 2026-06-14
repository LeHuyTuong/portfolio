import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const Resume = lazy(() => import('./components/Resume'));

const LandingPage = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Architecture />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/resume"
        element={
          <ErrorBoundary>
            <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading resume...</div>}>
              <Resume />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

export default App;
