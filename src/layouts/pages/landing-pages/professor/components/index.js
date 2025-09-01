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
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ProfessorImage from "assets/images/professor.png";

// ======== 논문 정보를 배열 데이터로 분리합니다. ========
const publicationsData = [
  {
    title:
      "MHz2k: MPC from HE over ℤ₂ᴷ with New Packing, Simpler Reshare, and Better ZKP (CRYPTO 2021)",
    authors: "Jung Hee Cheon, Dongwoo Kim, Keewoo Lee",
    link: "https://rd.springer.com/chapter/10.1007/978-3-030-84245-1_15",
  },
  {
    title: "Lattice-based Secure Biometric Authentication for Hamming Distance (ACISP 2021)",
    authors: "Jung Hee Cheon, Dongwoo Kim, Duhyeong Kim, Joohee Lee, Junbum Shin, Yongsoo Song",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-90567-5_33",
  },
  {
    title: "Flexible and Efficient Verifiable Computation on Encrypted Data (PKC 2021)",
    authors: "Alexandre Bois, Ignacio Cascudo, Dario Fiore, Dongwoo Kim",
    link: "https://rd.springer.com/chapter/10.1007%2F978-3-030-75248-4_19",
  },
];

function Professor() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        {/* ======== 메인 Grid 컨테이너 ======== */}
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

            {/* ======== 교수님 사진 및 정보 기입 부분 ======== */}

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

          {/* --- 논문 목록 컬럼 (오른쪽) --- */}
          <Grid
            item
            xs={12}
            lg={6}
            // ======== [핵심 수정] marginLeft를 음수 값으로 설정하여 왼쪽으로 당깁니다. ========
            // 이 값을 조절하여 원하는 만큼 왼쪽으로 이동시킬 수 있습니다.
            sx={{
              mt: { xs: 6, lg: 0 },
              maxHeight: "500px",
              overflowY: "auto",
              // 이 값이 오른쪽 컬럼을 왼쪽으로 당기는 역할을 합니다.
              // 'px' 대신 'rem'이나 '%', 'vw' 등 다른 단위도 사용 가능합니다.
              marginLeft: { lg: "-20px" }, // 데스크탑(lg) 이상에서만 적용
            }}
          >
            <Stack>
              {/* ======== 분리된 논문 데이터를 map 함수를 통해 동적으로 렌더링합니다. ======== */}
              {publicationsData.map((publication) => (
                <MKBox
                  key={publication.title}
                  display="flex"
                  alignItems="flex-start"
                  p={2}
                  sx={{ pb: 3 }}
                >
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
                    sx={{ flexShrink: 0 }}
                  >
                    <Icon fontSize="small">article</Icon>
                  </MKBox>
                  <MKTypography
                    variant="body2"
                    color="text"
                    pl={2}
                    component="a"
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>
                      {publication.title.split("<br />").map((line, index, arr) => (
                        <span key={line}>
                          {line}
                          {index < arr.length - 1 && <br />}
                        </span>
                      ))}
                    </strong>
                    <br />
                    {publication.authors}
                  </MKTypography>
                </MKBox>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Professor;
