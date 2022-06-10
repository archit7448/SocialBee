import { FollowSidebar, Modal, Post, Sidebar } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import "./Explore.css";
import { ToggleModal } from "../../reducer/postSlice";
import { Loader } from "../../Utility/Loader/loader";

export const Explore = () => {
  const { posts, modal, status } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  return (
    <main>
      {modal && <Modal />}
      <Sidebar />
      <div className="post-wrapper-div flex-center flex-col">
        <div className="logo-app logo-show">SocialGram</div>
        <div
          className="post-header"
          onClick={() => dispatch(ToggleModal(true))}
        >
          <h2>What is in your mind?</h2>
          <button className="button-primary button-header-post">POST</button>
        </div>

        {status !== "fullfilled" ? (
          <Loader />
        ) : posts.length > 0 ? (
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
