import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";

function App() {

  const [page, setPage] = useState("register");

  return (
    <div style={{ padding: "40px" }}>
      <h1>Job Recruitment-Portal</h1>

      {/* REGISTER */}
      {page === "register" && (
        <Register onSuccess={() => setPage("login")} />
      )}

      {/* LOGIN */}
      {page === "login" && (
        <Login onSuccess={() => setPage("dashboard")} />
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Dashboard
          onReset={() => setPage("reset")}
          onLogout={() => setPage("login")}
        />
      )}

      {/* RESET PASSWORD */}
      {page === "reset" && (
        <>
          <PasswordReset />
          <br />
          <button onClick={() => setPage("dashboard")}>
            Back to Dashboard
          </button>
        </>
      )}
    </div>
  );
}

export default App;
