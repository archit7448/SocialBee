import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateToken, updateUserData } from "../../reducer/userSlice";
import logo from "../../assets/logo.svg";
import { notifyError, notifySuccess } from "../../Utility/Notification/toast";
export const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      dispatch(updateUserData());
      dispatch(updateToken());
      navigate("/");
      notifySuccess("Login success");
    } catch (error) {
      console.log(error);
      notifyError("Error");
    }
  };
  const setGuestCredentials = () => {
    setEmail("Archit_");
    setPassword("architSingh123");
  };

  return (
    <main className="flex-center">
      <div className="login-container">
        <div className="logo-login">
          Welcome to SocialBee{" "}
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <h3 className="login-small-heading">Username</h3>
        <input
          type="text"
          value={email}
          placeholder="Enter Username"
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
