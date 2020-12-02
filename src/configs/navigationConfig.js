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
        id: "Users",
        title: "Users",
        type: "collapse",
        badge: "warning",
        children: [
          {
            id: "addUser",
            title: "Add User",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/add-user"
          },
          
          {
            id: "allUser",
            title: "All User",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/all-users"
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
            navLink: "/maps/leaflet",

          },
          
          {
            id: "allDepartment",
            title: "All Department",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/"
          },
          
        ]
      },
      
      
      {
        id: "Campus",
        title: "Campuses",
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
          
          {
            id: "allCampuses",
            title: "All Campuses",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/all-campus"
          },
          
        ]
      },
      
      
      {
        id: "designations",
        title: "Designations",
        type: "collapse",
        children: [
          {
            id: "addDesignation",
            title: "Add Designation",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/add-designation",

          },
          
          {
            id: "allDesignation",
            title: "All Designations",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/all-designation"
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
        id: "support",
        title: "Support",
        type: "item",
        permissions: ["admin", "editor"],
        navLink: "/maps/leaflet",

      },
      
    ],
    
    
  },
  
  
   
]

export default navigationConfig
