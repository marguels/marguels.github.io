import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Terminal from "./components/terminal/Terminal";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <body>
      <nav>
        <ul className="navBar">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="hero">
          <h1>Hello world,<br/> I'm <span className="name">Margherita</span></h1>
          <p>
            I love to create things with code.
            <br />I love physics, math and all sorts of logic puzzles to crack.
          </p>
        </div>
        <Terminal />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <footer>
        <p>
          Built by Margherita Gambino with <img src={reactLogo} alt="React Logo" className="logo"/> and{" "}
          <img src={viteLogo} alt="Vite Logo" className="logo"/>.
        </p>
      </footer>
    </body>
  );
}

export default App;
