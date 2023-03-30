import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Section, Container, Title } from '~/components';
import { qa } from '~/data/qa';
import avatar from '~/assets/avatar.jpg';
import {
  Content,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent
} from './AboutMe.styled';

export default function AboutMe() {
  const [selected, setSelected] = useState(0);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }

    setSelected(idx);
  };

  return (
    <Section id="about">
      <Container>
        <Title>About</Title>
        <Content>
          <Avatar>
            <img src={avatar} alt="avatar" width={600} />
          </Avatar>
          <Accordion>
            {qa.map((item, idx) => (
              <AccordionItem key={item.question}>
                <AccordionHeader onClick={() => toggle(idx)}>
                  <AccordionTitle isOpened={selected === idx}>{item.question}</AccordionTitle>
                  <AccordionIcon isOpen={selected === idx}>
                    <MdOutlineKeyboardArrowDown size={30} />
                  </AccordionIcon>
                </AccordionHeader>
                <Collapse isOpened={selected === idx}>
                  <AccordionContent>{item.answer}</AccordionContent>
                </Collapse>
              </AccordionItem>
            ))}
          </Accordion>
        </Content>
      </Container>
    </Section>
  );
}
