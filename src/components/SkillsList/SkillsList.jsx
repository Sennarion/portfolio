import { Section, Container, Title, SkillsItem } from '~/components';
import { Content, List } from './SkillsList.styled';
import { skills } from '~/data/skills';

export default function SkillsList() {
  return (
    <Section id="skills">
      <Container>
        <Title>My skills</Title>
        <Content>
          <List>
            {skills.map(({ title, icon, abilities }) => (
              <SkillsItem key={title} title={title} icon={icon} abilities={abilities}></SkillsItem>
            ))}
          </List>
        </Content>
      </Container>
    </Section>
  );
}
