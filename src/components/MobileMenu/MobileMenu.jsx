import { BsDownload } from "react-icons/bs";
import { Container, Button, Social } from "~/components";
import {
  Menu,
  Content,
  LinksList,
  LinksItem,
  StyledLink,
} from "./MobileMenu.styled";
import cv from "~/assets/Reznichenko_Serhii.pdf";

export default function MobileMenu({ toggleMenu }) {
  return (
    <Menu>
      <Container>
        <Content>
          {/* <button onClick={toggleMenu}>Close</button> */}
          <LinksList>
            <LinksItem>
              <StyledLink
                to="hero"
                smooth={true}
                offset={0}
                duration={500}
                onClick={toggleMenu}
              >
                Home
              </StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink
                to="aboutme"
                smooth={true}
                offset={0}
                duration={500}
                onClick={toggleMenu}
              >
                About me
              </StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink
                to="skills"
                smooth={true}
                offset={0}
                duration={500}
                onClick={toggleMenu}
              >
                Skills
              </StyledLink>
            </LinksItem>
            <LinksItem>
              <StyledLink
                to="projects"
                smooth={true}
                offset={0}
                duration={500}
                onClick={toggleMenu}
              >
                Projects
              </StyledLink>
            </LinksItem>
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
