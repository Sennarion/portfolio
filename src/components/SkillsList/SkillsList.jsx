import { Section, Container, Title } from '~/components';
import {
  Content,
  List,
  ListItem,
  SkillName,
  AbilitiesList,
  AbilitiesItem
} from './SkillsList.styled';
import { skills } from '~/data/skills';

export default function SkillsList() {
  return (
    <Section id="skills">
      <Container>
        <Title>My skills</Title>
        <Content>
          <List>
            {skills.map(({ title, icon: Icon, abilities }) => (
              <ListItem key={title}>
                <SkillName>
                  <Icon size={40} />
                  {title}
                </SkillName>
                <AbilitiesList>
                  {abilities.map((ability) => (
                    <AbilitiesItem key={ability}>{ability}</AbilitiesItem>
                  ))}
                </AbilitiesList>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    </Section>
  );
}
