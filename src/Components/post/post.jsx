import { useDispatch, useSelector } from "react-redux";
import "./post.css";
import { TextImageEdit } from "../TextImageEdit/textImageEdit";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState } from "react";
import { ToggleDisable } from "../../reducer/postSlice";
import { AiOutlineClose } from "react-icons/ai";
import { deletePost } from "../../reducer/post";
import { useNavigate } from "react-router-dom";
export const Post = ({ prop }) => {
  const { data } = prop;
  const dispatch = useDispatch();
  const { users, userData } = useSelector((store) => store.users);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const checkUser = (username) => {
    return userData !== null && userData.username == username ? true : false;
  };

  const FindUser = (usernameFind) => {
    const find = users.find(({ username }) => username === usernameFind);
    return find;
  };

  const { content, postImage, _id, username, likes, disabledState, comments } =
    data;
  const { firstName, lastName, profilePic } = FindUser(username);
  const { likeCount } = likes;
  const EditHandler = () => {
    setShowEdit((state) => !state);
    dispatch(ToggleDisable(_id));
  };
  const CloseHanlder = () => {
    dispatch(ToggleDisable(_id));
  };

  const ProfilePerPageHandler = () => {
    userData.username === username
      ? navigate("/profile")
      : navigate(`/pageProfile/${username}`);
  };
  return (
    <div key={_id} className="post-wrapper">
      <div className="flex-row flex-space-between width-100">
        <div
          className="flex-row cursor"
          onClick={() => ProfilePerPageHandler()}
        >
          <img src={profilePic} className="profile-post-pic" />
          <div className="flex-row flex-center post-profile">
            <h1>{`${firstName} ${lastName}`}</h1>
            <h3>{`@${username}`}</h3>
          </div>
        </div>
        <div className="position-realtive">
          {checkUser(username) && disabledState ? (
            <BiDotsVerticalRounded
              className="text-md cursor"
              onClick={() => setShowEdit((state) => !state)}
            />
          ) : disabledState ? (
            <></>
          ) : (
            <AiOutlineClose
              className="text-md cursor"
              onClick={() => CloseHanlder()}
            />
          )}
          {showEdit && (
            <div className="edit-wrapper">
              <h2 className="cursor" onClick={() => dispatch(deletePost(_id))}>
                DELETE
              </h2>
              <hr />
              <h2 className="cursor" onClick={() => EditHandler()}>
                EDIT
              </h2>
            </div>
          )}
        </div>
      </div>
      <TextImageEdit
        prop={{
          textData: content,
          imagesData: postImage,
          disabledState,
          _id,
          likeCount,
          comments,
        }}
      />
    </div>
  );
};
