import styled from 'styled-components';

export const AccordionWrapper = styled.div``;

export const AccordionItem = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px dotted ${({ theme }) => theme.colors.white};
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(4)};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.grey};
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
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.grey};
  padding-top: 0;
`;
