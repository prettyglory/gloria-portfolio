export function SectionHeading({ number, title, kicker }: { number: string; title: string; kicker?: string }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{number} / {kicker ?? "Portfolio"}</p>
        <h2>{title}</h2>
      </div>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}
