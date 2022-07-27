import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FollowSidebar, Sidebar, Profile, Post } from "../../components/index";
import { Loader } from "../../utility/Loader/loader";
import logo from "../../assets/logo.svg";
import { reverseArrayFunc } from "../../utility/ReverseArray/reverseArray";

export const ProfilePerPage = () => {
  const { profileId } = useParams();
  const { users } = useSelector((store) => store.users);
  const userProp = users.find(({ username }) => username === profileId);
  const { posts } = useSelector((store) => store.posts);
  let postData = posts.filter((data) => data.username === userProp.username);
  let reverseArray = reverseArrayFunc(postData);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col width-100 post-wrapper-div">
        <div className="logo-app logo-show">
          SocialBee
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        {reverseArray.length > 0 ? (
          <div>
            <Profile prop={{ userProp, postData, profilePerPage: true }} />
            {reverseArray.length > 0 ? (
              reverseArray.map((data) => {
                return <Post prop={{ data }} key={data._id} />;
              })
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <FollowSidebar />
    </main>
  );
};
