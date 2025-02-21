import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./mode/editMode.js";

export default configureStore({
  reducer: {
    edit: editReducer,
  },
});
