import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  
  
  
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      
    ]
  },
  
  
  {
    id: "role",
    title: "Roles",
    icon: <Icon.Layers size={20} />,
    type: "collapse",
    children: [
      {
        id: "addRoles",
        title: "Add Role",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-roles",

      },
      
      {
        id: "allRoles",
        title: "All Roles",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-roles"
      },
      
    ]
  },
  
  {
    id: "user-management",
    title: "User Management",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    badge: "warning",
    children: [
      {
        id: "addUser",
        title: "Add Users",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-user"
      },
      
      {
        id: "allUser",
        title: "All Users",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-users"
      },
      
      {
        id: "unApprovedUsers",
        title: "Unapprove Users",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/unapprove-users"
      },
      
    ]
    
    
    
    
  },
  
  {
    id: "groups",
    title: "Groups",
    type: "collapse",
    children: [
      {
        id: "addGroup",
        title: "Add Group",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-group",

      },
      
      {
        id: "allGroups",
        title: "All Groups",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-groups"
      },
      
    ]
  },
  
  
  {
    id: "Campus",
    title: "Campus",
    type: "collapse",
    children: [
      {
        id: "addCompus",
        title: "Add Campus",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-campus",

      },
      
      
      
    ]
  },
  
  
  {
    id: "Department",
    title: "Department",
    type: "collapse",
    children: [
      {
        id: "addDepartment",
        title: "Add Deparment",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-department",

      },
      
    ]
  },
  
  
  
  {
    id: "Event",
    title: "Events",
    type: "collapse",
    children: [
      {
        id: "allEvent",
        title: "Add Event",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-event",

      },
      
      {
        id: "allEvents",
        title: "All Events",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/events"
      },
      
    ]
  }, 
  
  
   
]

export default navigationConfig
