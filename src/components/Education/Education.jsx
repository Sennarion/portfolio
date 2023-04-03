import {
  List,
  ListItem,
  LeftSide,
  RightSide,
  Title,
  Description,
  Info,
  Link
} from './Education.styled';
import { education } from '~/data/education';
import { TbCertificate } from 'react-icons/tb';

export default function Education() {
  return (
    <List>
      {education.map(({ title, period, field, certificate }) => (
        <ListItem key={field}>
          <LeftSide>
            <Title>{title}</Title>
            <Info>{period}</Info>
            <Description>{field}</Description>
          </LeftSide>
          {certificate && (
            <RightSide>
              <TbCertificate size={40} />
              <Link href={certificate} target="_blank">
                Certificate
              </Link>
            </RightSide>
          )}
        </ListItem>
      ))}
    </List>
  );
}
