import './About.css'

const About = () => {

    return (
    <div id="about" className='container'>
        <h2>About me</h2>
        <div className="aboutSection">
            <img src="/pixel-me.png" className='propic'/>
        <p>
            I'm a software developer with a passion for creating things with code.<br />
            👩🏻‍💻 Currently, I live in Amsterdam and I work as a Backend Engineer at{" "}
          <a href={"https://www.elsevier.com"} target='_blank'>Elsevier ↗</a>,
          on the <span className='highlight'>ScopusAI</span> project, empowering
          researchers leveraging the power of Large Language Models to navigate
          the intricate world of Academic publications.
          I have been working with the <a href={"https://www.scopus.com"} target='_blank'>Scopus.com ↗</a> team for over 4 years
          as a Back end developer, embarking in the journey of migrating a 15
          years old Monolithic application, designing and building awesome micro services
          and entire full-stack features.
          <br />
          <br />
          🤖 I spend my free time working on a lot of different projects.
          Studying, building and creating is what keeps that light in me. I like
          to level up my programming skills and tie them all together, using
          coding as a medium to convey my thoughts and creative ideas.
          <br />
          <br />
          🌌 I have a background in Theoretical Physics (M.Sc.), with a research
          thesis in Cosmology investigating the Quantum fluctuations caused by
          Inflation in the early universe. It's a fascinating world sitting in
          the intersection between the big philosophical questions around the
          interpretation of Quantum Mechanics, General Relativity and of course
          some incomprehensible non-equilibrium mathematical models.
        </p>
        </div>
    </div>)
}

export default About