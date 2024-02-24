import React, { useState, useEffect } from "react";
import "./Terminal.css";

type Output = {
  text: React.ReactNode;
  className?: string;
};

const Terminal = () => {
  const initialOutput = [
    {
      text: `𝕎elcome to my portfolio! 🚀
  Type "help" for available commands.`,
    },
  ];
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<Output[]>(initialOutput);
  const [history, setHistory] = useState<string[]>([]);
  const outputEndRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (outputEndRef.current) {
      outputEndRef.current.scrollTop = outputEndRef.current.scrollHeight;
    }
  }, [output]);

  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (input) {
        setHistory([...history, input]);
        processCommand(input.trim().toLowerCase());
        setInput("");
      }
    } else if (event.key === "ArrowUp") {
      history.length > 0 && setInput(history[history.length - 1]);
    }
  };

  const translateAscii = (ascii: TemplateStringsArray) => {
    return (
      <div className="ascii">
        {ascii.raw[0]
          .replace(/^\n/, "")
          .split("\n")
          .map((line) => {
            return line.replace(/ /g, "\u00A0");
          })
          .join("\n")}
      </div>
    );
  };

  const processCommand = (command: string) => {
    let newOutput;
    switch (command) {
      case "hi":
      case "hello":
        newOutput = `Hello there! 🌍
        Looking for something? Type "help" for available commands.`;
        break;
      case "ping":
        newOutput = "Pong! 🏓";
        break;
      case "info":
      case "about":
        newOutput = (
          <div>
            {translateAscii`
    ___  _                 _                     _____
   / _ \| |               | |                  /      \\@   ⌠   ⚛️  📚  
  / /_\ \ |__   ___  _   _| |_                 | • ◡ • |\   ⌡ 🧮  🧩  📖
  |  _  | '_ \ / _ \| | | | __|              ┌─────────┐\\     
  | | | | |_) | (_) | |_| | |_               |    O    |_
  \_| |_/_.__/ \___/ \__,_|\__|              |_________|/`}
            <br />
            I'm a <span className="highlight">software developer</span> who
            loves to create things with code.
            <br />
            I have a passion for learning and I'm always looking for new
            challenges.
            <br />
            Check the <a href="#about">about section</a> and the <a href="skills">skills section</a> below to know more
            about me and what I know!
          </div>
        );
        break;
      case "work":
      case "projects":
        newOutput = `Currently, I'm working on ScopusAI, a project that aims to make scientific literature more accessible to everyone.
        On my free time, I'm working on Parseltongue 🐍 and I am the curator of a small digital garden 🌱.`;
        break;
      case "contacts":
      case "contact":
        newOutput = (
          <div>
            You can find me on:
            <br />- GitHub:{" "}
            <a href="https://github.com/marguels" target="_blank">
              marguels ↗
            </a>
            <br />- LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/margherita-gambino/"
              target="_blank"
            >
              margherita-gambino ↗
            </a>
            <br />- LeetCode:{" "}
            <a href="https://leetcode.com/Themargue/" target="_blank">
              Themargue ↗
            </a>
            <br />
          </div>
        );
        break;
      case "command":
      case "commands":
      case "help":
        newOutput = (
          <div>
            Available commands:
            <br />- <span className="highlight">about/info</span>: shows
            information about me
            <br />- <span className="highlight">work/projects</span>: shows
            information about my work and projects
            <br />- <span className="highlight">contacts</span>: shows my
            contact information
            <br />- <span className="highlight">help/commands</span>: shows this
            help message
            <br />- <span className="highlight">clear</span>: clears the
            terminal, when things get messy
          </div>
        );
        break;
      case "clear":
        newOutput = "clear";
        break;
      default:
        newOutput = 'Command not found. Type "help" for available commands.';
    }
    newOutput === "clear"
      ? setOutput(initialOutput)
      : setOutput([
          ...output,
          {
            text: `> ${
              [
                "work",
                "projects",
                "contacts",
                "contact",
                "info",
                "about",
              ].includes(command)
                ? `margherita.${command}`
                : command
            }`,
            className: "command",
          },
          { text: newOutput },
        ]);
  };

  return (
    <div className="terminal">
      <div className="output" ref={outputEndRef}>
        {output.map((line, index) => (
          <div key={index} className={line.className}>
            {typeof line.text === "string"
              ? line.text.split("\n").map((text, i) => (
                  <React.Fragment key={i}>
                    {text}
                    <br />
                  </React.Fragment>
                ))
              : line.text}
          </div>
        ))}
      </div>
      <input
        className="terminal-input"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
        onKeyDown={handleInput}
        placeholder="Type your command..."
      />
    </div>
  );
};

export default Terminal;
