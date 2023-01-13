import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "cloudinary-react";
import { authActions } from "../store/auth-slice";
import { useState } from "react";

function Dashboard() {
  //url management
  let url = "http://localhost:3001";
  let localUsername = localStorage.getItem("username");

  //Redux state management
  const dispatch = useDispatch();
  const userUsername = useSelector((state) => state.auth.username);
  const userProfileImg = useSelector((state) => state.auth.profilePic);

  //React state
  const [profilePicture, setProfilePicture] = useState();

  const getLoggedInUser = () => {
    axios.get(`${url}/users/${localUsername}`).then((response) => {
      setProfilePicture(response.data.profile_picture);
      // setMyId(response.data.id);
      // enterUsername(response.data.username);
      // getMyInbox();
      console.log(response);
    });
  };
  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <div className="dashboard-container" onLoad={getLoggedInUser()}>
      <div className="dash-head-container">
        <div className="dash-head">
          <h1 className="head">NEXT.ext</h1>
          <Image
            className="dashImg"
            cloudName="delktfw1a"
            publicId={profilePicture}
          />
        </div>
      </div>
      <div className="add-task-container">
        <input type="text" className="add" placeholder="Add a task" />
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
  );
}
export default Dashboard;
