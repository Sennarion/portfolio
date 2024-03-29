import { BsDownload } from 'react-icons/bs';
import { Button } from '~/components';
import cv from '~/assets/Serhii_Reznichenko_CV.pdf';
import { nav } from '~/data/nav';
import { NavWrapper, NavList, NavItem, NavLink } from './Nav.styled';

export default function Nav() {
  return (
    <NavWrapper>
      <NavList>
        {nav.map(({ section, path }) => (
          <NavItem key={path}>
            <NavLink to={path} activeClass="active" spy={true} smooth={true} duration={500}>
              {section}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
      <Button as="a" href={cv} download="Serhii_Reznichenko_CV">
        <BsDownload />
        My CV
      </Button>
    </NavWrapper>
  );
}
