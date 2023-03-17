import { List, ListItem } from "./SkillsList.styled";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import {
  SiRedux,
  SiTypescript,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";

export default function SkillsList() {
  return (
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
    </List>
  );
}
