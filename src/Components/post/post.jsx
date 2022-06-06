import { useSelector } from "react-redux";
import "./post.css";
import { TextImageEdit } from "../TextImageEdit/textImageEdit";
export const Post = () => {
  const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users);

  const FindUser = (usernameFind) => {
    const find = users.find(({ username }) => username === usernameFind);
    return find;
  };

  return posts.length > 0 ? (
    posts.map((data) => {
      const { content, postImage, _id, username } = data;
      const { firstName, lastName, profilePic } = FindUser(username);
      return (
        <div key={_id} className="post-wrapper">
          <div className="flex-row">
            <img src={profilePic} className="profile-post-pic" />
            <div className="flex-row flex-center post-profile">
              <h1>{`${firstName} ${lastName}`}</h1>
              <h3>{`@${username}`}</h3>
            </div>
          </div>
          <TextImageEdit
            prop={{
              textData: content,
              imagesData: postImage,
              disabledState: true,
            }}
          />
        </div>
      );
    })
  ) : (
    <></>
  );
};
