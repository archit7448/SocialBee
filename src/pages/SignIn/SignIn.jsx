import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";
export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const setGuestCredentials = () => {
    setEmail("ArchitSingh1064");
    setPassword("architSingh123");
  };

  return (
    <main className="flex-center">
      <div className="login-container">
        <div className="logo-app">Welcome to SocialGram</div>
        <h3 className="login-small-heading">Email</h3>
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h3 className="login-small-heading">Password</h3>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <h3 className="guest-heading" onClick={() => setGuestCredentials()}>
          login with guest credentials?
        </h3>
        <button
          className="button-primary button-login"
          onClick={() => LoginHandler({ username: email, password: password })}
        >
          Login
        </button>
        <button
          className="button-secondary button-login"
          onClick={() => navigate("/SignUp")}
        >
          New User? SignUp
        </button>
      </div>
    </main>
  );
};
