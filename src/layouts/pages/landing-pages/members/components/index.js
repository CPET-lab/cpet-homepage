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

import JungHoonMoonImage from "assets/images/junghun_moon.png";
import MingiKimImage from "assets/images/mingikim.png";
import JuHyeokImage from "assets/images/ju-hyeok-choi.jpeg";
import JeongBinImage from "assets/images/jungbin.jpeg";
import YeongHoImage from "assets/images/young-ho.jpeg";
import DefaultImage from "assets/images/anonymous.png";

import Container from "@mui/material/Container";
import MKBox from "components/MKBox";

import MemberCard from "examples/Cards/MemberCards";

const membersData = [
  {
    image: JungHoonMoonImage,
    name: "Jung Hun, Moon",
    position: {
      course: "Master's student",
      interest: "Research Interests: FHE, Secure Pattern Matching, Bootstrapping, Fuzzy PSI",
    },
    publications: [
      {
        title: "동형암호를 활용한 비이진 데이터에 대한 안전한 패턴 매칭 (2025)",
        description: "문정훈, 김동우*",
      },
    ],
  },
  {
    image: DefaultImage,
    name: "Jun Hyuk, Kim",
    position: {
      course: "Master's student",
      interest: "Research Interests: Fully Homomorphic Encryption",
    },
    publications: [
      {
        title: "논문 작성 중",
        description: " ",
      },
    ],
  },
  {
    image: MingiKimImage,
    name: "Min Gi, Kim",
    position: {
      course: "Master's student",
      interest: "Research Interests: FHE, ZK-SNARKs, Fuzzy PSI",
    },
    publications: [
      {
        title: "논문 작성 중",
        description: " ",
      },
    ],
  },
  {
    image: JuHyeokImage,
    name: "Ju Hyeok, Choi",
    position: {
      course: "Master's student",
      interest: "Research Interests: Fully Homomorphic Encryption",
    },
    publications: [
      {
        title: "논문 작성 중",
        description: " ",
      },
    ],
  },
  {
    image: DefaultImage,
    name: "Jibin, Park",
    position: {
      course: "Bachelor's student",
      interest: "Research Interests: Fully Homomorphic Encryption",
    },
    publications: [
      {
        title: "논문 작성 중",
        description: " ",
      },
    ],
  },
  {
    image: JeongBinImage,
    name: "Jeong Bin, Lee",
    position: {
      course: "Bachelor's student",
      interest: "Research Interests: Fully Homomorphic Encryption",
    },
    publications: [
      {
        title: "논문 작성 중",
        description: " ",
      },
    ],
  },
  {
    image: YeongHoImage,
    name: "Young Ho, Joung",
    position: {
      course: "Bachelor's student",
      interest: "Research Interests: Fully Homomorphic Encryption",
    },
    publications: [
      {
        title: "논문 작성 중",
        description: " ",
      },
    ],
  },
];

function Members() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        {/* membersData 배열을 순회하며 각 학생에 대한 MemberCard를 생성. */}
        {membersData.map((member) => (
          <MemberCard
            key={member.name}
            image={member.image}
            name={member.name}
            position={member.position}
            publications={member.publications}
          />
        ))}
      </Container>
    </MKBox>
  );
}

export default Members;
