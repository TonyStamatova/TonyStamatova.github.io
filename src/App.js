import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Particles from "react-tsparticles";
import About from "./components/about/About.jsx";
import Logo from "./components/about/Logo.jsx";
import Projects from "./components/projects/Projects.jsx";
// import Interests from "./components/Interests.jsx";
import ContactMe from "./components/contacts/ContactMe.jsx";
import Footer from "./components/contacts/Footer.jsx";
import { particleOptions } from "./constants/Constants.jsx";

function App() {
  return (
    <HashRouter>
    <div className="App d-flex flex-column">
      <header className="App-header">
        <nav id="nav" className="d-flex justify-content-center">
            <ul className="row d-flex justify-content-center">
                <li className="col-sm"><NavLink exact to="/">About</NavLink></li>
                <li className="col-sm"><NavLink to="/projects">Projects</NavLink></li>
                {/* <li><NavLink to="/interests">Interests</NavLink></li> */}
                <li className="col-sm"><NavLink to="/contactMe">Contact Me</NavLink></li>
            </ul>
        </nav>
        <Route exact path="/" component={Logo}/>
      </header>
      <div>
        <Particles id="tsparticles" options={particleOptions} />
        <div className="content container-fluid flex-fill d-flex justify-content-center align-items-center">
          <Route exact path="/" component={About}/>
          <Route path="/projects" component={Projects}/>
          {/* <Route path="/interests" component={Interests}/> */}
          <Route path="/contactMe" component={ContactMe}/>
        </div>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
    </HashRouter>
  );
}

export default App;
