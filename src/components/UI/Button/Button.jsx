import { Btn } from "./Button.styled";

export default function Button({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>;
}
