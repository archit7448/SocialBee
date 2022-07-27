import { FollowSidebar, Modal, Post, Sidebar } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import "./Explore.css";
import { toggleModal } from "../../reducer/postSlice";
import logo from "../../assets/logo.svg";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import { reverseArrayFunc } from "../../utility/ReverseArray/reverseArray";
import { useState } from "react";
export const Explore = () => {
  const { posts, modal } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState("latest");
  let reverseArray = filterState === "latest" ? reverseArrayFunc(posts) : posts;
  return (
    <main>
      {modal && <Modal />}
      <Sidebar />
      <div className="post-wrapper-div flex-center flex-col">
        <div className="logo-app logo-show">
          SocialBee
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <div
          className="post-header"
          onClick={() => dispatch(toggleModal(true))}
        >
          <h2>What is in your mind?</h2>
          <button className="button-primary button-header-post">POST</button>
        </div>
        <div className="flex-row flex-space-between filter-wrapper">
          <div onClick={() => setFilterState("oldest")} className="cursor">
            <HiOutlineSortDescending /> Oldest
          </div>
          <hr />
          <div onClick={() => setFilterState("latest")} className="cursor">
            <HiOutlineSortAscending /> Latest
          </div>
        </div>
        {reverseArray.length > 0 ? (
          reverseArray.map((data) => {
            return <Post prop={{ data }} key={data._id} />;
          })
        ) : (
          <></>
        )}
      </div>
      <FollowSidebar />
    </main>
  );
};
