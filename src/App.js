import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav id="nav">
            <ul>
                <li><a class="active" href="index.html">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Interests</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
        </nav>
        <h1 className="logo">Antoniya Stamatova</h1>
        <hr />
        <h2 className="slogan">Software Developer</h2>
      </header>
      <main></main>
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
  );
}

export default App;
