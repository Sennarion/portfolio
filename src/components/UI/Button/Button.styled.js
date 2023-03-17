import styled from "styled-components";

export const Btn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #e4ff00;
  border: none;
  border-radius: 12px 4px;
  color: #1f1f1f;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #93f53d;
  }

  &:disabled {
    background-color: #c4c4c4;
  }
`;
