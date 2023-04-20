import { useState } from 'react';
import { Section, Container, Title, Accordion, Education, Experience } from '~/components';
import avatar from '~/assets/avatar.jpg';
import {
  Content,
  Description,
  Avatar,
  Contacts,
  Contact,
  ContactLink,
  Tabs,
  TabsControllers,
  TabButton,
  TabsContent
} from './AboutMe.styled';
import { IoMail } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';

export default function AboutMe() {
  const [selected, setSelected] = useState(0);

  return (
    <Section id="about">
      <Container>
        <Title>About me</Title>
        <Content>
          <Description>
            <Avatar>
              <img src={avatar} alt="avatar" width={600} />
            </Avatar>
            <Contacts>
              <Contact>
                <IoIosCall size={20} />
                <ContactLink href="tel:+380990648414">+38 099 064 84 14</ContactLink>
              </Contact>
              <Contact>
                <IoMail size={20} />
                <ContactLink href="mailto:dev.serhiireznichenko@gmail.com">
                  dev.serhiireznichenko@gmail.com
                </ContactLink>
              </Contact>
              <Contact>
                <BsTelegram size={20} />
                <ContactLink href="https://t.me/sennarion" rel="noreferrer" target="_blank">
                  Telegram
                </ContactLink>
              </Contact>
              <Contact>
                <BsLinkedin size={20} />
                <ContactLink
                  href="https://www.linkedin.com/in/serhii-reznichenko/"
                  rel="noreferrer"
                  target="_blank">
                  LinkedIn
                </ContactLink>
              </Contact>
              <Contact>
                <BsGithub size={20} />
                <ContactLink href="https://github.com/Sennarion" rel="noreferrer" target="_blank">
                  GitHub
                </ContactLink>
              </Contact>
            </Contacts>
          </Description>
          <Tabs>
            <TabsControllers>
              <TabButton onClick={() => setSelected(0)} isActive={selected === 0}>
                Q&A
              </TabButton>
              <TabButton onClick={() => setSelected(1)} isActive={selected === 1}>
                Education
              </TabButton>
              <TabButton onClick={() => setSelected(2)} isActive={selected === 2}>
                Work Experience
              </TabButton>
            </TabsControllers>
            <TabsContent>
              {selected === 0 && <Accordion />}
              {selected === 1 && <Education />}
              {selected === 2 && <Experience />}
            </TabsContent>
          </Tabs>
        </Content>
      </Container>
    </Section>
  );
}
