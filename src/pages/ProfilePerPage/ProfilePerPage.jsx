import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FollowSidebar, Sidebar, Profile, Post } from "../../Components";
import { Loader } from "../../Utility/Loader/loader";

export const ProfilePerPage = () => {
  const { profileId } = useParams();
  const { users } = useSelector((store) => store.users);
  const userProp = users.find(({ username }) => username === profileId);
  const { posts } = useSelector((store) => store.posts);
  let postData = posts.filter((data) => data.username === userProp.username);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col width-100 post-wrapper-div">
        <div className="logo-app logo-show">SocialGram</div>
        {postData.length > 0 ? (
          <div>
            <Profile prop={{ userProp, postData, profilePerPage: true }} />
            {postData.length > 0 ? (
              postData.map((data) => {
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
