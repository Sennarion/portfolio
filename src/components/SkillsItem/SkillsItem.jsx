import { Skill, SkillName, AbilitiesList, AbilitiesItem } from './SkillsItem.styled';

export default function SkillsItem({ title, icon: Icon, abilities }) {
  return (
    <Skill key={title}>
      <SkillName>
        <Icon size={40} />
        {title}
      </SkillName>
      <AbilitiesList>
        {abilities.map((ability) => (
          <AbilitiesItem key={ability}>{ability}</AbilitiesItem>
        ))}
      </AbilitiesList>
    </Skill>
  );
}
