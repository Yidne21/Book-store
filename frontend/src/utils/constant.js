import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const sideBarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardOutlinedIcon />,
    id: "dashboard",
  },
  {
    title: "Dashboard",
    path: "/dashboard/owner",
    icon: <DashboardOutlinedIcon />,
    id: "ownerDashboard",
  },
  {
    title: "Books",
    path: "/dashboard/books",
    icon: <ClassOutlinedIcon />,
    id: "books",
  },
  {
    title: "Owners",
    path: "/dashboard/owners",
    icon: <PersonOutlineOutlinedIcon />,
    id: "owners",
  },
  {
    title: "Book Upload",
    path: "/dashboard/bookUpload",
    icon: <BookmarkAddOutlinedIcon />,
    id: "bookUpload",
  },
  {
    title: "Other",
    path: "/dashboard/other",
    icon: <ApiOutlinedIcon />,
    id: "other",
  },
  {
    title: "Notification",
    path: "/dashboard/notification",
    icon: <NotificationsNoneOutlinedIcon />,
    id: "notification",
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <SettingsIcon />,
    id: "settings",
  },
  {
    title: "Login as",
    path: "/login",
    icon: <AccountCircleOutlinedIcon />,
    id: "loginAs",
  },
];

export const loginFormData = [
  {
    label: "Email address",
    type: "email",
  },
  {
    label: "Password",
    type: "password",
  },
];

export const SignUpFormData = [
  {
    label: "Email address",
    type: "email",
  },
  {
    label: "Password",
    type: "password",
  },
  {
    label: "Confirm password",
    type: "password",
  },
  {
    label: "Location",
    type: "text",
  },
  {
    label: "Phone Number",
    type: "number",
  },
];
