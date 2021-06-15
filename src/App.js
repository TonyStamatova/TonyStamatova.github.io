import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./components/About.jsx";
// import Projects from "./components/Projects.jsx";
// import Interests from "./components/Interests.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Logo from "./components/Logo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
        <nav id="nav">
            <ul>
                <li><NavLink exact to="/">About</NavLink></li>
                {/* <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/interests">Interests</NavLink></li> */}
                <li><NavLink to="/contactMe">Contact Me</NavLink></li>
            </ul>
        </nav>
        <Route exact path="/" component={Logo}/>
      </header>
      <div className="content">
        <Route exact path="/" component={About}/>
        {/* <Route path="/projects" component={Projects}/>
        <Route path="/interests" component={Interests}/> */}
        <Route path="/contactMe" component={ContactMe}/>
      </div>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
    </HashRouter>
  );
}

export default App;
