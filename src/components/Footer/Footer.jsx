import { Container, Social } from '~/components';
import { StyledFooter, FooterContent } from './Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Social />
          <p>© 2023 Created by Serhii Reznichenko</p>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
}
