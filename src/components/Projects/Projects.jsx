import { Container } from "..";
import {
  Section,
  List,
  ListItem,
  ListItemWrapper,
  ListItemContent,
  IconsWrapper,
  Icons,
  Icon,
  Image,
} from "./Projects.styled";
import { BsEyeFill } from "react-icons/bs";
import { BsGit } from "react-icons/bs";
import project from "../../assets/project.png";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <List>
          <ListItem>
            <ListItemWrapper>
              <Image src={project} alt="project" />
              <ListItemContent>
                <IconsWrapper>
                  <Icons>
                    <Icon>
                      <BsEyeFill size={30} />
                    </Icon>
                    <Icon>
                      <BsGit size={30} />
                    </Icon>
                  </Icons>
                </IconsWrapper>
              </ListItemContent>
            </ListItemWrapper>
          </ListItem>
        </List>
      </Container>
    </Section>
  );
}
