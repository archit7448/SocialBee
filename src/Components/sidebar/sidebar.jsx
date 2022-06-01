import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import "./sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-app">SocialGram</div>
      <div className="icon-wrapper-active flex-row ">
        <AiFillHome />
        <div className="icon-name">HOME</div>
      </div>
      <div className="icon-wrapper flex-row ">
        <MdExplore />
        <div className="icon-name">EXPLORE</div>
      </div>
      <div className="icon-wrapper flex-row ">
        <BsFillBookmarkFill />
        <div className="icon-name">BOOKMARK</div>
      </div>
      <div className="icon-wrapper flex-row ">
        <CgProfile />
        <div className="icon-name">PROFILE</div>
      </div>
      <div className="icon-wrapper flex-row ">
        <FiLogOut />
        <div className="icon-name">LOGOUT</div>
      </div>
      <div className="button-primary button-post flex-center">Post</div>
    </div>
  );
};
