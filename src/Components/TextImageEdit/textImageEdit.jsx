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
import "./textImageEdit.css";

export const TextImageEdit = ({ prop }) => {
  const { bookMark } = useSelector((store) => store.posts);
  const { textData, imagesData, disabledState, _id, likeCount, postState } =
    prop;
  const textAreaRef = useRef(null);
  const [text, setText] = useState(textData);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const dispatch = useDispatch();
  const fileInput = useRef(null);
  const [img, setImg] = useState(imagesData);

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
      await fetch(process.env.REACT_APP_CLOUDINARY_API_URL ?? "", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((json) => setImg(() => json.url));
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
      })
    );
    dispatch(ToggleModal(false));
    setText("");
    setImg(undefined);
  };

  return (
    <div className="text-editor-wrapper">
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
      {img && <img src={img} className="post-img" />}
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
                {`${likeCount}likes`}
              </h1>
            ) : (
              <h1 onClick={() => dispatch(likePost(_id))}>
                <AiOutlineHeart /> {`${likeCount}likes`}
              </h1>
            )}
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
          {/* <div className="flex-row comment-input">
            <textarea className="" />
            <button className="comment-button">POST</button>
          </div> */}
        </div>
      )}
    </div>
  );
};
