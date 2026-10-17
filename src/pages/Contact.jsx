import "./Contact.css";

export default function Contact() {
  return (
    <div className="page contact-page">
      <h1 className="page-title">BlazeNode Communication Terminal</h1>
      <p className="page-desc">
        Classified ONI‑style interface for direct communication with BlazeNode Command.
      </p>

      <div className="contact-grid">

        {/* DIRECT CHANNELS */}
        <div className="panel">
          <h2 className="panel-title">Direct Channels</h2>
          <ul className="channel-list">
            <li>
              <strong>Discord HQ:</strong>
              <span>discord.gg/U3pKSvVmJ3</span>
            </li>
            <li>
              <strong>Support Email:</strong>
              <span>support@blazenode.net</span>
            </li>
            <li>
              <strong>Partnerships:</strong>
              <span>partners@blazenode.net</span>
            </li>
            <li>
              <strong>Creator Relations:</strong>
              <span>creators@blazenode.net</span>
            </li>
          </ul>
        </div>

        {/* TRANSMISSION FORM */}
        <div className="panel">
          <h2 className="panel-title">Send a Transmission</h2>

          <form className="contact-form">
            <label>
              Your Name
              <input type="text" placeholder="Enter your name" />
            </label>

            <label>
              Your Email
              <input type="email" placeholder="Enter your email" />
            </label>

            <label>
              Transmission Type
              <select>
                <option>General Inquiry</option>
                <option>Support Request</option>
                <option>Partnership Inquiry</option>
                <option>Creator Application</option>
              </select>
            </label>

            <label>
              Message
              <textarea placeholder="Enter your message"></textarea>
            </label>

            <button className="submit-btn">Send Transmission</button>
          </form>
        </div>

        {/* SIGNAL STATUS */}
        <div className="panel">
          <h2 className="panel-title">Signal Status</h2>
          <ul className="signal-list">
            <li>Communication Uplink: <span className="status-online">ONLINE</span></li>
            <li>Message Queue: <span className="queue-level">Moderate</span></li>
            <li>Estimated Response: <span className="eta">4–6 hours</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
