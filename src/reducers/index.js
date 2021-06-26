import { combineReducers } from "redux";
import postListReducer from "./postList";
import usersReducer from "./users";
export default combineReducers({
  posts: postListReducer,
  users: usersReducer,
});
