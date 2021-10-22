import { combineReducers } from "redux";
import cources from "./CourseReducer";

const rootReducer = combineReducers({
  cources,
});

export default rootReducer;
