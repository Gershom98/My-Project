import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Auth Interface</h1>
      <Register />
      <hr />
      <Login />
      <hr />
      <Logout />
    </div>
  );
}

export default App;
