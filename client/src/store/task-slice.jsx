import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    isComplete: 0,
    title: "",
    task_url: "",
    description: "",
    UserId: "",
  },
  reducers: {
    inputTaskTitle(state, taskTitle) {
      state.title = taskTitle;
    },
    inputTaskURL(state, taskURL) {
      state.task_url = taskURL;
    },
    inputTaskDescription(state, taskDescription) {
      state.description = taskDescription;
    },
    inputIsComplete(state, taskIsComplete) {
      state.isComplete = taskIsComplete;
    },
    inputUserId(state, taskUserId) {
      state.UserId = taskUserId;
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
