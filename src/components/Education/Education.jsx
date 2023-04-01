import { List, ListItem, Title, Description, Info, LinkWrapper, Link } from './Education.styled';
import { education } from '~/data/education';
import { TbCertificate } from 'react-icons/tb';

export default function Education() {
  return (
    <List>
      {education.map(({ title, period, field, certificate }) => (
        <ListItem key={field}>
          <Title>{title}</Title>
          <Info>{period}</Info>
          <Description>{field}</Description>
          {certificate && (
            <LinkWrapper>
              <TbCertificate size={20} />
              <Link href={certificate} target="_blank">
                View Certificate
              </Link>
            </LinkWrapper>
          )}
        </ListItem>
      ))}
    </List>
  );
}
