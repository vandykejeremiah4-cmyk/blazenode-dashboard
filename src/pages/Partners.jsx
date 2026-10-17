import "./Partners.css";

export default function Partners() {
  const partners = [
    {
      name: "HyperGrid Studios",
      type: "Development Partner",
      status: "ACTIVE",
      desc: "Provides advanced server infrastructure, optimization tools, and cross‑network support."
    },
    {
      name: "Vanta Media Group",
      type: "Media Partner",
      status: "ACTIVE",
      desc: "Specializes in BlazeNode promotional content, cinematic trailers, and creator branding."
    },
    {
      name: "EchoWorks Interactive",
      type: "Creative Partner",
      status: "PENDING",
      desc: "Collaborates on UI/UX design, ONI‑style interfaces, and immersive community experiences."
    },
    {
      name: "NovaTech Systems",
      type: "Technical Partner",
      status: "INACTIVE",
      desc: "Previously assisted with network diagnostics and relay node deployment."
    }
  ];

  return (
    <div className="page partners-page">
      <h1 className="page-title">BlazeNode Alliance Directory</h1>
      <p className="page-desc">
        Classified ONI‑style registry of official BlazeNode partners and affiliates.
      </p>

      <div className="partners-grid">
        {partners.map((p, i) => (
          <div key={i} className="partner-card">
            <h2 className="partner-name">{p.name}</h2>

            <div className="partner-meta">
              <span className="partner-type">{p.type}</span>
              <span className={`partner-status ${p.status.toLowerCase()}`}>
                {p.status}
              </span>
            </div>

            <p className="partner-desc">{p.desc}</p>

            <button className="partner-btn">Open Alliance File</button>
          </div>
        ))}
      </div>
    </div>
  );
}
