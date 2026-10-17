export default function OfficialServers() {
  const servers = [
    { name: "BlazeNode Prime", status: "ONLINE", players: 128 },
    { name: "BlazeNode Alpha", status: "ONLINE", players: 64 },
    { name: "BlazeNode Echo", status: "OFFLINE", players: 0 },
    { name: "BlazeNode Phantom", status: "MAINTENANCE", players: 0 }
  ];

  return (
    <div className="page servers-page">
      <h1 className="page-title">Official BlazeNode Servers</h1>
      <p className="page-desc">
        Classified registry of all verified BlazeNode network servers.
      </p>

      <div className="servers-grid">
        {servers.map((s, i) => (
          <div key={i} className="server-card">
            <h2 className="server-name">{s.name}</h2>

            <div className="server-status">
              Status:{" "}
              <span className={`status-badge ${s.status.toLowerCase()}`}>
                {s.status}
              </span>
            </div>

            <div className="server-players">
              Players Online:{" "}
              <span className="players-count">{s.players}</span>
            </div>

            <button className="server-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
