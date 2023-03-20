import styled from "styled-components";

export const Avatar = styled.div`
  width: 30%;
  border-radius: ${({ theme }) => theme.spacing(20)}
    ${({ theme }) => theme.spacing(5)};
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const Description = styled.div`
  width: 70%;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const AccordionItem = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(4)}
    ${({ theme }) => theme.spacing(2)};
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;
`;

export const AccordionTitle = styled.h3``;

export const AccordionIcon = styled.span`
  width: 30px;
  height: 30px;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : 0)});
  transition: transform ${({ theme }) => theme.animation.cubicBezier};
`;

export const AccordionContent = styled.p`
  padding: ${({ theme }) => theme.spacing(5)};
  border-top: 2px dotted ${({ theme }) => theme.colors.white};
`;
