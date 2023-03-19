import styled from "styled-components";

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: none;
  border: 2px solid #e4ff00;
  border-radius: 12px 4px;
  text-transform: uppercase;
  line-height: 1;
  color: #e4ff00;
  transition: box-shadow 0.2s linear, text-shadow 0.2s linear;
  cursor: pointer;

  svg {
    transition: filter 0.2s linear, text-shadow 0.2s linear;
  }

  &:hover,
  &:focus {
    text-shadow: 0px 0px 6px #e4ff00;
    -webkit-box-shadow: 0px 0px 6px 0px rgba(228, 255, 0, 1);
    -moz-box-shadow: 0px 0px 6px 0px rgba(228, 255, 0, 1);
    box-shadow: 0px 0px 6px 0px rgba(228, 255, 0, 1);

    svg {
      filter: drop-shadow(0px 0px 10px #e4ff00);
    }
  }
`;
