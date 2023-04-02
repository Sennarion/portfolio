import { Container, Social } from '~/components';
import { StyledFooter, FooterContent, Text } from './Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <Social />
          <Text>© 2023 Created by Serhii Reznichenko</Text>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
}
