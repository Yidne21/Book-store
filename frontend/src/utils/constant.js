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
    path: "/dashboard/admin",
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
    // path: "/dashboard/other",
    icon: <ApiOutlinedIcon />,
    id: "other",
  },
  {
    title: "Notification",
    // path: "/dashboard/notification",
    icon: <NotificationsNoneOutlinedIcon />,
    id: "notification",
  },
  {
    title: "Settings",
    // path: "/dashboard/settings",
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
  { id: "email", name: "email", label: "Email", type: "email" },
  { id: "password", name: "password", label: "Password", type: "password" },
];

export const SignUpFormData = [
  { id: "username", name: "username", label: "Name", type: "text" },
  { id: "email", name: "email", label: "Email", type: "email" },
  {
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
  {
    id: "location",
    name: "location",
    label: "Address",
    type: "text",
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    type: "number",
  },
];

export const addBookFormData = [
  { id: "title", name: "title", label: "Title", type: "text" },
  { id: "author", name: "author", label: "Author", type: "text" },
];

export const updateBookFormData = [
  { id: "quantity", name: "quantity", label: "Quantity", type: "text" },
  { id: "rentPrice", name: "rentPrice", label: "Price", type: "text" },
];
