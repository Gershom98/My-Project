import React from "react";

function Login({onLogin}) {
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST", // ✅ lowercase
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
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
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" placeholder="Enter your email" /><br />
      <input type="password" name="password" placeholder="Enter your password" /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
