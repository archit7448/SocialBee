import { FollowSidebar, Modal, Post, Sidebar } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import "./Explore.css";
import { ToggleModal } from "../../reducer/postSlice";
import logo from "../../assets/logo.svg";
export const Explore = () => {
  const { posts, modal } = useSelector((store) => store.posts);
  const dispatch = useDispatch();
  return (
    <main>
      {modal && <Modal />}
      <Sidebar />
      <div className="post-wrapper-div flex-center flex-col">
        <div className="logo-app logo-show">SocialGram
        <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <div
          className="post-header"
          onClick={() => dispatch(ToggleModal(true))}
        >
          <h2>What is in your mind?</h2>
          <button className="button-primary button-header-post">POST</button>
        </div>
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
