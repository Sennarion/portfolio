import { Button } from "..";
import { NavWrapper, NavList, NavItem, NavButton } from "./Nav.styled";
import cv from "../../assets/Reznichenko_Serhii.pdf";
import { BsDownload } from "react-icons/bs";

export default function Nav({
  homeSection,
  aboutMeSection,
  projectsSection,
  contactsSection,
}) {
  const scrollTo = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavButton onClick={() => scrollTo(homeSection)}>Home</NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => scrollTo(aboutMeSection)}>
            About me
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => scrollTo(projectsSection)}>
            Projects
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={() => scrollTo(contactsSection)}>
            Contacts
          </NavButton>
        </NavItem>
        <NavItem>
          <Button as="a" href={cv} download="Serhii_Reznichenko_CV">
            <BsDownload />
            My CV
          </Button>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}
