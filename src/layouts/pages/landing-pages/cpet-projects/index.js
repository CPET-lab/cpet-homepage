/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Features page components
import CPETProjects from "layouts/pages/landing-pages/cpet-projects/components/index.js";

function CPETProjectsInfo() {
  return (
    <BaseLayout
      title="Projects"
      breadcrumb={[
        { label: "Home", route: "/sections/page-sections/field-of-study" },
        { label: "Projects" },
      ]}
    >
      <View title=" ">
        <CPETProjects />
      </View>
    </BaseLayout>
  );
}

export default CPETProjectsInfo;
