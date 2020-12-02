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
        id: "Campuses",
        title: "Campuses",
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
        id: "groups",
        title: "Groups",
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
        id: "designations",
        title: "Designations",
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
        id: "groups",
        title: "Groups",
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
        id: "support",
        title: "Support",
        type: "item",
        permissions: ["admin", "editor"],
        navLink: "/maps/leaflet",

      },
      
    ],
    
    
  },
  
  
  {
    id: "role",
    title: "Roles",
    icon: <Icon.Box size={20} />,
    type: "collapse",
    children: [
      {
        id: "addRoles",
        title: "Add Role",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/maps/leaflet",

      },
      
      {
        id: "allRoles",
        title: "All Roles",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/"
      },
      
    ]
  },
  
    
   
]

export default navigationConfig
