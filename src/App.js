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

function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
        <nav id="nav">
            <ul>
                <li><NavLink to="/">About</NavLink></li>
                {/* <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/interests">Interests</NavLink></li> */}
                <li><NavLink to="/contactMe">Contact Me</NavLink></li>
            </ul>
        </nav>
        <h1 className="logo">Antoniya Stamatova</h1>
        <hr />
        <h2 className="slogan">Software Developer</h2>
      </header>
      <div className="content">
        <Route exact path="/" component={About}/>
        {/* <Route path="/projects" component={Projects}/>
        <Route path="/interests" component={Interests}/> */}
        <Route path="/contactMe" component={ContactMe}/>
      </div>
      <footer id="footer">
            <div class="footer-content">
                <a href="#" class="fa fa-phone"></a>
                <a href="#" class="fa fa-github"></a>
                <a href="#" class="fa fa-envelope"></a>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-skype"></a>
            </div>
      </footer>
    </div>
    </HashRouter>
  );
}

export default App;
