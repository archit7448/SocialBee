import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentToDatabase,
  deleteCommentToDatabase,
  editCommentToDatabase,
} from "../../reducer/comment";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./comment.css";
export const Comment = ({ prop }) => {
  const { disabledState, profilePic, textData, postId, commentId } = prop;
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  const [text, setText] = useState(textData);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const [showEdit, setShowEdit] = useState(false);
  const { token, userData } = useSelector((store) => store.users);

  const parentStyle = {
    minHeight: parentHeight,
  };

  const textAreaStyle = {
    height: textAreaHeight,
  };

  useEffect(() => {
    setParentHeight(`${textAreaRef.current?.scrollHeight + 5}px`);
    setTextAreaHeight(`${textAreaRef.current?.scrollHeight + 5}px`);
  }, [text]);

  const onChangeHandler = (event) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);
  };

  const addComment = () => {
    dispatch(
      addCommentToDatabase({
        commentData: { textData: text, disabledState: true },
        postId,
        token,
      })
    );
    setText("");
    setParentHeight("auto");
    setTextAreaHeight("auto");
  };
  const editHandler = () => {
    dispatch(
      editCommentToDatabase({
        commentData: { textData: text, disabledState: false },
        postId,
        commentId,
        token,
      })
    );
    setShowEdit((state) => !state);
  };
  const editComment = () => {
    dispatch(
      editCommentToDatabase({
        commentData: { textData: text, disabledState: true },
        postId,
        commentId,
        token,
      })
    );
  };
  return (
    <div style={parentStyle} className={disabledState ? "comment-wrapper" : ""}>
      <img src={profilePic} className="comment-pic" />
      <textarea
        ref={textAreaRef}
        style={textAreaStyle}
        value={text}
        rows={1}
        disabled={disabledState}
        className={
          disabledState ? "comment-text-post-disable" : "comment-text-post"
        }
        placeholder="Comment something"
        onChange={(event) => onChangeHandler(event)}
      />
      {disabledState ? (
        <></>
      ) : (
        <button
          className="comment-button"
          onClick={() => (commentId ? editComment() : addComment())}
        >
          {commentId ? "SAVE" : "POST"}
        </button>
      )}
      {userData.profilePic === profilePic && disabledState ? (
        <div className="flex-row">
          {showEdit && (
            <div className="edit-comment-wrapper">
              <h2
                className="cursor"
                onClick={() =>
                  dispatch(
                    deleteCommentToDatabase({ commentId, postId, token })
                  )
                }
              >
                DELETE
              </h2>
              <hr />
              <h2 className="cursor" onClick={() => editHandler()}>
                EDIT
              </h2>
            </div>
          )}
          <BiDotsVerticalRounded
            className="text-sm cursor"
            onClick={() => setShowEdit((state) => !state)}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
