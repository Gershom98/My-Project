import React from "react";

function Login({ onSuccess }) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      onSuccess(); // 🔁 REDIRECT TO RESET
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <input name="email" type="email" placeholder="Email" required />
      <br />

      <input name="password" type="password" placeholder="Password" required />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
