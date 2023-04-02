import { Backdrop, Spinner } from './Loader.styled';

export default function Loader({ isLoading }) {
  return (
    <Backdrop isLoading={isLoading}>
      <Spinner />
    </Backdrop>
  );
}
