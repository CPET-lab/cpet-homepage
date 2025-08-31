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

import testImage from "assets/images/macbook.png";
import FHEImage from "assets/images/FHE.png";
import FuzzyPSIImage from "assets/images/FuzzyPSI.png";

export default [
  {
    title: "Fields of study",
    description: "FHE, Fuzzy PSI, ZKP, ZK_SNARKs, etc.",
    items: [
      {
        image: FHEImage,
        name: "Fully Homomorphic Encryption",
        route: "layouts/pages/landing-pages/field-of-study/FHE/index.js",
      },
      {
        image: FuzzyPSIImage,
        name: "Fuzzy PSI",
        route: "/sections/page-sections/features",
      },
      {
        image: testImage,
        name: "Zero Knowledge Proofs",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: testImage,
        name: "ZK_SNARKs",
        route: "/sections/page-sections/page-headers",
      },
    ],
  },
];
