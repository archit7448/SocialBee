import { useSelector } from "react-redux";
import "./FollowSidebar.css";
export const FollowSidebar = () => {
  const { users } = useSelector((store) => store.users);
  console.log(users);
  return (
    <div className="follow-sidebar">
      <h1>Who to Follow</h1>{" "}
      {users.length > 0 ? (
        users.map((data) => {
          const { username, profilePic, firstName, lastName } = data;
          return (
            <div key={username}>
              <div
                key={username}
                className="flex-row follow-sidebar-profile flex-center"
              >
                <div className="flex-row">
                  <img src={profilePic} />
                  <div>
                    <h2>{`${firstName} ${lastName}`}</h2>
                    <h3>{username}</h3>
                  </div>
                </div>
                <button className="button-primary button-follow-sidebar">
                  Follow
                </button>
              </div>
              <hr />
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
