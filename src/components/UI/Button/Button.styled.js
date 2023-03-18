import styled from "styled-components";

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  background: none;
  border: 2px solid #e4ff00;
  border-radius: 12px 4px;
  text-transform: uppercase;
  line-height: 1;
  color: #e4ff00;
  transition: background-color 0.2s linear, color 0.2s linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #e4ff00;
    color: #1f1f1f;
  }

  &:disabled {
    background-color: #c4c4c4;
  }
`;
