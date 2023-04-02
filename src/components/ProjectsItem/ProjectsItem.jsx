import { BsEyeFill, BsCodeSlash } from 'react-icons/bs';
import { MdGroups2, MdPerson2 } from 'react-icons/md';
import {
  ListItem,
  ListItemHeader,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemStack,
  Links,
  Link,
  ImageWrapper,
  Image
} from './ProjectsItem.styled';

export default function ProjectsItem({
  name,
  stack,
  pageLink,
  codeLink,
  img,
  isPersonal,
  description
}) {
  return (
    <ListItem>
      <ImageWrapper>
        <Image src={img} alt={name} />
      </ImageWrapper>
      <ListItemContent>
        <ListItemHeader>
          <ListItemTitle>{name}</ListItemTitle>
          {isPersonal ? <MdPerson2 size={40} /> : <MdGroups2 size={40} />}
        </ListItemHeader>
        <ListItemStack>{stack.join(' - ')}</ListItemStack>
        <ListItemDescription>{description}</ListItemDescription>
        <Links>
          <Link href={pageLink} target="_blank">
            <BsEyeFill size={20} />
          </Link>
          <Link href={codeLink} target="_blank">
            <BsCodeSlash size={20} />
          </Link>
        </Links>
      </ListItemContent>
    </ListItem>
  );
}
