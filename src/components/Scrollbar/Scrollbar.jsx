import { BsMouse } from "react-icons/bs";
import { MouseContainer } from "./Scrollbar.styled";

export default function Scrollbar() {
  return (
    <MouseContainer>
      <BsMouse size={40} />
    </MouseContainer>
  );
}
