import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const id = state.length
        ? Math.max(...state.map((task) => task.id)) + 1
        : 1;
      const newTask = { id, ...action.payload };
      return [newTask, ...state];
    },
    removeTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
    updateTask: (state, action) => {
      return state.map((task) => {
        let duplicateTaskIndex = -1;
        if (action.payload.taskId === task.id) {
          if (task?.days?.length) {
            let copiedDays = [...task.days];
            duplicateTaskIndex = copiedDays.findIndex(
              (taskDay) => taskDay.name === action.payload.day.name
            );
            if (duplicateTaskIndex > -1) {
              copiedDays.splice(duplicateTaskIndex, 1, action.payload.day);
              return {
                ...task,
                days: copiedDays,
              };
            } else {
              return {
                ...task,
                days: [...copiedDays, action.payload.day],
              };
            }
          }
          return {
            ...task,
            days: [action.payload.day],
          };
        }
        return task;
      });
    },
  },
});

export default taskSlice.reducer;

export const { addTask, removeTask, updateTask } = taskSlice.actions;
