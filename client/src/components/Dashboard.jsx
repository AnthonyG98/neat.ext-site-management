import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "cloudinary-react";
import { authActions } from "../store/auth-slice";
import { useState } from "react";
import { Tasks } from "./Tasks";

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
      localStorage.setItem("id", response.data.id);
      // setMyId(response.data.id);
      // enterUsername(response.data.username);
      // getMyInbox();
      console.log(response);
    });
  };
  const openTask = () => {
    const taskContainer = document.getElementById("task");
    taskContainer.style.display = "flex";
  };
  //generate random string for local storage
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  function generateString() {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    dashPropsContainer.style.display = "none";
  }
  useEffect(() => {
    getLoggedInUser();
  }, []);
  return (
    <>
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
          <i class="fa-solid fa-plus" onClick={openTask}></i>
        </div>
      </div>
      <Tasks />
    </>
  );
}
export default Dashboard;
