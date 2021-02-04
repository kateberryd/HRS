import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  
  
  {
    id: "Dasboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
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
    id: "Campus",
    title: "Campus",
    icon: <Icon.StopCircle size={20} />,
    type: "collapse",
    children: [
      
      {
        id: "addCompus",
        title: "All Campuses",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-campuses",

      },
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
    id: "groups",
    title: "Groups",
    icon: <Icon.GitMerge size={20} />,
    type: "collapse",
    children: [
     
      {
        id: "allGroups",
        title: "All Groups",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-groups"
      },
      
      {
        id: "addGroup",
        title: "Add Group",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-group",

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
        id: "allDepartments",
        title: "All Departments",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/all-departments",

      },
      {
        id: "addDepartment",
        title: "Add Department",
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
    icon: <Icon.Tablet size={20} />,
    type: "collapse",
    children: [
      
      {
        id: "allEvents",
        title: "All Events",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/events"
      },
      
      {
        id: "allEvent",
        title: "Add Event",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/add-event",

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
        title: "Sickness",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/sickness-incidents",

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
            id: "allAbsentee",
            title: "All Absentee",
            type: "item",
            icon: <Icon.Circle size={12} />,
            permissions: ["admin", "editor"],
            navLink: "/absentee",
          },
            {
              id: "addAbsentee",
              title: "Add Absentee",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/add-absentee",
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
        id: "allContent",
        title: "All Content",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/contents",
      },
        {
          id: "addContent",
          title: "Add Content",
          type: "item",
          icon: <Icon.Circle size={12} />,
          permissions: ["admin", "editor"],
          navLink: "/add-content",
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
