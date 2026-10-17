import { useEffect, useState } from "react";
import "./BNSSignal.css";

export default function BNSSignal() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setPulse(p => !p), 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page signal-page">
      <h1 className="page-title">BNS Signal Uplink</h1>
      <p className="page-desc">
        Real‑time telemetry feed for BlazeNode Systems Network.
      </p>

      {/* HEARTBEAT */}
      <div className="heartbeat">
        <div className={`pulse ${pulse ? "active" : ""}`}></div>
        <span>Network Heartbeat</span>
      </div>

      {/* GRID */}
      <div className="signal-grid">

        {/* UPLINK PANEL */}
        <div className="panel">
          <h2 className="panel-title">Uplink Status</h2>
          <ul className="signal-list">
            <li>Primary Uplink: <span className="status-online">ONLINE</span></li>
            <li>Relay Node: <span className="status-online">STABLE</span></li>
            <li>Packet Integrity: <span className="status-online">99.8%</span></li>
          </ul>
        </div>

        {/* DOWNLINK PANEL */}
        <div className="panel">
          <h2 className="panel-title">Downlink Status</h2>
          <ul className="signal-list">
            <li>Downlink Channel: <span className="status-online">ACTIVE</span></li>
            <li>Latency: <span className="latency">42ms</span></li>
            <li>Signal Strength: <span className="strength">High</span></li>
          </ul>
        </div>

        {/* TELEMETRY PANEL */}
        <div className="panel">
          <h2 className="panel-title">Telemetry Feed</h2>
          <div className="telemetry-bars">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
          </div>
        </div>

        {/* ALERT PANEL */}
        <div className="panel">
          <h2 className="panel-title">System Alerts</h2>
          <ul className="alert-list">
            <li>• No critical alerts detected.</li>
            <li>• Network load within optimal range.</li>
            <li>• Monitoring relay nodes for fluctuations.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
