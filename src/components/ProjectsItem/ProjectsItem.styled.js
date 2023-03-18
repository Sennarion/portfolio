import styled from "styled-components";

export const ListItem = styled.li`
  position: relative;
  width: calc((100% - 80px) / 3);
  height: 350px;
  text-align: center;
  color: #1f1f1f;
  -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);

  transition: background-color 0.2s linear;

  &:hover {
    background-color: #0299f7;
  }
`;

export const ListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.2s linear;

  ${ListItem}:hover & {
    transform: translate(-10px, -10px);
  }
`;

export const ListItemContent = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  opacity: 0;
  transition: opacity 0.2s linear;

  ${ListItem}:hover & {
    opacity: 1;
  }

  background: rgb(71, 85, 234);
  background: linear-gradient(
    45deg,
    rgba(0, 208, 80, 0.9) 0%,
    rgba(228, 255, 0, 0.9) 40%,
    rgba(228, 255, 0, 0.9) 100%
  );
`;

export const ListItemTitle = styled.h3`
  margin: 10px 0;
  font-size: 24px;
`;

export const ListItemDescription = styled.p`
  margin-bottom: 30px;
`;

export const Links = styled.div`
  display: flex;
  gap: 2px;
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #1f1f1f;
  transition: background-color 0.2s linear;
  border-radius: 12px 4px;

  svg {
    fill: #e4ff00;
  }

  &:hover,
  &:focus {
    background-color: #fff;

    svg {
      fill: #1f1f1f;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
