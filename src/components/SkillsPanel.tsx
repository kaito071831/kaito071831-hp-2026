import { skills } from "@/lib/profile-data";

export default function SkillsPanel() {
  return (
    <div className="panel">
      <div className="panel-eyebrow">01 / SKILLS</div>
      <div className="skills-list">
        {skills.map((group) => (
          <div className="skill-row" key={group.title}>
            <div className="skill-title">{group.title}</div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
