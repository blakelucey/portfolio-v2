import Head from "next/head";
import Image from "next/Image";
import Link from "next/link";
import styles from "./index.module.css";
import styleUtils from "../styles/utils.module.css";
//mui
import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Divider,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import ResponsiveAppBar from "../components/AppBar/AppBar";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Footer from "../components/StickyFooter/StickyFooter";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#5893df",
    },
    secondary: {
      main: "#2ec5d3",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container size="md">
        <Stack
          direction="column"
          // divider={
          //   <Divider orientation="horizontal" color={theme.divider} flexItem />
          // }
        >
          <Stack direction="row">
            <div className={styles.flex}>
              <div className={styles.center_image}>
                <Paper
                  elevation={11}
                  sx={{ minWidth: 600, minHeight: 600 }}
                  className={styles.paper_intro}
                >
                  <div className={styles.image}>
                    <Image
                      src="/images/profile.jpg"
                      height={600}
                      width={600}
                      priority
                      // className={styleUtils.borderCircle}
                    />
                  </div>
                </Paper>
              </div>
              <div className={styles.padding}>
                <div className={styles.flex_intro}>
                  <Typography variant="h2" color="#fff">
                    <div>
                      <span className={styles.underline}>Hey, I'm </span>
                      <span className={styles.underline}>Blake.</span>
                    </div>
                  </Typography>
                  <br></br>
                  <Typography variant="h6" color="#fff">
                    <div>
                      <span className={styles.underline2}>
                        I'm a software developer at{" "}
                      </span>

                      <span className={styles.underline2}>
                        {" "}
                        <Tooltip
                          title="Click here to be taken to foodservicedirect.com"
                          arrow
                        >
                          <a
                            href="https://www.foodservicedirect.com/?gclid=Cj0KCQjwl7qSBhD-ARIsACvV1X3iEqSDp85ToLUF44qqHD75pdDNNb_l6pofNXW9Isi04TCScJsu5KIaAmW6EALw_wcB"
                            target="_blank"
                            className={styles.link_color}
                          >
                            FoodServiceDirect.com.
                          </a>
                        </Tooltip>{" "}
                        My
                      </span>
                      <span className={styles.underline2}>
                        {" "}
                        responsibilities include managing{" "}
                      </span>
                      <span className={styles.underline2}>
                        projects and developing new software{" "}
                      </span>
                      <span className={styles.underline2}>
                        to help create more cost effective{" "}
                      </span>
                      <span className={styles.underline2}>
                        solutions for my employer.
                      </span>
                    </div>
                  </Typography>
                </div>
              </div>
            </div>
          </Stack>
          <br></br>
          <br></br>
          <br></br>
          <Divider orientation="horizontal" color="#5893df" flexItem />
          <br></br>
          <br></br>
          <Typography variant="h1" color="#fff">
            <span className={styles.underline}>About me...</span>
          </Typography>
          {/* <Divider orientation="horizontal" color={theme.divider} flexItem /> */}
          <br></br>
          <br></br>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" color="#5893df" flexItem />
            }
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Card sx={{ minWidth: 250 }} elevation={11} className={styles.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Exercise
                  </Typography>
                  <Typography variant="body1" color="#fff">
                    <span className={styles.underline3}>
                      {" "}
                      I love exercising...
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ minWidth: 250 }} elevation={11} className={styles.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Outdoors
                </Typography>
                <Typography variant="body" color="#fff">
                  <span className={styles.underline3}> Being outside...</span>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 250 }} elevation={11} className={styles.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Travel
                </Typography>
                <Typography variant="body" color="#fff">
                  <span className={styles.underline3}>
                    {" "}
                    And traveling as much as possible...
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <br></br>
          <Stack direction="column">
            <br></br>
            <br></br>
            <br></br>
            {/* <Divider orientation="horizontal" color="#5893df" flexItem /> */}
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="h1" color="#fff">
              <div className={styles.align_right}>
                <span className={styles.underline}>Coding Portfolio...</span>
              </div>
            </Typography>
            <br></br>
            <br></br>
            <Stack
              direction="row"
              divider={
                <Divider orientation="vertical" color="#5893df" flexItem />
              }
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Card
                sx={{ minHeight: 400, minWidth: 400 }}
                elevation={11}
                className={styles.card2}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Automated Mass Email
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}>
                      {" "}
                      Full-stack project. Throughout, the course of this project
                      I two api's to fetch data from MySql and handled this data
                      in such a way that mass emails were sent out based on
                      certain criteria.
                    </span>
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minHeight: 400, minWidth: 400 }}
                elevation={11}
                className={styles.card2}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Computer Vision Project
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}>
                      <li>
                        Acted as the Project Manager in coordinating with my
                        Tech Lead and the data science team in Pakistan.
                      </li>
                    </span>
                    <span className={styles.underline3}>
                      <li>
                        Collected a dataset for training, implemented the
                        trained model, and ensured that each component of this
                        project functioned as intended.
                      </li>
                    </span>
                    <span className={styles.underline3}>
                      <li>
                        Upon successfully proving this concept we were able to
                        implement computer vision on all warehouse shipping
                        lines.
                      </li>
                    </span>
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minHeight: 400, minWidth: 400 }}
                elevation={11}
                className={styles.card2}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Lorem Ipsum
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
            <br></br>
            <Divider orientation="horizontal" color="#5893df" flexItem />
            <br></br>
            <Stack
              direction="row"
              divider={
                <Divider orientation="vertical" color="#5893df" flexItem />
              }
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Card
                sx={{ minHeight: 400, minWidth: 400 }}
                elevation={11}
                className={styles.card2}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Lorem ipsum
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}>
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </span>
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minHeight: 400, minWidth: 400 }}
                elevation={11}
                className={styles.card2}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Lorem ipsum
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </span>
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minHeight: 400, minWidth: 400 }}
                elevation={11}
                className={styles.card2}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    Lorem Ipsum
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <br></br>
      <br></br>
      <Footer />
    </ThemeProvider>
  );
}
