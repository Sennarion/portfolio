import { Button } from "..";
import { NavWrapper, NavList, NavItem, NavLink } from "./Nav.styled";
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
          <NavLink onClick={() => scrollTo(homeSection)}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollTo(aboutMeSection)}>About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollTo(projectsSection)}>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => scrollTo(contactsSection)}>Contacts</NavLink>
        </NavItem>
        <NavItem>
          <a href={cv} download="Serhii_Reznichenko_CV">
            <Button>
              <BsDownload />
              My CV
            </Button>
          </a>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}
