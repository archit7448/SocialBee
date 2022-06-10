import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { AiFillCamera } from "react-icons/ai";
import { ToggleEdit } from "../../reducer/userSlice";
import { Loader } from "../../Utility/Loader/loader";
import { EditUser, followUser, unfollowUser } from "../../reducer/user";
export const Profile = ({ prop }) => {
  const { EditState } = useSelector((store) => store.users);
  const { userData, users } = useSelector((store) => store.users);
  const [loader, setLoader] = useState(true);
  const fileInput = useRef();
  const dispatch = useDispatch();
  const { userProp, postData, profilePerPage } = prop;
  const {
    firstName,
    lastName,
    profilePic,
    username,
    followers,
    following,
    bio,
  } = userProp;
  // Find user Id
  const userId = (username) => {
    return users.find((data) => data.username === username)._id;
  };
  // Find follow unfollow details
  const userFollowUnfollow = (username) => {
    return userData.following.find(
      (userInfo) => userInfo.username === username
    );
  };

  // Edit and profile handling
  const [profile, setProfile] = useState(profilePic);
  const [input, setInput] = useState(bio);

  useEffect(() => {
    setProfile(profilePic), setInput(bio);
  }, [userProp]);
  const HandleImageSelected = async () => {
    const data = new FormData();
    data.append("file", fileInput.current.files[0]);
    data.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_API_PRESET ?? ""
    );

    try {
      setLoader(false);
      await fetch(process.env.REACT_APP_CLOUDINARY_API_URL ?? "", {
        method: "POST",
        body: data,
      })
        .then((response) => response.json())
        .then((json) => setProfile(() => json.url));
      setLoader(true);
    } catch (error) {
      console.log(error);
    }
  };
  //
  return (
    <div className="flex-row profile-wrapper">
      <div className="flex-row">
        <div className="flex-row">
          {loader ? <img src={profile} className="profile-img" /> : <Loader />}
          {!EditState && (
            <label>
              <AiFillCamera className="image-tag" />
              <input
                type="file"
                ref={fileInput}
                className="display-hidden"
                onChange={() => HandleImageSelected()}
              />
            </label>
          )}
        </div>
        <div className="margin-2rem">
          <h1>{`${firstName} ${lastName}`}</h1>
          <h2>{`@${username}`}</h2>
          <input
            value={input}
            disabled={EditState}
            autoFocus
            className={EditState ? "input-profile" : "input-profile-focus"}
            onChange={(event) => setInput(event.target.value)}
          />
          <div className="flex-row">
            <h3>{`Posts:${postData.length}`}</h3>
            <h3>{`Following:${following.length}`}</h3>
            <h3>{`Followers:${followers.length}`}</h3>
          </div>
        </div>
      </div>
      <div>
        {!profilePerPage ? (
          <button
            className="button-secondary button-edit-profile"
            onClick={() =>
              EditState
                ? dispatch(ToggleEdit())
                : dispatch(EditUser({ bio: input, profilePic: profile })) &&
                  dispatch(ToggleEdit())
            }
          >
            {EditState ? "EDIT" : "SAVE"}
          </button>
        ) : (
          <button
            className="button button-primary button-profile-follow"
            onClick={() =>
              userFollowUnfollow(username)
                ? dispatch(unfollowUser(userId(username)))
                : dispatch(followUser(userId(username)))
            }
          >
            {userFollowUnfollow(username) ? "Unfollow" : "Follow"}
          </button>
        )}
      </div>
    </div>
  );
};
