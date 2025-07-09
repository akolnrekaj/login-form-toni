import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router";

const Login = () => {
  const { setIsLoggedIn } = useOutletContext<{
    setIsLoggedIn: (val: boolean) => void;
  }>();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const correctEmail = "toni@test.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
      console.log("Login successful");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid credentials");
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
