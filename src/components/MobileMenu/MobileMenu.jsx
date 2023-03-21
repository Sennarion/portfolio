import { Menu } from "./MobileMenu.styled";

export default function MobileMenu({ toggleMenu }) {
  return (
    <Menu>
      <button onClick={toggleMenu}>Close</button>
    </Menu>
  );
}
