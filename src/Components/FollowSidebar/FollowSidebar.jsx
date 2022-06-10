import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser } from "../../reducer/user";
import "./FollowSidebar.css";
export const FollowSidebar = () => {
  const { users, userData } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(userData, users);
  const userFilter = () => {
    return userData !== null
      ? users.filter(
          (data) =>
            data.username !== userData.username &&
            userData.following.every((following) => following._id !== data._id)
        )
      : [];
  };

  return (
    <div className="follow-sidebar">
      <h1>Who to Follow</h1>{" "}
      {userFilter().length > 0 ? (
        userFilter().map((data) => {
          const { username, profilePic, firstName, lastName, _id } = data;
          return (
            <div key={username}>
              <div
                key={username}
                className="flex-row follow-sidebar-profile flex-center"
              >
                <div
                  className="flex-row cursor"
                  onClick={() => navigate(`/pageProfile/${username}`)}
                >
                  <img src={profilePic} />
                  <div>
                    <h2>{`${firstName} ${lastName}`}</h2>
                    <h3>{username}</h3>
                  </div>
                </div>
                <button
                  className="button-primary button-follow-sidebar"
                  onClick={() => dispatch(followUser(_id))}
                >
                  Follow
                </button>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <div>
          <h2>No suggestion</h2>
        </div>
      )}
    </div>
  );
};
