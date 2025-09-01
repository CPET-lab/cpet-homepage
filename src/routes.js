/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

import Professor from "layouts/pages/landing-pages/professor";

import Members from "layouts/pages/landing-pages/members";

import CPETProjects from "layouts/pages/landing-pages/cpet-projects";

const routes = [
  {
    name: "professor",
    icon: <Icon>portrait</Icon>,
    route: "/pages/landing-pages/professor-info",
    component: <Professor />,
  },
  {
    name: "Members", // 메뉴에 표시될 이름
    icon: <Icon>people</Icon>, // 메뉴 아이콘
    route: "/pages/landing-pages/members", // 페이지 경로
    component: <Members />, // 연결할 컴포넌트
  },
  {
    name: "Projects", // 메뉴에 표시될 이름
    icon: <Icon>book</Icon>,
    route: "/pages/landing-pages/cpet-projects", // 페이지 경로
    component: <CPETProjects />, // 연결할 컴포넌트
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/CPET-lab",
  },
];

export default routes;
