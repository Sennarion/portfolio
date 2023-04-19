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
import { SiUdemy } from 'react-icons/si';

export default function Education() {
  return (
    <List>
      {education.map(({ title, period, field, certificate, link }) => (
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
          {link && (
            <RightSide>
              <SiUdemy size={40} />
              <Link href={link} target="_blank">
                Materials
              </Link>
            </RightSide>
          )}
        </ListItem>
      ))}
    </List>
  );
}
