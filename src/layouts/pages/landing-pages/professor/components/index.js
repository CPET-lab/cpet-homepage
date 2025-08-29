/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================
* ... (copyright headers) ...
*/

// ... (import 구문들은 그대로 둡니다)
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ProfessorImage from "assets/images/professor.png";

function Professor() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        {/* ======== [수정 1] alignItems="center"를 "flex-start"로 변경 ======== */}
        <Grid container alignItems="flex-start" justifyContent="space-between">
          {/* --- 교수님 정보 컬럼 (왼쪽) --- */}
          <Grid item xs={12} lg={5} sx={{ textAlign: "center" }}>
            <MKBox
              component="img"
              src={ProfessorImage}
              alt="Professor Preview"
              width="60%"
              sx={{ mb: 2, borderRadius: 2, mx: "auto" }}
            />
            <MKTypography variant="h4" my={1} sx={{ pb: 2 }}>
              Dongwoo Kim
            </MKTypography>
            <MKBox sx={{ display: "inline-block", textAlign: "left" }}>
              <MKTypography variant="body2" color="text" mb={1}>
                Assistant Professor
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1}>
                College of AI Convergence
              </MKTypography>
              <MKTypography variant="body2" color="text" mb={1} sx={{ pb: 2 }}>
                Dongguk University
              </MKTypography>
            </MKBox>
            <MKTypography
              component="a"
              href="https://dwkim606.github.io/"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="info"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",
                mx: "auto",
                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
              More about info
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              mt: { xs: 6, lg: 0 },
              maxHeight: "500px", // 이 값을 조절하여 스크롤이 시작되는 최대 높이를 설정
              overflowY: "auto", // 내용이 maxHeight를 넘으면 자동으로 수직 스크롤바 생성
            }}
          >
            <Stack>
              <MKBox display="flex" alignItems="center" p={2} sx={{ pb: 3 }}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">article</Icon>
                </MKBox>
                <MKTypography
                  variant="body2"
                  color="text"
                  pl={2}
                  component="a"
                  href="https://rd.springer.com/chapter/10.1007/978-3-030-84245-1_15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>
                    MHz2k: MPC from HE over ℤ₂ᴷ with New Packing, Simpler Reshare,
                    <br />
                    and Better ZKP (CRYPTO 2021)
                  </strong>
                  <br />
                  Jung Hee Cheon, Dongwoo Kim, Keewoo Lee
                </MKTypography>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={2} sx={{ pb: 3 }}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">article</Icon>
                </MKBox>
                <MKTypography
                  variant="body2"
                  color="text"
                  pl={2}
                  component="a"
                  href="https://link.springer.com/chapter/10.1007/978-3-030-90567-5_33"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>
                    Lattice-based Secure Biometric Authentication for
                    <br />
                    Hamming Distance (ACISP 2021)
                  </strong>
                  <br />
                  Jung Hee Cheon, Dongwoo Kim, Duhyeong Kim, Joohee Lee,
                  <br />
                  Junbum Shin, Yongsoo Song
                </MKTypography>
              </MKBox>

              <MKBox display="flex" alignItems="center" p={2} sx={{ pb: 3 }}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">article</Icon>
                </MKBox>
                <MKTypography
                  variant="body2"
                  color="text"
                  pl={2}
                  component="a"
                  href="https://rd.springer.com/chapter/10.1007%2F978-3-030-75248-4_19"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>
                    Flexible and Efficient Verifiable Computation on
                    <br />
                    Encrypted Data (PKC 2021)
                  </strong>
                  <br />
                  Alexandre Bois, Ignacio Cascudo, Dario Fiore,
                  <br />
                  Dongwoo Kim
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Professor;
