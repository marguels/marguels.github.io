import React from "react";

export const translateAscii = (ascii: TemplateStringsArray) => {
    return (
      <div className="ascii">
        {ascii.raw[0]
          .replace(/^\n/, "")
          .split("\n")
          .map((line, index) => {
            return <React.Fragment key={index}>{line.replace(/ /g, "\u00A0")}<br/></React.Fragment>;
          })}
      </div>
    );
  };