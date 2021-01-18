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
    icon: <Icon.GitMerge size={20} />,
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
    icon: <Icon.StopCircle size={20} />,
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
        id: "addCompus",
        title: "All Campuses",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-campuses",

      },
      
      
      
    ]
  },
  
  
  {
    id: "Department",
    title: "Department",
    icon: <Icon.List size={20} />,
    type: "collapse",
    children: [
      {
        id: "addDepartment",
        title: "Add Department",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-department",

      },
      
      {
        id: "allDepartments",
        title: "All Departments",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-departments",

      },
      
    ]
  },
  
  
  
  {
    id: "Event",
    title: "Events",
    icon: <Icon.Tablet size={20} />,
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
      
      
      {
        id: "Category",
        title: "Category",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/categories"
      },
      
    ]
  }, 
  
  {
    id: "incident",
    title: "Incidents",
    icon: <Icon.List size={20} />,
    type: "collapse",
    children: [
      {
        id: "allSickness",
        title: "Sicknesses",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/sicknesses",

      },
      
      {
        id: "allConflict",
        title: "Conflicts",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/conflicts",

      },
      
      
       
      {
        id: "allAssurance",
        title: "Quality Assurance",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/quality-assurances",

      },
      
      
        
      {
        id: "absentee",
        title: "Absentee",
        icon: <Icon.Circle size={12} />,
        type: "collapse",
        children: [
            {
              id: "addAbsentee",
              title: "Add Absentee",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/add-absentee",
            },
            
            {
              id: "allAbsentee",
              title: "All Absentee",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/absentee",
            },
        ]

      },
      
        
      {
        id: "request",
        title: "Request",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/requests",

      },
       
      
    ]
  }, 
  
  {
    id: "content",
    title: "contents",
    icon: <Icon.Twitch size={20} />,
    type: "collapse",
    children: [
        {
          id: "addContent",
          title: "Add Content",
          type: "item",
          icon: <Icon.Circle size={12} />,
          permissions: ["admin", "editor"],
          navLink: "/add-content",
        },
        
        {
          id: "allContent",
          title: "All Content",
          type: "item",
          icon: <Icon.Circle size={12} />,
          permissions: ["admin", "editor"],
          navLink: "/contents",
        },
    ]

  },
  
  {
    id: "KPI",
    title: "KPI",
    icon: <Icon.MoreHorizontal size={20} />,
    type: "collapse",
    children: [
      {
        id: "KPICategory",
        title: "KPI Category",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/KPI-category",
      },
      
    ]
  }, 
  
  {
    id: "notifications",
    title: "Notifications",
    icon: <Icon.Bell size={20} />,
    type: "collapse",
    children: [
      {
        id: "broadcast",
        title: "Broadcast",
        icon: <Icon.Circle size={12} />,
        type: "collapse",
        children: [
          {
            id: "addBroadcast",
            title: "Add Broadcast",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/add-broadcast",

          },
      
      
    ]

      },
      
      
    ]
  }, 
  
  
  
 
  
  
  {
    id: "settings",
    title: "Settings",
    icon: <Icon.Settings size={20} />,
    type: "collapse",
    children: [
      {
        id: "score",
        title: "Score Management",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/score-setting",

      },
      
      
    ]
  }, 
  
  
 
  
  
  
   
]

export default navigationConfig
