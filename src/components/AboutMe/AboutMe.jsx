import { useState } from "react";
import { Collapse } from "react-collapse";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Container, Title } from "~/components";
import { qa } from "~/data/qa";
import avatar from "~/assets/avatar.jpg";
import {
  Content,
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
  const [selected, setSelected] = useState(null);

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
        <Avatar>
          <img src={avatar} alt="avatar" width={400} />
        </Avatar>
        <Description>
          My name is Serhii Reznichenko and I am a front end developer. I've
          been interested in computers and technology since childhood, but I
          didn't listen to my inner voice and, unfortunately, chose another
          direction of education. I tried myself in different fields of work and
          realized that I want to work in IT. I began my studies at the Hillel
          IT School but the war ruined my plans and I took a break from
          studying. Last year I won a state grant in the IT Generation program
          and continued my studies at the GoIT school, where I gained good
          knowledge and skills in HTML, CSS, JavaScript and ReactJS. I have
          successfully completed my studies and now I am starting my career in
          IT.
        </Description>
      </Content>
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
    </Container>
  );
}
