import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  padding-top: 80px;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

export const ListItem = styled.li`
  position: relative;
  width: calc((100% - 60px) / 4);
  height: 250px;
  background-color: #0887ff;
  border-radius: 40px 20px;
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
  opacity: 0;
  transition: opacity 0.2s linear;

  ${ListItem}:hover & {
    opacity: 1;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 40px 20px;

  background: rgb(71, 85, 234);
  background: linear-gradient(
    45deg,
    rgba(0, 208, 80, 0.8) 0%,
    rgba(228, 255, 0, 0.8) 100%
  );
`;

export const Icons = styled.div`
  display: flex;
  gap: 2px;
`;

export const Icon = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #0887ff;
  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    background-color: #93f53d;
  }

  svg {
    fill: #e4ff00;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px 20px;
`;
