import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Logo from './assets/images/Frame.png'
import FooterSection from './components/FooterSection';
import ScrollToTop from './components/ScrollToTop';
import SmoothScrollBar from './components/SmoothScrollBar';
// import Fofo from './components/Fofo';


function App() {

  useEffect(() => {
    <ScrollToTop />

  }, [])

  return (
    <>
      {/* <Fofo /> */}
      <BrowserRouter>
        <img className='myLogo' src={Logo} alt="" />
        <NavMenu />
        <SmoothScrollBar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <FooterSection />
        </SmoothScrollBar>

      </BrowserRouter>
    </>
  );
}

export default App;
