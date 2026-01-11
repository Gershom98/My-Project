import React from "react";

function PasswordReset() {

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      // Send request to Laravel API
      const res = await fetch("http://127.0.0.1:8000/api/password/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value, // email from form
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Password reset link sent to your email.");
      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  // JSX returned (FORM)
  return (
    <div>
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <br /><br />

        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default PasswordReset;
