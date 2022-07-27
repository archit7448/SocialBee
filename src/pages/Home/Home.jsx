import { useDispatch, useSelector } from "react-redux";
import { FollowSidebar, Modal, Post, Sidebar } from "../../components/index";
import { toggleModal } from "../../reducer/postSlice";
import logo from "../../assets/logo.svg";
import { reverseArrayFunc } from "../../utility/ReverseArray/reverseArray";
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
  let reverseArray = reverseArrayFunc(userFilter());
  return (
    <main>
      <Sidebar />
      {modal && <Modal />}
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
