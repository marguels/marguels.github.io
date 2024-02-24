import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div id="contact" className="container">
      <h2>Contacts</h2>
      <div className="contacts-section">
        <a className="contact-icon" href="mailto:marguels.dev@gmail.com">
          <FaEnvelope size="40px" />
            <span className="contact-text">Email</span>
        </a>
        <a
          className="contact-icon"
          href="https://www.github.com/marguels"
          target="_blank"
        >
          <FaGithub size="40px" />
            <span className="contact-text">GitHub</span>
        </a>
        <a
          className="contact-icon"
          href="https://www.linkedin.com/margherita-gambino"
          target="_blank"
        >
          <FaLinkedin size="40px" />
          <span className="contact-text">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
