import {
  ListItem,
  ListItemWrapper,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  Links,
  Link,
  Image,
} from "./ProjectsItem.styled";
import { BsEyeFill, BsCodeSlash } from "react-icons/bs";
import { MdGroups2, MdPerson2 } from "react-icons/md";

export default function ProjectsItem({
  name,
  stack,
  pageLink,
  codeLink,
  img,
  isPersonal,
}) {
  return (
    <ListItem>
      <ListItemWrapper>
        <Image src={img} alt={name} />
        <ListItemContent>
          {isPersonal ? <MdPerson2 size={40} /> : <MdGroups2 size={40} />}
          <ListItemTitle>{name}</ListItemTitle>
          <ListItemDescription>{stack}</ListItemDescription>
          <Links>
            <Link href={pageLink}>
              <BsEyeFill size={30} />
            </Link>
            <Link href={codeLink}>
              <BsCodeSlash size={30} />
            </Link>
          </Links>
        </ListItemContent>
      </ListItemWrapper>
    </ListItem>
  );
}
