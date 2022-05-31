import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const SignUpHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/signup", params);
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex-center">
      <div className="login-container">
        <div className="logo-app">Welcome to SocialGram</div>
        <h3 className="login-small-heading">Name Details</h3>
        <div className="name-details-container">
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <h3 className="login-small-heading">Email</h3>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <h3 className="login-small-heading">Password</h3>
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="button-primary button-login"
          onClick={() =>
            SignUpHandler({
              firstName: firstName,
              lastName: lastName,
              username: username,
              password: password,
            })
          }
        >
          SignUp
        </button>
        <button
          className="button-secondary button-login"
          onClick={() => navigate("/")}
        >
          Already User?login
        </button>
      </div>
    </main>
  );
};
