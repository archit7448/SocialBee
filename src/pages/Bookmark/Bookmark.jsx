import { useSelector } from "react-redux";
import { FollowSidebar, Sidebar, Post } from "../../Components";

export const Bookmark = () => {
  const { bookMark } = useSelector((store) => store.posts);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col width-100 post-wrapper-div">
        <div className="logo-app logo-show">SocialGram</div>
        {bookMark.length > 0 ? (
          bookMark.map((data) => {
            return <Post prop={{ data }} key={data._id} />;
          })
        ) : (
          <h1 className="text-l text-center">No Bookmarks</h1>
        )}
      </div>
      <FollowSidebar />
    </main>
  );
};
