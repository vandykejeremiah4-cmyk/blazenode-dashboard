import "./Support.css";

export default function Support() {
  return (
    <div className="page support-page">
      <h1 className="page-title">BlazeNode Support Terminal</h1>
      <p className="page-desc">
        Classified ONI‑style interface for troubleshooting, FAQs, and support ticket submission.
      </p>

      <div className="support-grid">

        {/* FAQ PANEL */}
        <div className="panel">
          <h2 className="panel-title">Frequently Asked Questions</h2>
          <ul className="faq-list">
            <li>
              <strong>How do I join BlazeNode?</strong>
              <p>Join the Discord and follow onboarding instructions.</p>
            </li>
            <li>
              <strong>How do I submit my server?</strong>
              <p>Use the Server Takeover console to submit your server for review.</p>
            </li>
            <li>
              <strong>How do I become a creator?</strong>
              <p>Apply through the Creator Registry once applications open.</p>
            </li>
            <li>
              <strong>Where can I report issues?</strong>
              <p>Use the support ticket form below.</p>
            </li>
          </ul>
        </div>

        {/* SUPPORT FORM PANEL */}
        <div className="panel">
          <h2 className="panel-title">Submit a Support Ticket</h2>

          <form className="support-form">
            <label>
              Your Name
              <input type="text" placeholder="Enter your name" />
            </label>

            <label>
              Discord Username
              <input type="text" placeholder="Your Discord tag" />
            </label>

            <label>
              Issue Category
              <select>
                <option>General Issue</option>
                <option>Server Problem</option>
                <option>Creator Support</option>
                <option>Partnership Inquiry</option>
              </select>
            </label>

            <label>
              Describe Your Issue
              <textarea placeholder="Provide details about your issue"></textarea>
            </label>

            <button className="submit-btn">Send Ticket</button>
          </form>
        </div>

        {/* SYSTEM STATUS PANEL */}
        <div className="panel">
          <h2 className="panel-title">System Status</h2>
          <ul className="status-list">
            <li>Support Uplink: <span className="status-online">ONLINE</span></li>
            <li>Ticket Queue: <span className="queue-level">Low</span></li>
            <li>Response ETA: <span className="eta">2–4 hours</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
