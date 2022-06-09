import { useRef, useState, useEffect } from "react";
import { ImImages } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { ToggleModal } from "../../reducer/postSlice";
import {
  addPostToDataBase,
  bookMarkPost,
  dislikePost,
  editPost,
  likePost,
  removeBookMarkPost,
} from "../../reducer/post";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import "./textImageEdit.css";
import { Comment } from "../Comment/comment";
import { Loader } from "../../Utility/Loader/loader";

export const TextImageEdit = ({ prop }) => {
  const { bookMark } = useSelector((store) => store.posts);
  const {
    textData,
    imagesData,
    disabledState,
    _id,
    likeCount,
    postState,
    comments,
  } = prop;
  const textAreaRef = useRef(null);
  const [text, setText] = useState(textData);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [img, setImg] = useState(imagesData);
  const user = JSON.parse(localStorage.getItem("user"));
  const { profilePic } = user;
  const { users } = useSelector((store) => store.users);
  const [loader, setLoader] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const getProfilePic = (username) => {
    return users.find((usersData) => usersData.username === username)
      .profilePic;
  };

  /*
   For Textarea auto grow
  */

  const parentStyle = {
    minHeight: parentHeight,
  };

  const textAreaStyle = {
    height: textAreaHeight,
  };

  useEffect(() => {
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current?.scrollHeight}px`);
  }, [text]);

  useEffect(() => {
    setText(textData);
    setImg(img);
  }, [disabledState]);

  const onChangeHandler = (event) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);
  };

  /**
   * For Image api request and Image handler
   */

  const HandleImageSelected = async () => {
    const data = new FormData();
    data.append("file", fileInput.current.files[0]);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_API_PRESET ?? ""
    );

    try {
      setLoader(true);
      await fetch(process.env.REACT_APP_CLOUDINARY_API_URL ?? "", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((json) => setImg(() => json.url));
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  // BookMark Handler

  const BookMarkHandler = (_id) => {
    return bookMark.find((bookMarkData) => bookMarkData._id === _id);
  };

  // Post Handler

  const EditHandler = () => {
    dispatch(
      editPost({
        postData: { content: text, postImage: img, disabledState: true },
        postId: _id,
      })
    );
  };

  const PostUpdate = () => {
    dispatch(
      addPostToDataBase({
        content: text,
        postImage: img,
        disabledState: true,
        comments: [],
      })
    );
    dispatch(ToggleModal(false));
    setText("");
    setImg(undefined);
  };

  return (
    <div className="text-editor-wrapper" key={_id}>
      <div style={parentStyle}>
        <textarea
          ref={textAreaRef}
          style={textAreaStyle}
          value={text}
          disabled={disabledState}
          autoFocus
          className="content-text-post"
          placeholder="What is happening?"
          onChange={(event) => onChangeHandler(event)}
        />
      </div>
      {loader ? (
        <Loader />
      ) : img ? (
        <img src={img} className="post-img" />
      ) : (
        <></>
      )}
      {!disabledState && (
        <div className="flex-space-between flex-row">
          <label>
            <ImImages className="image-tag" />
            <input
              type="file"
              ref={fileInput}
              className="display-hidden"
              onChange={() => HandleImageSelected()}
            />
          </label>
          <button
            className="button-primary button-modal"
            onClick={() => (postState ? PostUpdate() : EditHandler())}
          >
            {postState ? "POST" : "SAVE"}
          </button>
        </div>
      )}
      {disabledState && (
        <div className="flex-col flex-center">
          <div className="flex-row features-wrapper">
            {likeCount > 0 ? (
              <h1
                onClick={() => dispatch(dislikePost(_id))}
                className="text-center"
              >
                <AiFillHeart className="fill-heart" />
                {`${likeCount}Likes`}
              </h1>
            ) : (
              <h1 onClick={() => dispatch(likePost(_id))}>
                <AiOutlineHeart /> {`${likeCount}Likes`}
              </h1>
            )}
            <h1 onClick={() => setShowComment((state) => !state)}>
              {" "}
              <FaRegComment />{" "}
            </h1>
            {BookMarkHandler(_id) ? (
              <h1 onClick={() => dispatch(removeBookMarkPost(_id))}>
                <BsFillBookmarkFill />{" "}
              </h1>
            ) : (
              <h1 onClick={() => dispatch(bookMarkPost(_id))}>
                <BsBookmark />
              </h1>
            )}
          </div>
          {showComment && (
            <div className="flex-col flex-center">
              <Comment
                prop={{
                  disabledState: false,
                  profilePic,
                  textData: "",
                  postId: _id,
                }}
              />
              {comments.length > 0 ? (
                comments.map((data) => {
                  const { username, text, _id: key } = data;
                  const { textData, disabledState } = text;
                  return (
                    <Comment
                      prop={{
                        disabledState,
                        profilePic: getProfilePic(username),
                        textData,
                        postId: _id,
                        commentId: key,
                      }}
                      key={key}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
