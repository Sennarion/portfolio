import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(8)};
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(1)};
  text-transform: uppercase;
  line-height: ${({ theme }) => theme.lineHeight.default};
  color: ${({ theme }) => theme.colors.primary};
  transition: box-shadow ${({ theme }) => theme.animation.cubicBezier},
    text-shadow ${({ theme }) => theme.animation.cubicBezier};
  cursor: pointer;
  outline: none;

  svg {
    transition: filter ${({ theme }) => theme.animation.cubicBezier},
      text-shadow ${({ theme }) => theme.animation.cubicBezier};
  }

  &:hover,
  &:focus {
    text-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};

    svg {
      filter: drop-shadow(0px 0px 10px ${({ theme }) => theme.colors.primary});
    }
  }
`;
