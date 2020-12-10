import { combineReducers } from "redux"
import calenderReducer from "./calendar/"
import emailReducer from "./email/"
import chatReducer from "./chat/"
import todoReducer from "./todo/"
import customizer from "./customizer/"
import auth from "./auth/"
import navbar from "./navbar/Index"
import dataList from "./data-list/"
import {userList} from "./user/userReducer"
import {campusReducer} from "./campus/campusReducer"
import {departmentReducer} from "./department/departmentReducer"
import {groupReducer} from "./group/groupReducer"

const rootReducer = combineReducers({
  calendar: calenderReducer,
  emailApp: emailReducer,
  todoApp: todoReducer,
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  userList: userList,
  campus: campusReducer,
  department: departmentReducer,
  group: groupReducer
})

export default rootReducer
