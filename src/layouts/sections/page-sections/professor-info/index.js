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
import Professor from "layouts/sections/page-sections/professor-info/components/ProfessorInfo";

function ProfessorInfo() {
  return (
    <BaseLayout
      title="Professor Info"
      breadcrumb={[
        { label: "Professor", route: "/sections/page-sections/professor-info" },
        { label: "Info" },
      ]}
    >
      <View title="Info">
        <Professor />
      </View>
    </BaseLayout>
  );
}

export default ProfessorInfo;
