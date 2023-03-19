import { Backdrop, Spinner } from "./Loader.styled";

export default function Loader() {
  return (
    <Backdrop>
      <Spinner />
    </Backdrop>
  );
}
