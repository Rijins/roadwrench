// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import your CSS file for styling

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/admin/login", {
        email,
        password,
      });

      if (res.data === "exist") {
        history("/nav", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("Invalid username and password");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
