import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="/blazenode-full.png"
        alt="BlazeNode Full Logo"
        className="sidebar-logo"
      />

      <h2>BlazeNode</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/official-servers">Official Servers</Link>
        <Link to="/events">Events</Link>
        <Link to="/server-takeover">Server Takeover</Link>
        <Link to="/creators">Creators</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/announcements">Announcements</Link>
        <Link to="/bns-signal">BNS Signal</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/support">Support</Link>
      </nav>
    </div>
  );
}
