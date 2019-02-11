// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";

import DashboardPage from "views/Dashboard/Dashboard.jsx";
import TableList from "views/TableList/TableList.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import  EditCriteria from "views/Maps/Maps.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "View",
    navbarName: "View",
    icon: LibraryBooks,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Students",
    navbarName: "Students",
    icon: "content_paste",
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Teachers",
    navbarName: "Teachers",
    icon: "content_paste",
    component: Icons
  },
  {
    path: "/Edit Criteria",
    sidebarName: "Edit Criteria",
    navbarName: "Edit Criteria",
    icon: Person,
   component: EditCriteria
  },
  {
    path: "/notifications",
    sidebarName: "Messages",
    navbarName: "Messages",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
