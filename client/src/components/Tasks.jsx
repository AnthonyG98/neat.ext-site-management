import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../store/task-slice";
import axios from "axios";
export function Tasks() {
  let url = "http://localhost:3001";

  //Redux state management
  const dispatch = useDispatch();
  const taskTitle = useSelector((state) => state.task.title);
  const taskURL = useSelector((state) => state.task.task_url);
  const taskDescription = useSelector((state) => state.task.description);
  const taskIsComplete = useSelector((state) => state.task.IsComplete);
  const taskUserId = useSelector((state) => state.task.UserId);

  const changeTitle = (title) => {
    dispatch(taskActions.inputTaskTitle(title));
  };
  const changeURL = (url) => {
    dispatch(taskActions.inputTaskURL(url));
  };
  const changeDescription = (description) => {
    dispatch(taskActions.inputTaskDescription(description));
  };
  const changeIsComplete = (completed) => {
    dispatch(taskActions.inputIsComplete(completed));
  };
  const changeUserId = (userId) => {
    dispatch(taskActions.inputUserId(userId));
  };
  //Create and post task to database
  const createTask = () => {
    changeUserId(localStorage.getItem("id"));

    const taskData = {
      title: taskTitle.payload,
      task_url: taskURL.payload,
      description: taskDescription.payload,
      completed: "false",
      UserId: localStorage.getItem("id"),
    };
    console.log(taskData);
    axios.post(`${url}/tasks`, taskData).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <div className="task-background">
        <div className="task-container">
          <h1>Create a task</h1>
          <input
            type="text"
            className="task-title"
            onChange={(e) => {
              changeTitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="task-title"
            onChange={(e) => {
              changeURL(e.target.value);
            }}
          />
          <textarea
            className="task-title"
            id="task-desc"
            onChange={(e) => {
              changeDescription(e.target.value);
            }}
          ></textarea>
          <div className="task-btn-container">
            <button className="task-btn" onClick={createTask}>
              SAVE
            </button>
            <button className="task-btn">CANCEL</button>
          </div>
        </div>
      </div>
    </>
  );
}
