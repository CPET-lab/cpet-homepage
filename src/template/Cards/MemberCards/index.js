import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function MemberCard({ image, name, position, publications }) {
  const renderPublications = publications.map(({ title, description }) => (
    <MKBox key={title} display="flex" alignItems="center" p={1} sx={{ pb: 3 }}>
      <MKBox
        width="2rem"
        height="2rem"
        variant="gradient"
        bgColor="info"
        color="white"
        coloredShadow="info"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        sx={{ flexShrink: 0 }}
      >
        <Icon fontSize="small">article</Icon>
      </MKBox>
      <MKTypography variant="body2" color="text" pl={2}>
        <strong>{title}</strong>
        <br />
        {description}
      </MKTypography>
    </MKBox>
  ));

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container alignItems="flex-start" justifyContent="space-between">
          {/* --- 학생 정보 컬럼 (왼쪽) --- */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="80%" // 이미지 크기를 조금 줄여서 템플릿을 작게 만듭니다.
              sx={{ mb: 2, borderRadius: 2, mx: "auto" }}
            />
            <MKTypography variant="h4" my={1} sx={{ pb: 2 }}>
              {" "}
              {name}{" "}
            </MKTypography>
            <MKBox sx={{ display: "inline-block", textAlign: "left" }}>
              <MKTypography variant="body2" color="text" mb={1}>
                <strong>{position.course}</strong>
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1}>
                <strong>{position.interest}</strong>
              </MKTypography>
            </MKBox>
          </Grid>

          {/* --- 논문 목록 컬럼 (오른쪽) --- */}
          {/* ======== [수정] 여기에 왼쪽 여백(padding-left)을 추가하여 오른쪽으로 밀어줍니다. ======== */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              mt: { xs: 6, lg: 0 },
              maxHeight: "500px", // 이 값을 조절하여 스크롤이 시작되는 최대 높이를 설정합니다.
              overflowY: "auto", // 내용이 maxHeight를 넘으면 자동으로 수직 스크롤바가 생깁니다.
            }}
          >
            <Stack>{renderPublications}</Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// props로 전달될 데이터의 타입과 필수 여부를 정의합니다.
MemberCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    course: PropTypes.string.isRequired,
    interest: PropTypes.string.isRequired,
  }).isRequired,
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MemberCard;
