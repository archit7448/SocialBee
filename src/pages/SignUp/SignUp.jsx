import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.svg";
import { Loader } from "../../Utility/Loader/loader";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  updateToken,
  updateUserData,
  updateUsersData,
} from "../../reducer/userSlice";
import { notifyError, notifySuccess } from "../../Utility/Notification/toast";

export const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loader, setLoader] = useState(true);
  const fileInput = useRef();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(
    "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1656762303/logo_dvx9py.svg"
  );
  const SignUpHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/signup", params);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.createdUser));
      console.log(response.data);
      dispatch(updateUserData());
      dispatch(updateToken());
      dispatch(updateUsersData());
      navigate("/");
      notifySuccess("SignUp success");
    } catch (error) {
      console.log(error);
      notifyError("Error");
    }
  };
  const HandleImageSelected = async () => {
    const data = new FormData();
    data.append("file", fileInput.current.files[0]);
    data.append("upload_preset", "cmr8t2pi");

    try {
      setLoader(false);
      await fetch("https://api.cloudinary.com/v1_1/dqlfw4xi2/image/upload", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((json) => setProfile(() => json.url));
      setLoader(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex-center">
      <div className="login-container">
        <div className="logo-login">
          Welcome to SocialBee
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <div>
          <div className="flex-row">
            {loader ? (
              <img src={profile} className="profile-img border-1px" />
            ) : (
              <Loader />
            )}
            <label>
              <AiFillCamera className="image-tag" />
              <input
                type="file"
                ref={fileInput}
                className="display-hidden"
                onChange={() => HandleImageSelected()}
              />
            </label>
          </div>
        </div>
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
        <h3 className="login-small-heading">Username</h3>
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
              profilePic: profile,
              bio: "",
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
