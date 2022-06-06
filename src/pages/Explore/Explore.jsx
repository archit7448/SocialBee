import { useEffect } from "react";
import { FollowSidebar, Modal, Post, Sidebar } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../reducer/user";
import "./Explore.css";
import { getPost } from "../../reducer/post";

export const Explore = () => {
  const { posts, modal } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getPost());
  }, []);

  return (
    <main>
      {modal && <Modal />}
      <Sidebar />
      <div>
        <Post />
      </div>
      {/* <FollowSidebar /> */}
    </main>
  );
};
