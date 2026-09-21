export default function BackgroundDecor() {
  return (
    <div className="bg-fixed" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />
    </div>
  );
}
