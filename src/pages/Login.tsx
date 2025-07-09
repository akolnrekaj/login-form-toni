import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginContext } from "../context/LoginContext";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();

  console.log({ isLoggedIn });
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const correctEmail = "abc";
    const correctPassword = "def";

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
    //form for login
    <form onSubmit={handleLogin}>
      <input
        type="text"
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
