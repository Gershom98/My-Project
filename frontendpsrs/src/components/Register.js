import React from "react";

function Register(onRegister) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        confirm_password: e.target.confirm_password.value,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Registered successfully");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name" /><br />
      <input type="email" name="email" placeholder="Enter your email" /><br />
      <input type="password" name="password" placeholder="Enter password" /><br />
      <input type="password" name="confirm_password" placeholder="Confirm password" /><br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
