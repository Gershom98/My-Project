import React from "react";

function Logout(onLogout) {
  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      if (res.ok) {
        localStorage.removeItem("token");
        alert("Logged out successfully");
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
