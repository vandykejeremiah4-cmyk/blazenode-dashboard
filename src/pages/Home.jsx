// src/pages/Home.jsx
import { useEffect, useState } from 'react';

function Counter({ value }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1400, start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <span className="counter-num">{n.toLocaleString()}</span>;
}

export default function Home() {
  const [stats, setStats] = useState({ servers: 1, members: 0, partners: 0 });

useEffect(() => {
 fetch("https://blazenode-backend.onrender.com/api/stats")
    .then(res => res.json())
    .then(data => setStats(data));
}, []);


  return (
    <main className="home">
      <section className="hero">
        <h1>
          Built for Gamers. Powered by Creators.{' '}
          <span className="accent">Connected Through Community.</span>
        </h1>
        <p>
          Blazenode Systems Network brings together gaming communities,
          content creators, and server operators under one premium network
          experience.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="https://discord.gg/U3pKSvVmJ3">
            Join the Discord <span aria-hidden>→</span>
          </a>
          <a className="btn btn-secondary" href="/official-servers">
            Explore Blazenode
          </a>
        </div>

        <div className="stats">
          <div className="stat"><Counter value={stats.servers} /><span>Active Servers</span></div>
          <div className="stat"><Counter value={stats.members} /><span>Community Members</span></div>
          <div className="stat"><Counter value={stats.partners} /><span>Partners</span></div>
        </div>
      </section>
    </main>
  );
}
