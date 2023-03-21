import { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import {
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { Container, Title } from "~/components";
import { Content, List, ListItem, Cloud } from "./SkillsList.styled";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import { toolsList } from "~/data/tools";

const options = {
  colors: ["#e4ff00", "#0299f7", "#7621ff", "#ff2181", "#4287f5", "#b5ff21"],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "nunito",
  fontSizes: [20, 60],
  padding: 4,
  rotations: 2,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 2000,
};

export default function SkillsList() {
  const [tools, setTools] = useState(toolsList);

  useEffect(() => {
    const interval = setInterval(() => {
      setTools([...tools]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>My skills</Title>
      <Content>
        <List>
          <ListItem>
            <AiFillHtml5 size={40} />
            HTML5
          </ListItem>
          <ListItem>
            <DiCss3 size={40} />
            CSS3
          </ListItem>
          <ListItem>
            <SiJavascript size={40} />
            JavaScript
          </ListItem>
          <ListItem>
            <SiTypescript size={40} />
            TypeScript
          </ListItem>
          <ListItem>
            <DiReact size={40} />
            React
          </ListItem>
          <ListItem>
            <SiRedux size={40} />
            Redux
          </ListItem>
          <ListItem>
            <SiStyledcomponents size={40} />
            Styled Components
          </ListItem>
          <ListItem>
            <BsGit size={40} />
            GIT
          </ListItem>
          {/* <ListItem>
            <SiFigma size={40} />
            Figma
          </ListItem> */}
        </List>
        <Cloud>
          {/* I also have experience using such tools */}
          <ReactWordcloud options={options} words={tools} />
        </Cloud>
      </Content>
    </Container>
  );
}
