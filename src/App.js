import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavMenu from './components/NavMenu';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Logo from './assets/images/Frame.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <img className='myLogo' src={Logo} alt="" />
        <NavMenu />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
