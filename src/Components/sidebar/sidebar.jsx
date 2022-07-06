import {
  AiFillHome,
  MdExplore,
  BsFillBookmarkFill,
  CgProfile,
  FiLogOut,
} from "../indexIcon";
import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToggleModal } from "../../reducer/postSlice";
import logo from "../../assets/logo.svg";
import { notifySuccess } from "../../Utility/Notification/toast";
export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    notifySuccess("LogOut Sucessfully");
  };
  return (
    <div className="sidebar">
      <div className="logo-app flex-row">
        SocialBee
        <img src={logo} alt="logo" className="logo-size"></img>
      </div>
      <NavLink
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
        to="/home"
      >
        <AiFillHome />
        <div className="icon-name">HOME</div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
        to="/"
      >
        <MdExplore />
        <div className="icon-name">EXPLORE</div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
        to="/bookmark"
      >
        <BsFillBookmarkFill />
        <div className="icon-name">BOOKMARK</div>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "icon-wrapper-active flex-row" : "icon-wrapper flex-row"
        }
        to="/profile"
      >
        <CgProfile />
        <div className="icon-name">PROFILE</div>
      </NavLink>
      <div className="icon-wrapper flex-row" onClick={() => LogOutHandler()}>
        <FiLogOut />
        <div className="icon-name">LOGOUT</div>
      </div>
      <div
        className="button-primary button-post flex-center"
        onClick={() => dispatch(ToggleModal(true))}
      >
        Post
      </div>
    </div>
  );
};
