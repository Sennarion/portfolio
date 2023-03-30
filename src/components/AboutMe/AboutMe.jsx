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
import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { IoLocation, IoMail } from 'react-icons/io5';
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
              <a href="tel:+380990648414">+38 099 064 84 14</a>
            </Contact>
            <Contact>
              <IoMail size={20} />
              <a href="mailto:dev.serhiireznichenko@gmail.com">dev.serhiireznichenko@gmail.com</a>
            </Contact>
            <Contact>
              <FaTelegram size={20} />
              <a href="https://t.me/sennarion" rel="noreferrer" target="_blank">
                Telegram
              </a>
            </Contact>
            <Contact>
              <FaLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/serhii-reznichenko/"
                rel="noreferrer"
                target="_blank">
                LinkedIn
              </a>
            </Contact>
            <Contact>
              <FaGithub size={20} />
              <a href="https://github.com/Sennarion" rel="noreferrer" target="_blank">
                GitHub
              </a>
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
