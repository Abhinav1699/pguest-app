import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface todo {
  id: string;
  title: string;
  description: string;
}
interface taskState {
  tasks: todo[];
}

const initialState: taskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    newtask: (state, action: PayloadAction<todo>) => {
      state.tasks.push(action.payload);
    },
    updatetask: (state, action: PayloadAction<todo>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export default taskSlice.reducer;
export const { updatetask, newtask, deleteTask } = taskSlice.actions;
