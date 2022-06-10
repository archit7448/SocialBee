import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModal } from "../../reducer/postSlice";
export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="logo-app">SocialGram</div>
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
