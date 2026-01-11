import React from "react";

function Dashboard({ onReset, onLogout }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <p>Welcome! You are logged in successfully.</p>

      <button onClick={onReset}>
        Reset Password
      </button>

      <br /><br />

      <button onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
