import { career } from "@/lib/profile-data";

export default function CareerPanel() {
  return (
    <div className="panel" style={{ flex: 1, minHeight: 0 }}>
      <div className="panel-eyebrow">02 / CAREER</div>
      <div className="career-list">
        {career.map((item) => (
          <div className="career-row" key={item.period}>
            <span className="career-period">{item.period}</span>
            <span className="career-body">
              <span className="career-role">{item.role}</span>
              <span className="career-org">{item.org}</span>
              <span className="career-note">{item.note}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
