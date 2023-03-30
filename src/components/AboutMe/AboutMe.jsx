import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Section, Container, Title } from '~/components';
import { qa } from '~/data/qa';
import avatar from '~/assets/avatar.jpg';
import {
  Content,
  Description,
  Avatar,
  Contact,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent
} from './AboutMe.styled';

import { IoLocation } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';

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
          <Description>
            <Avatar>
              <img src={avatar} alt="avatar" width={600} />
            </Avatar>
            <Contact>
              <IoLocation size={20} />
              Voznesensk (ready to relocate)
            </Contact>
            <Contact>
              <IoIosCall size={20} />
              +38 099 064 84 14
            </Contact>
          </Description>
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
