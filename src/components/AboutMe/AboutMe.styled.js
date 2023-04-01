import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Description = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 30%;
  }
`;

export const Avatar = styled.div`
  border-radius: ${({ theme }) => theme.spacing(10)} ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    border-radius: ${({ theme }) => theme.spacing(20)} ${({ theme }) => theme.spacing(5)};
  }
`;

export const Contact = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const ContactLink = styled.a`
  text-decoration: underline;
  transition: color ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Tabs = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 70%;
  }
`;

export const TabsControllers = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const TabButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.grey : 'transparent')};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: none;
  font-weight: 700;
  border-top-left-radius: ${({ theme }) => theme.spacing(2)};
  border-top-right-radius: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.white)};
  cursor: pointer;
  outline: none;
`;

export const TabsContent = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(2)};
  border-top-left-radius: 0;
  overflow: hidden;
`;
