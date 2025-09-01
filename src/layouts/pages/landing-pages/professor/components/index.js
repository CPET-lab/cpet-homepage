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

// ======== 논문 정보를 배열 데이터로 분리 ========
// 논문 추가할 때 이 부분만 수정하면 됨
const publicationsData = [
  //conference
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
  {
    title: "Efficient Homomorphic Comparison Methods with Optimal Complexity (ASIACRYPT 2020)",
    authors: "Jung Hee Cheon, Dongwoo Kim, Duhyeong Kim",
    link: "https://rd.springer.com/chapter/10.1007/978-3-030-64834-3_8",
  },
  {
    title: "Authenticated Computation of Control Signal from Dynamic Controllers (CDC 2020)",
    authors: "Jung Hee Cheon, Dongwoo Kim, Junsoo Kim, Seungbeom Lee, Hyungbo Shim",
    link: "https://ieeexplore.ieee.org/abstract/document/9304150",
  },
  {
    title: "Numerical Methods for Comparison on Homomorphically Encrypted Numbers (ASIACRYPT 2019)",
    authors: "Jung Hee Cheon, Dongwoo Kim, Duhyeong Kim, Hun Hee Lee, Keewoo Lee",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-34621-8_15",
  },
  {
    title: "Numerical Methods for Comparison on Homomorphically Encrypted Numbers (ASIACRYPT 2019)",
    authors: "Jung Hee Cheon, Dongwoo Kim, Duhyeong Kim, Hun Hee Lee, Keewoo Lee",
    link: "https://link.springer.com/chapter/10.1007/978-3-030-34621-8_15",
  },
  {
    title: "Reusable Fuzzy Extractor with Practical Storage Size (ACISP 2018)",
    authors: "Jung Hee Cheon, Jinhyuck Jeong, Dongwoo Kim, Jongchan Lee",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-93638-3_3",
  },
  // 아래는 journal
  {
    title:
      "Amortized efficient zk-SNARK from linear-only RLWE encodings (Journal of Communications and Networks, 1-14 (2023))",
    authors: "Heewon Chung, Dongwoo Kim, Jeong Han Kim, Jiseung Kim",
    link: "https://doi.org/10.23919/JCN.2023.000012",
  },
  {
    title:
      "Optimized Privacy-Preserving CNN Inference With Fully Homomorphic Encryption (IEEE Transactions on Information Forensics and Security 18, 2175-2187 (2023))",
    authors: "*Dongwoo Kim, Cyril Guyot",
    link: "https://doi.org/10.1109/TIFS.2023.3263631",
  },
  {
    title: "Interactive Proof for Rounding Arithmetic (IEEE ACCESS 10, 122706-122725 (2022))",
    authors: "Shuo Chen, Jung Hee Cheon, Dongwoo Kim, Daejun Park",
    link: "https://doi.org/10.1109/ACCESS.2022.3223136",
  },
  {
    title:
      "Comparison of encrypted control approaches and tutorial on dynamic systems using Learning With Errors-based homomorphic encryption (Annual Reviews in Control 54, 200-218 (2022))",
    authors:
      "*Junsoo Kim, Dongwoo Kim, Yongsoo Song, Hyungbo Shim, Henrik Sandberg, Karl H. Johansson",
    link: "https://doi.org/10.1016/j.arcontrol.2022.10.002",
  },
  {
    title:
      "On the Scaled Inverse of (xⁱ-xʲ) modulo Cyclotomic Polynomial of the form Φpˢ(x) or Φpˢqˢ(x) (J. Korean Math. Soc. 59 (3), 621–634 (2022))",
    authors: "Jung Hee Cheon, Dongwoo Kim, Duhyeong Kim, Keewoo Lee",
    link: "http://jkms.kms.or.kr/journal/view.html?doi=10.4134/JKMS.j210446",
  },
  {
    title:
      "Efficient verifiable computation over quotient polynomial rings (Int. J. Inf. Secur. 21, 953–971 (2022))",
    authors: "*Jai Hyun Park, Jung Hee Cheon, Dongwoo Kim",
    link: "https://doi.org/10.1007/s10207-022-00590-x",
  },
  {
    title:
      "Privacy-preserving approximate GWAS computation based on homomorphic encryption (BMC Medical Genomics 13, 77 (2020))",
    authors: "*Duhyeong Kim, Yongha Son, Dongwoo Kim, Andrey Kim, Seungwan Hong, Jung Hee Cheon",
    link: "https://bmcmedgenomics.biomedcentral.com/articles/10.1186/s12920-020-0722-1",
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
