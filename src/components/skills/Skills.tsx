import { BiLogoTypescript } from "react-icons/bi";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaLinux,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiAmazonaws,
  SiAwslambda,
  SiDocker,
  SiHelm,
  SiKubernetes,
  SiNewrelic,
  SiOpenai,
  SiPostgresql,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="container">
      <h2>Skills</h2>
      <div className="skillsSection">
        <div className="skills-grid">
          <button className="icon-container">
            <FaPython size="50px" />
            <span>Python</span>
          </button>
          <button className="icon-container">
            <SiOpenai size="50px" />
            <span>OpenAI</span>
          </button>
          <button className="icon-container">
            <FaJava size="50px" />
            <span>Java</span>
          </button>
          <button className="icon-container">
            <SiSpringboot size="50px" />
            <span>Spring Boot</span>
          </button>
          <button className="icon-container">
            <SiSpring size="50px" />
            <span>Spring</span>
          </button>
          <button className="icon-container">
            <SiDocker size="50px" />
            <span>Docker</span>
          </button>
          <button className="icon-container">
            <SiAwslambda size="50px" />
            <span>AWS Lambda</span>
          </button>
          <button className="icon-container">
            <SiAmazonaws size="50px" />
            <span>AWS</span>
          </button>
          <button className="icon-container">
            <SiPostgresql size="50px" />
            <span>PostgreSQL</span>
          </button>
          <button className="icon-container">
            <SiKubernetes size="50px" />
            <span>Kubernetes</span>
          </button>
          <button className="icon-container">
            <SiHelm size="50px" />
            <span>Helm</span>
          </button>
          <button className="icon-container">
            <FaJenkins size="50px" />
            <span>Jenkins</span>
          </button>
          <button className="icon-container">
            <SiNewrelic size="50px" />
            <span>New Relic</span>
          </button>
          <button className="icon-container">
            <FaReact size="50px" />
            <span>React</span>
          </button>
          <button className="icon-container">
            <FaNode size="50px" />
            <span>Node.js</span>
          </button>
          <button className="icon-container">
            <BiLogoTypescript size="50px" />
            <span>TypeScript</span>
          </button>
          <button className="icon-container">
            <FaGitAlt size="50px" />
            <span>Git</span>
          </button>
          <button className="icon-container">
            <FaLinux size="50px" />
            <span>Linux</span>
          </button>
          <button className="icon-container">
            <FaCss3Alt size="50px" />
            <span>CSS</span>
          </button>
          <button className="icon-container">
            <FaHtml5 size="50px" />
            <span>HTML</span>
          </button>
        </div>
        <div className="writing-skills">
            I have a passion for writing, and I've embarked on the lifelong journey of <span className="highlight">building my second brain </span>🧠.
            Currently, I document all my work thoroughly in <a href="https:/www.obsidian.md" target="_blank">Obsidian ↗</a>.<br/>
            This 3-years-long experiment has been transormative in every aspect of my work.<br/>
            I am a developer who values writing <span className="highlight">clear documentation</span>, written with the intention of being shared.
            Truth be told, code should be readable thanks to good naming.
            But all the documentation I've produced about all things around work has been a boost!
        </div>
        <a className="cv-button" href="/Margherita-Gambino_ENG-CV.pdf" download>Download my CV</a>
      </div>
    </div>
  );
};

export default Skills;
