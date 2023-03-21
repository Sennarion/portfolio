import { BsDownload } from "react-icons/bs";
import { Button } from "~/components";
import cv from "~/assets/Reznichenko_Serhii.pdf";
import { NavWrapper, NavList, NavItem } from "./Nav.styled";

export default function Nav({
  scrollTo,
  homeSection,
  aboutMeSection,
  projectsSection,
  skillsSection,
}) {
  return (
    <NavWrapper>
      <NavList>
        <NavItem onClick={() => scrollTo(homeSection)}>Home</NavItem>
        <NavItem onClick={() => scrollTo(aboutMeSection)}>About me</NavItem>
        <NavItem onClick={() => scrollTo(skillsSection)}>Skills</NavItem>
        <NavItem onClick={() => scrollTo(projectsSection)}>Projects</NavItem>
      </NavList>
      <Button as="a" href={cv} download="Serhii_Reznichenko_CV">
        <BsDownload />
        My CV
      </Button>
    </NavWrapper>
  );
}
