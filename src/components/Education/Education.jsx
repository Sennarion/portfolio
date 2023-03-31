import { List, ListItem, Title, Description, Info, Link } from './Education.styled';
import { education } from '~/data/education';

export default function Education() {
  return (
    <List>
      {education.map(({ title, period, field, certificate }) => (
        <ListItem key={field}>
          <Title>{title}</Title>
          <Info>{period}</Info>
          <Description>{field}</Description>
          {certificate && <Link href={certificate}>Certificate link</Link>}
        </ListItem>
      ))}
    </List>
  );
}
