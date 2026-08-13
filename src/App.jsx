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
const ResumeFresher = lazy(() => import('./components/ResumeFresher'));

const ResumeFallback = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>Loading resume...</div>
);

const LandingPage = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Skills />
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
            <Suspense fallback={<ResumeFallback />}>
              <Resume />
            </Suspense>
          </ErrorBoundary>
        }
      />
      {/* Tailored variants — one sublink per role/company, not linked from the nav */}
      <Route
        path="/resume/fresher"
        element={
          <ErrorBoundary>
            <Suspense fallback={<ResumeFallback />}>
              <ResumeFresher />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

export default App;
