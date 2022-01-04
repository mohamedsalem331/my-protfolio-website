import React from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import FooterSection from './components/FooterSection';
import SmoothScrollBar from './components/SmoothScrollBar';
import AnimatedCursor from './components/AnimatedCursor';
import { AnimatePresence } from 'framer-motion';
import NavMenu from './components/NavMenu';

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatedCursor />
      <NavMenu />
      <SmoothScrollBar>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <FooterSection />
        </AnimatePresence>
      </SmoothScrollBar>
    </>
  );
}

export default App;
