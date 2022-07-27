import { useSelector } from "react-redux";
import { FollowSidebar, Sidebar, Post } from "../../components/index";
import logo from "../../assets/logo.svg";
import { reverseArrayFunc } from "../../utility/ReverseArray/reverseArray";
export const Bookmark = () => {
  const { bookMark } = useSelector((store) => store.posts);
  let reverseArray = reverseArrayFunc(bookMark);
  return (
    <main>
      <Sidebar />
      <div className="flex-center flex-col width-100 post-wrapper-div">
        <div className="logo-app logo-show flex-row">
          SocialBee
          <img src={logo} alt="logo" className="logo-size"></img>
        </div>
        {reverseArray.length > 0 ? (
          reverseArray.map((data) => {
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
