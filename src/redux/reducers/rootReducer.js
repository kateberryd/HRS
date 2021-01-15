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
import {roleReducer} from "./role/roleReducer"
import {departmentReducer} from "./department/departmentReducer"
import {groupReducer} from "./group/groupReducer"
import {eventReducer} from "./event/eventReducer"
import {scoreReducer} from "./score/scoreReducer"
import {eventCategoryReducer} from "./event-category/event-categoryReducer"
import {sicknessReducer} from "./sickness/sicknessReducer"
import {conflictReducer} from "./conflict/conflictReducer"
import {qualityAssuranceReducer} from "./quality-assurance/qualityAssuranceReducer"
import {absenteeReducer} from "./absent/absenteeReducer"
import {requestReducer} from "./request/requestReducer"
import {contentReducer} from "./content/contentReducer"
import {broadcastReducer} from "./broadcast/broadcastReducer"
import {KPICategoryReducer} from "./KPI-category/KPI-categoryReducer"




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
  group: groupReducer,
  event: eventReducer,
  score: scoreReducer,
  category: eventCategoryReducer,
  sickness: sicknessReducer,
  conflict:conflictReducer,
  qualityAssurance: qualityAssuranceReducer,
  absentee: absenteeReducer,
  request: requestReducer,
  content: contentReducer,
  broadcastReducer: broadcastReducer,
  role: roleReducer,
  KPICategory: KPICategoryReducer,
})

export default rootReducer
