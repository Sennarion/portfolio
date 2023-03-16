import { NavWrapper, NavList, NavItem } from "./Nav.styled";

export default function Nav() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>Home</NavItem>
        <NavItem>About me</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Gallery</NavItem>
        <NavItem>Contacts</NavItem>
      </NavList>
    </NavWrapper>
  );
}
