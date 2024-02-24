import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2>Projects</h2>
      <div className="projectsSection">
        <div className="projects-grid">
          <div className="project-container">
            <div className="project-container">
              <h3>ScopusAI 🔍</h3>
              <p>
                In Elsevier, I am currently working on{" "}
                <a
                  href="https://www.elsevier.com/products/scopus/scopus-ai"
                  target="_blank"
                >
                  ScopusAI ↗
                </a>
                , a project that aims to make scientific literature more
                accessible to everyone. As part of this team, I empowering
                researchers leveraging the power of Large Language Models to
                navigate the intricate world of Academic publications.
                <br />I am beyond excited to be part of this project, and I am
                learning a lot about the world of NLP and LLMs, and real-time
                data streaming and processing.
              </p>
            </div>
            <h3>Parseltongue 🐍</h3>
            <p>
              In my personal time I am working on Parseltongue 🐍, a project
              that aims to give a voice to my collection of personal notes in
              Obsidian, my very own second brain 🧠.
              <br />
              Parseltongue is an LLM-powered search engine for my notes, which I
              aim to make as secure and as configurable as I desire. I create
              embeddings of my notes with ChromaDB, and I am building a simple
              obsidian plugin interface to search and display the results. I am
              planning to open source the code, if it's helpful to anyone. There
              is already a lot of good work out there, but somehow we all think
              different. I'm sure there is plenty of room for improvement, so if
              you find the project interesting, your feedback is more than
              welcome.
            </p>
          </div>
          <div className="project-container">
            <h3>My second brain 🧠</h3>
            <p>
              I have embarked on the lifelong journey of building my second brain 🧠.<br/>
              I am trying to document all my knowledge and thoughts, in a way that is accessible and useful to me and also to others. I am using Obsidian, a tool that has been transformative in every aspect of my work.<br/>
              I share my notes in the form of a digital garden 🌱, and I am planning to write a series of articles about my experience with it.

            </p>
          </div>
          <div className="project-container">
            <h3>Physics simulations 🧿</h3>
            <p>
              My passion for Physics has never faded, and I am always looking for ways to keep it alive. I am currently studying and having fun with projects like Lenia and Wave function collapse algorithms, which fascinate me beyond marvel.
            </p>
          </div>
          <div className="project-container">
            <h3>Scripting 💻</h3>
            <p>
              The best developer is the lazy one. I am always looking for ways to automate my work, and I am currently working on a series of scripts to automate my daily tasks. I am also working on a series of scripts to automate the creation of my digital garden 🌱.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
