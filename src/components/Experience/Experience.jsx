import {
  List,
  ListItem,
  Title,
  Description,
  Info,
  Achievement,
  ResponsibilitiesList,
  ResponsibilitiesItem
} from './Experience.styled';
import { experience } from '~/data/experience';

export default function Experience() {
  return (
    <List>
      {experience.map(({ title, company, period, responsibilities, achievement }) => (
        <ListItem key={company}>
          <Title>{title}</Title>
          <Info>
            {company} ({period})
          </Info>
          <Description>
            <ResponsibilitiesList>
              {responsibilities.map((el) => (
                <ResponsibilitiesItem key={el}>{el}</ResponsibilitiesItem>
              ))}
            </ResponsibilitiesList>
          </Description>
          <Achievement>Achievement: {achievement}</Achievement>
        </ListItem>
      ))}
    </List>
  );
}
