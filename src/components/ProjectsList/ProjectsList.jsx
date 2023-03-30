import { Section, Container, ProjectsItem, Title } from '~/components';
import { projects } from '~/data/projects';
import { List } from './ProjectsList.styled';

export default function ProjectsList() {
  return (
    <Section id="projects">
      <Container>
        <Title>My projects</Title>
        <List>
          {projects.map(({ name, stack, pageLink, codeLink, img, isPersonal, description }) => (
            <ProjectsItem
              key={name}
              name={name}
              stack={stack}
              pageLink={pageLink}
              codeLink={codeLink}
              img={img}
              isPersonal={isPersonal}
              description={description}
            />
          ))}
        </List>
      </Container>
    </Section>
  );
}
