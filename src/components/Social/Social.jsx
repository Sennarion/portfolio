import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { Icons, Link } from "./Social.styled";

export default function Social() {
  return (
    <Icons>
      <Link
        href="https://www.linkedin.com/in/serhii-reznichenko/"
        target="_blank"
      >
        <FaLinkedin size={30} />
      </Link>
      <Link href="https://github.com/Sennarion" target="_blank">
        <FaGithub size={30} />
      </Link>
      <Link href="https://t.me/sennarion" target="_blank">
        <FaTelegram size={30} />
      </Link>
    </Icons>
  );
}
