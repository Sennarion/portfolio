import { Icons, Link } from './Social.styled';
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';

export default function Social() {
  return (
    <Icons>
      <Link href="https://www.linkedin.com/in/serhii-reznichenko/" target="_blank">
        <BsLinkedin size={30} />
      </Link>
      <Link href="https://github.com/Sennarion" target="_blank">
        <BsGithub size={30} />
      </Link>
      <Link href="https://t.me/sennarion" target="_blank">
        <BsTelegram size={30} />
      </Link>
    </Icons>
  );
}
