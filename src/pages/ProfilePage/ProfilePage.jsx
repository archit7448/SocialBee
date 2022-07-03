import { useSelector } from "react-redux";
import { FollowSidebar, Sidebar, Profile, Post } from "../../Components";
import logo from "../../assets/logo.svg";
export const ProfilePage = () => {
  const { userData } = useSelector((store) => store.users);
  const { posts } = useSelector((store) => store.posts);
  const postData = posts.filter((data) => data.username === userData.username);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col post-wrapper-div">
        <div className="logo-app logo-show">
          SocialGram
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <Profile prop={{ userProp: userData, postData }} />
        {postData.length > 0 ? (
          postData.map((data) => {
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
