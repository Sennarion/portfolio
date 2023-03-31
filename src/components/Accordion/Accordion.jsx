import { useState } from 'react';
import { Collapse } from 'react-collapse';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { qa } from '~/data/qa';
import {
  AccordionWrapper,
  AccordionItem,
  AccordionHeader,
  AccordionTitle,
  AccordionIcon,
  AccordionContent
} from './Accordion.styled';

export default function Accordion() {
  const [selected, setSelected] = useState(0);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }

    setSelected(idx);
  };

  return (
    <AccordionWrapper>
      {qa.map((item, idx) => (
        <AccordionItem key={item.question}>
          <AccordionHeader onClick={() => toggle(idx)}>
            <AccordionTitle isOpened={selected === idx}>{item.question}</AccordionTitle>
            <AccordionIcon isOpen={selected === idx}>
              <MdOutlineKeyboardArrowDown size={30} />
            </AccordionIcon>
          </AccordionHeader>
          <Collapse isOpened={selected === idx}>
            <AccordionContent>{item.answer}</AccordionContent>
          </Collapse>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}
