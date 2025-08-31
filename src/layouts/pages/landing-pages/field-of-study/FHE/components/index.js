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

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import FHEImage from "assets/images/FHE.png";

function FHE() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        {/* ======== 메인 Grid 컨테이너: 세로 방향, 중앙 정렬 ======== */}
        <Grid container direction="column" alignItems="center" spacing={3}>
          {/* ======== 상단: FHE 이미지 ======== */}
          <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
            <MKBox
              component="img"
              src={FHEImage}
              alt="FHE Preview"
              width={{ xs: "60%", md: "60%" }}
              shadow="lg"
            />
          </Grid>

          {/* ======== 하단: 텍스트 정보 전체 ======== */}
          <Grid item xs={12} lg={8}>
            {/* [수정] 제목(MKTypography)에만 textAlign: "center"를 다시 추가합니다. */}
            <MKTypography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
              Introduction
            </MKTypography>

            {/* Stack과 그 안의 내용들은 별도의 정렬 속성이 없으므로, 기본값인 왼쪽 정렬을 따릅니다. */}
            <Stack>
              <MKBox display="flex" alignItems="left" p={2} sx={{ pb: 3 }}>
                <MKTypography
                  variant="body1"
                  color="text"
                  pl={2}
                  sx={{
                    lineHeight: 2, // 이 값을 조절하여 줄 간격을 변경할 수 있습니다. (예: 1.5, 1.8, 2)
                  }}
                >
                  <strong>
                    동형암호는 정말 훌륭한 암호입니다.
                    ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ.
                    <br />
                    띄어쓰기 테스트 입니다. ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ.
                    <br />
                    설명을 적어주시면 됩니다. ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ.
                  </strong>
                </MKTypography>
              </MKBox>

              {/* ... (이하 다른 논문 목록들) ... */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default FHE;
