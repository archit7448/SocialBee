import { useSelector } from "react-redux";
import { FollowSidebar, Sidebar, Post } from "../../Components";
import logo from "../../assets/logo.svg";
export const Bookmark = () => {
  const { bookMark } = useSelector((store) => store.posts);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col width-100 post-wrapper-div">
        <div className="logo-app logo-show flex-row">
          SocialBee
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        {bookMark.length > 0 ? (
          bookMark.map((data) => {
            return (
              <Post prop={{ data, bookMarkState: false }} key={data._id} />
            );
          })
        ) : (
          <h1 className="text-l text-center">No Bookmarks</h1>
        )}
      </div>
      <FollowSidebar />
    </main>
  );
};
