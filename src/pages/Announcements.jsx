import "./Announcements.css";

export default function Announcements() {
  const announcements = [
    {
      priority: "PRIORITY ONE",
      title: "Network Patch v1.4 Deployment",
      date: "Dec 10, 2024",
      desc: "Core systems updated with improved stability, enhanced relay routing, and optimized server load balancing."
    },
    {
      priority: "PRIORITY TWO",
      title: "Creator Onboarding Wave #3",
      date: "Dec 15, 2024",
      desc: "New creators will be integrated into BlazeNode Systems with upgraded verification protocols."
    },
    {
      priority: "PRIORITY THREE",
      title: "BNS Signal Telemetry Upgrade",
      date: "Jan 2, 2025",
      desc: "Signal uplink and downlink channels will undergo a classified enhancement to improve diagnostic accuracy."
    },
    {
      priority: "GENERAL",
      title: "Community Expansion Initiative",
      date: "Jan 20, 2025",
      desc: "BlazeNode will expand community channels and partnerships to support upcoming 2025 operations."
    }
  ];

  return (
    <div className="page announcements-page">
      <h1 className="page-title">BlazeNode Broadcast Terminal</h1>
      <p className="page-desc">
        Classified ONI‑style broadcast feed containing network alerts, updates, and transmissions.
      </p>

      <div className="announcements-grid">
        {announcements.map((a, i) => (
          <div key={i} className="announcement-card">
            <div className={`priority-tag ${a.priority.toLowerCase().replace(" ", "-")}`}>
              {a.priority}
            </div>

            <h2 className="announcement-title">{a.title}</h2>

            <div className="announcement-meta">
              <span className="announcement-date">{a.date}</span>
            </div>

            <p className="announcement-desc">{a.desc}</p>

            <button className="announcement-btn">Open Transmission</button>
          </div>
        ))}
      </div>
    </div>
  );
}
