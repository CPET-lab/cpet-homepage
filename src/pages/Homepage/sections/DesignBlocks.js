// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Homepage page components
import ProjectItem from "pages/Homepage/components/ProjectItem";

// Data
import data from "pages/Homepage/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        {/* ======== [수정] 아래 Stack에 sx 속성을 추가하여 스크롤 기능을 구현 ======== */}
        <Stack
          spacing={2}
          sx={{
            maxHeight: "350px", // 이 값을 조절하여 스크롤이 생기기 시작하는 최대 높이를 설정
            overflowY: "auto", // 내용이 maxHeight를 넘으면 자동으로 수직 스크롤바 생성
            pr: 2, // 스크롤바가 생길 때 내용과 겹치지 않도록 오른쪽에 약간의 여백을 줌
          }}
        >
          {items.map(({ icon, name, route }) => (
            <ProjectItem key={name} icon={icon} title={name} route={route} />
          ))}
        </Stack>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Research"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Projects
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
