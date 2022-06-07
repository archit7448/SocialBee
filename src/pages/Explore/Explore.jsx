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
  console.log(posts);
  return (
    <main>
      {modal && <Modal />}
      <Sidebar />
      <div className="post-wrapper-div flex-center flex-col">
        <div className="logo-app logo-show">SocialGram</div>
        {posts.length > 0 ? (
          posts.map((data) => {
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
