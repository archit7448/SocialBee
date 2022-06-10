import { useDispatch, useSelector } from "react-redux";
import { FollowSidebar, Modal, Post, Sidebar } from "../../Components";
import { ToggleModal } from "../../reducer/postSlice";

export const Home = () => {
  const { posts, modal } = useSelector((store) => store.posts);
  const { userData } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const userFilter = () => {
    return userData !== null
      ? posts.filter((postData) =>
          postData.username === userData.username
            ? postData
            : userData.following.filter(
                (following) => following.username === postData.username
              )[0]
        )
      : [];
  };
  return (
    <main>
      <Sidebar />
      {modal && <Modal />}
      <div className="post-wrapper-div flex-center flex-col">
        <div className="logo-app logo-show">SocialGram</div>
        <div
          className="post-header"
          onClick={() => dispatch(ToggleModal(true))}
        >
          <h2>What is in your mind?</h2>
          <button className="button-primary button-header-post">POST</button>
        </div>
        {userFilter().length > 0 ? (
          userFilter().map((data) => {
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
