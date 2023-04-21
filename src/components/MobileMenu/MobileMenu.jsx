import { BsDownload } from 'react-icons/bs';
import { Container, Button, Social } from '~/components';
import { Menu, Content, LinksList, LinksItem, NavLink } from './MobileMenu.styled';
import cv from '~/assets/Serhii_Reznichenko_CV.pdf';
import { nav } from '~/data/nav';

export default function MobileMenu({ toggleMenu, isOpen }) {
  return (
    <Menu isOpen={isOpen}>
      <Container>
        <Content>
          <LinksList>
            {nav.map(({ section, path }) => (
              <LinksItem key={path}>
                <NavLink
                  to={path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={500}
                  delay={200}
                  onClick={toggleMenu}>
                  {section}
                </NavLink>
              </LinksItem>
            ))}
          </LinksList>
          <Button as="a" href={cv} download="Serhii_Reznichenko_CV">
            <BsDownload />
            My CV
          </Button>
          <Social />
        </Content>
      </Container>
    </Menu>
  );
}
