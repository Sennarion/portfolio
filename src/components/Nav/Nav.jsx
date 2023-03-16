import { NavWrapper, NavList, NavItem, NavLink } from "./Nav.styled";

export default function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contacts</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}
