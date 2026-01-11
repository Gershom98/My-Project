import React from "react";

function Register({ onSuccess }) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password_confirmation: e.target.password_confirmation.value,
      }),
    });

    if (res.ok) {
      alert("Registration successful. Please login.");
      onSuccess(); // 🔁 REDIRECT TO LOGIN
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="Enter your name" required />
      <br />

      <input name="email" type="email" placeholder="Email" required />
      <br />

      <input name="password" type="password" placeholder="Password" required />
      <br />

      <input
        name="password_confirmation"
        type="password"
        placeholder="Confirm password"
        required
      />
      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
