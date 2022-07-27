import { useSelector } from "react-redux";
import { FollowSidebar, Sidebar, Profile, Post } from "../../components/index";
import logo from "../../assets/logo.svg";
import { reverseArrayFunc } from "../../utility/ReverseArray/reverseArray";
export const ProfilePage = () => {
  const { userData } = useSelector((store) => store.users);
  const { posts } = useSelector((store) => store.posts);
  const postData = posts.filter((data) => data.username === userData.username);
  let reverseArray = reverseArrayFunc(postData);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col post-wrapper-div">
        <div className="logo-app logo-show">
          SocialBee
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        <Profile prop={{ userProp: userData, postData }} />
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
