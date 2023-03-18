import { Button } from "..";
import { NavWrapper, NavList, NavItem, NavLink } from "./Nav.styled";
import cv from "../../assets/Reznichenko_Serhii.pdf";
import { BsDownload } from "react-icons/bs";

export default function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#aboutme">About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contacts">Contacts</NavLink>
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
