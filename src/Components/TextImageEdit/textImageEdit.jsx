import { useRef, useState, useEffect } from "react";
import { ImImages } from "react-icons/im";
import { useDispatch } from "react-redux";
import { ToggleModal } from "../../reducer/postSlice";
import { addPostToDataBase } from "../../reducer/post";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

export const TextImageEdit = ({ prop }) => {
  const { textData, imagesData, disabledState } = prop;
  const textAreaRef = useRef(null);
  const dispatch = useDispatch();
  const [text, setText] = useState(textData);
  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const fileInput = useRef(null);
  const [img, setImg] = useState(imagesData);

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

  const onChangeHandler = (event) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textAreaRef.current?.scrollHeight}px`);
    setText(event.target.value);
  };

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

  const postHandler = () => {
    dispatch(addPostToDataBase({ content: text, postImage: img }));
    dispatch(ToggleModal(false));
    setText("");
    setImg(undefined);
  };
  return (
    <div>
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
              onChange={() => HandleImageSelected()}
            />
          </label>
          <button
            className="button-primary button-modal"
            onClick={() => postHandler()}
          >
            Post
          </button>
        </div>
      )}
      {disabledState && (
        <div className="flex-row">
          <h1>
            <AiOutlineHeart />{" "}
          </h1>
          <h1>
            <BsBookmark />
          </h1>
        </div>
      )}
    </div>
  );
};
