// 학생들의 데이터를 여기에 정리합니다.
// 사진은 `src/assets/images/team` 폴더에 넣고 경로를 맞추는 것을 추천합니다.
import MemberImage1 from "assets/images/team-1.jpg";
import MemberImage2 from "assets/images/team-2.jpg";

import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import MemberCard from "examples/Cards/MemberCards";

const membersData = [
  {
    image: MemberImage1,
    name: "홍길동",
    position: {
      course: "석사 과정",
      interest: "관심 연구분야: Fuzzy PSI",
    },
    publications: [
      {
        title: "논문 제목 1",
        description: "저널 또는 학회 이름, 2024",
      },
      {
        title: "논문 제목 2",
        description: "저널 또는 학회 이름, 2023",
      },
    ],
  },
  {
    image: MemberImage2,
    name: "이순신",
    position: {
      course: "박사 과정",
      interest: "관심 연구분야: ZK-SNARKs",
    },
    publications: [
      {
        title: "다른 논문 제목 1",
        description: "다른 학회 이름, 2024",
      },
    ],
  },
  // 여기에 다른 학생 정보를 추가하면 됩니다.
];

function Members() {
  return (
    <MKBox>
      <Container>
        <MKTypography variant="h2" textAlign="center" my={4}>
          연구실 구성원
        </MKTypography>
        {/* membersData 배열을 순회하며 각 학생에 대한 MemberCard를 생성합니다. */}
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
