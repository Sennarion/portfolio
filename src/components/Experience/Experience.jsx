import {
  List,
  ListItem,
  Title,
  Description,
  Info,
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
          <Info>{company}</Info>
          <Info>{period}</Info>
          <Description>
            Responsibilities:
            <ResponsibilitiesList>
              {responsibilities.map((el) => (
                <ResponsibilitiesItem key={el}>{el}</ResponsibilitiesItem>
              ))}
            </ResponsibilitiesList>
          </Description>
          <Info>Achievement: {achievement}</Info>
        </ListItem>
      ))}
    </List>
  );
}
