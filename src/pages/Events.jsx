import "./Events.css";

export default function Events() {
  const events = [
    {
      title: "Creator Summit 2024",
      date: "Dec 12, 2024",
      status: "ACTIVE",
      desc: "A classified gathering of BlazeNode creators for collaboration and announcements."
    },
    {
      title: "Server Takeover Wave #3",
      date: "Jan 5, 2025",
      status: "SCHEDULED",
      desc: "BlazeNode deployment team will take over selected servers for optimization and upgrades."
    },
    {
      title: "BNS Signal Upgrade",
      date: "Feb 20, 2025",
      status: "MAINTENANCE",
      desc: "Network telemetry systems will undergo a major uplink enhancement."
    },
    {
      title: "Community Expansion Initiative",
      date: "Mar 10, 2025",
      status: "PLANNING",
      desc: "Strategic expansion of BlazeNode community channels and creator onboarding."
    }
  ];

  return (
    <div className="page events-page">
      <h1 className="page-title">BlazeNode Event Registry</h1>
      <p className="page-desc">
        Classified ONI‑style log of all upcoming and past BlazeNode operations.
      </p>

      <div className="events-grid">
        {events.map((e, i) => (
          <div key={i} className="event-card">
            <h2 className="event-title">{e.title}</h2>

            <div className="event-meta">
              <span className="event-date">{e.date}</span>
              <span className={`event-status ${e.status.toLowerCase()}`}>
                {e.status}
              </span>
            </div>

            <p className="event-desc">{e.desc}</p>

            <button className="event-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
