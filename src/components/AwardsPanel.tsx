import { awards } from "@/lib/profile-data";

export default function AwardsPanel() {
  return (
    <div className="panel">
      <div className="panel-eyebrow">03 / AWARDS</div>
      <div className="awards-list">
        {awards.map((award) => (
          <div className="award" key={award.title}>
            <div className="award-year">{award.year}</div>
            <div className="award-title">{award.title}</div>
            <div className="award-org">{award.org}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
