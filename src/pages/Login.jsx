import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // Replace with a real call to your backend
    if (password === "REPLACE_ME") {
      localStorage.setItem("blazenode_token", "demo-token");
      navigate("/");
    } else {
      setError("Incorrect password.");
    }
  };

  return (
    <main className="login">
      <form onSubmit={submit}>
        <h1>Staff Access</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign in</button>
        {error && <p className="error">{error}</p>}
      </form>
    </main>
  );
}
