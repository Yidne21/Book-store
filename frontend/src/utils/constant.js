import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import BookIcon from "@mui/icons-material/Book";
import PersonIcon from "@mui/icons-material/Person";

export const sideBarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Dashboard",
    path: "/dashboard/Owner",
    icon: <DashboardIcon />,
  },
  {
    title: "Books",
    path: "/dashboard/books",
    icon: <BookIcon />,
  },
  {
    title: "Owners",
    path: "/dashboard/owners",
    icon: <PersonIcon />,
  },
  {
    title: "Book Upload",
    path: "/dashboard/bookUpload",
    icon: <BookIcon />,
  },
  {
    title: "Other",
    path: "/dashboard/other",
    icon: <EmailIcon />,
  },
  {
    title: "Notification",
    path: "/dashboard/notification",
    icon: <NotificationsIcon />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <SettingsIcon />,
  },
  {
    title: "Login as",
    path: "/login",
    icon: <EmailIcon />,
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
