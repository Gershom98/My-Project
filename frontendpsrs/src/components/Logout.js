import React from "react";

function Logout({ onLogout }) {

  const handleLogout = async () => {
    await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
        "Accept": "application/json",
      },
    });

    localStorage.removeItem("token");
    alert("Logged out");
    onLogout(); // 🔁 BACK TO LOGIN
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
