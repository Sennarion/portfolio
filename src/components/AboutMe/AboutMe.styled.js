import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const Avatar = styled.div`
  width: 30%;
  border-radius: ${({ theme }) => theme.spacing(20)}
    ${({ theme }) => theme.spacing(5)};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const Accordion = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const AccordionItem = styled.div`
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.grey};
`;

export const AccordionTitle = styled.h3`
  color: ${({ theme, isOpened }) =>
    isOpened ? theme.colors.primary : theme.colors.textColor};
  transition: color ${({ theme }) => theme.animation.cubicBezier};
`;

export const AccordionIcon = styled.span`
  width: 30px;
  height: 30px;
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.primary : theme.colors.textColor};
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : 0)});
  transition: transform ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier};
`;

export const AccordionContent = styled.p`
  padding: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.grey};
  padding-top: 0;
`;
