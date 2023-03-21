import { useState } from "react";
import { Collapse } from "react-collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Container, Title } from "~/components";
import { qa } from "~/data/qa";
import avatar from "~/assets/avatar.jpg";
import {
  Content,
  Info,
  Description,
  Avatar,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent,
} from "./AboutMe.styled";

export default function AboutMe() {
  const [selected, setSelected] = useState(0);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }

    setSelected(idx);
  };

  return (
    <Container>
      <Title>About me</Title>
      <Content>
        <Info>
          <Avatar>
            <img src={avatar} alt="avatar" width={400} />
          </Avatar>
          <Description>
            I'm a detail-oriented frontend developer with expertise in HTML,
            CSS, JavaScript, and React. I specialize in writing clean and
            efficient code and am always eager to learn new technologies and
            tackle complex challenges. I'm a fast-learner and can quickly
            integrate into a team, thereby providing value to the company and
            its customers.
          </Description>
        </Info>

        <Accordion>
          {qa.map((item, idx) => (
            <AccordionItem key={item.question}>
              <AccordionHeader onClick={() => toggle(idx)}>
                <AccordionTitle>{item.question}</AccordionTitle>
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
  );
}
