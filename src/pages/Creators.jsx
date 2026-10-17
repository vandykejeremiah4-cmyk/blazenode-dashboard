import "./Creators.css";

export default function Creators() {
  const creators = [
    {
      name: "Nova",
      role: "Lead Content Creator",
      status: "VERIFIED",
      bio: "Specializes in cinematic gameplay, community events, and BlazeNode promotional media."
    },
    {
      name: "Specter",
      role: "Technical Creator",
      status: "VERIFIED",
      bio: "Known for advanced server scripting, optimization guides, and developer-focused content."
    },
    {
      name: "Vex",
      role: "Community Host",
      status: "PENDING",
      bio: "Hosts weekly community streams and manages BlazeNode creator collaborations."
    },
    {
      name: "Echo",
      role: "Media Artist",
      status: "VERIFIED",
      bio: "Creates BlazeNode-themed art, animations, and ONI-style UI assets."
    }
  ];

  return (
    <div className="page creators-page">
      <h1 className="page-title">BlazeNode Creator Registry</h1>
      <p className="page-desc">
        Classified ONI‑style personnel files for BlazeNode‑verified creators.
      </p>

      <div className="creators-grid">
        {creators.map((c, i) => (
          <div key={i} className="creator-card">
            <h2 className="creator-name">{c.name}</h2>

            <div className="creator-meta">
              <span className="creator-role">{c.role}</span>
              <span className={`creator-status ${c.status.toLowerCase()}`}>
                {c.status}
              </span>
            </div>

            <p className="creator-bio">{c.bio}</p>

            <button className="creator-btn">Open Personnel File</button>
          </div>
        ))}
      </div>
    </div>
  );
}
