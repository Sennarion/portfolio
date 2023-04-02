import styled from 'styled-components';

export const AccordionWrapper = styled.div``;

export const AccordionItem = styled.div`
  &:not(:last-of-type) {
    border-bottom: 2px dotted ${({ theme }) => theme.colors.secondaryBlue};
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.grey};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;

export const AccordionTitle = styled.h3`
  color: ${({ theme, isOpened }) => (isOpened ? theme.colors.primary : theme.colors.textColor)};
  transition: color ${({ theme }) => theme.animation.cubicBezier};
`;

export const AccordionIcon = styled.span`
  width: 30px;
  height: 30px;
  color: ${({ theme, isOpen }) => (isOpen ? theme.colors.primary : theme.colors.textColor)};
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : 0)});
  transition: transform ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier};
`;

export const AccordionContent = styled.p`
  padding: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.grey};
  padding-top: 0;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;
