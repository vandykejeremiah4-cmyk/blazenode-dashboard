import "./ServerTakeover.css";

export default function ServerTakeover() {
  return (
    <div className="page takeover-page">
      <h1 className="page-title">BlazeNode Deployment Console</h1>
      <p className="page-desc">
        Classified ONI‑style interface for submitting servers to the BlazeNode Takeover Program.
      </p>

      <div className="takeover-grid">

        {/* REQUIREMENTS PANEL */}
        <div className="panel">
          <h2 className="panel-title">Takeover Requirements</h2>
          <ul className="req-list">
            <li>• Server must be active for at least 30 days.</li>
            <li>• Minimum 50 unique players per week.</li>
            <li>• Must comply with BlazeNode network policies.</li>
            <li>• Owner verification required.</li>
          </ul>
        </div>

        {/* SUBMISSION PANEL */}
        <div className="panel">
          <h2 className="panel-title">Submit Your Server</h2>

          <form className="takeover-form">
            <label>
              Server Name
              <input type="text" placeholder="Enter server name" />
            </label>

            <label>
              Server IP / Join Code
              <input type="text" placeholder="Enter server IP or join code" />
            </label>

            <label>
              Owner Discord
              <input type="text" placeholder="Your Discord username" />
            </label>

            <label>
              Reason for Takeover
              <textarea placeholder="Explain why your server needs BlazeNode takeover"></textarea>
            </label>

            <button className="submit-btn">Submit Request</button>
          </form>
        </div>

        {/* SCHEDULE PANEL */}
        <div className="panel">
          <h2 className="panel-title">Upcoming Takeover Schedule</h2>
          <ul className="schedule-list">
            <li>• Dec 20 — BlazeNode Prime Optimization</li>
            <li>• Jan 5 — Wave #3 Deployment</li>
            <li>• Jan 18 — Creator Server Enhancements</li>
            <li>• Feb 2 — Network Relay Expansion</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
