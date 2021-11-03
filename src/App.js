import React from 'react';
import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import FooterSection from './components/FooterSection';
import SmoothScrollBar from './components/SmoothScrollBar';
import Fofo from './components/Fofo';
import OverLay from './components/OverLay';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <>
      {/* <Fofo /> */}
      <SmoothScrollBar>
        <NavMenu />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
        <FooterSection />
      </SmoothScrollBar>
    </>
  );
}

export default App;
