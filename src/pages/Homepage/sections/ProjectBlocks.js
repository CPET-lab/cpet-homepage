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
import data from "pages/Homepage/sections/data/projectData";

function ProjectBlocks() {
  const renderData = data.map(({ items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={items} justifyContent="center">
      <Grid item xs={12} lg={9}>
        <Stack
          spacing={2}
          sx={{
            maxHeight: "350px", // 이 값을 조절하여 스크롤이 생기기 시작하는 최대 높이를 설정
            overflowY: "auto", // 내용이 maxHeight를 넘으면 자동으로 수직 스크롤바 생성
            pr: 2, // 스크롤바가 생길 때 내용과 겹치지 않도록 오른쪽에 약간의 여백을 줌
          }}
        >
          {items.map(({ icon, title, name }) => (
            <ProjectItem key={name} icon={icon} title={title} name={name} />
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

export default ProjectBlocks;
