import { Button } from "..";
import { NavWrapper, NavList, NavItem, NavButton } from "./Nav.styled";
import cv from "../../assets/Reznichenko_Serhii.pdf";
import { BsDownload } from "react-icons/bs";

export default function Nav({
  scrollTo,
  homeSection,
  aboutMeSection,
  projectsSection,
  skillsSection,
}) {
  const onBtnClick = (e, target) => {
    scrollTo(target);
    e.target.blur();
  };

  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavButton onClick={(e) => onBtnClick(e, homeSection)}>
            Home
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={(e) => onBtnClick(e, aboutMeSection)}>
            About me
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={(e) => onBtnClick(e, skillsSection)}>
            Skills
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton onClick={(e) => onBtnClick(e, projectsSection)}>
            Projects
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
