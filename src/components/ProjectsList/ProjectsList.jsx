import { Container, ProjectsItem } from "..";
import { projects } from "~/data/projects";
import { Section, List, Title } from "./ProjectsList.styled";

export default function ProjectsList() {
  return (
    <Section id="projects">
      <Container>
        <Title>My projects</Title>
        <List>
          {projects.map(
            ({ name, stack, pageLink, codeLink, img, isPersonal }) => (
              <ProjectsItem
                key={name}
                name={name}
                stack={stack}
                pageLink={pageLink}
                codeLink={codeLink}
                img={img}
                isPersonal={isPersonal}
              />
            )
          )}
        </List>
      </Container>
    </Section>
  );
}
