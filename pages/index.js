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
import GitHubIcon from "@mui/icons-material/GitHub";

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
      <br id="home"></br>
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
          <div id="about">
            <br></br>
            {/* <Divider orientation="horizontal" color="#5893df" flexItem /> */}
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
              <Card
                sx={{ minWidth: 250 }}
                elevation={11}
                className={styles.card}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Exercise</span>
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
              <Card
                sx={{ minWidth: 250 }}
                elevation={11}
                className={styles.card}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    <span className={styles.underline3}>Outdoors</span>
                  </Typography>
                  <Typography variant="body" color="#fff">
                    <span className={styles.underline3}> Being outside...</span>
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ minWidth: 250 }}
                elevation={11}
                className={styles.card}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" color="#fff">
                    <span className={styles.underline3}>Travel</span>
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
          </div>
          <br></br>
          <Stack direction="column">
            <br></br>
            <br></br>
            <br></br>
            {/* <Divider orientation="horizontal" color="#5893df" flexItem /> */}
            <div id="portfolio">
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
                      <span className={styles.underline3}>
                        Automated Mass Email
                      </span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      {" "}
                      <li>
                        <span className={styles.underline3}>
                          Throughout the course of this project I wrote two
                          api's. One to fetch data from the MySQL database and
                          the other to handle parameters used in the email
                          template.
                        </span>
                      </li>
                      <li>
                        <span className={styles.underline3}>
                          Mass emails were sent out based on a table that was
                          created. A customer service representative would check
                          a checkbox if the criteria presented indicated that an
                          email needed to be sent to the customer. If that were
                          the case, when the representative finished going
                          through the table they would click a button that would
                          send out all of the emails.
                        </span>
                      </li>
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
                      <span className={styles.underline3}>
                        Computer Vision Project
                      </span>
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
                      <span className={styles.underline3}>Amazon Clone</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            href="https://github.com/blakelucey/amazon-clone"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
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
                      <span className={styles.underline3}>Yelp Clone</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            href="https://github.com/blakelucey/PERN-STACK-YELP-CLONE"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
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
                      <span className={styles.underline3}>Tetris</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            href="https://github.com/blakelucey/tetris"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
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
                      <span className={styles.underline3}>Tic Tac Toe</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            href="https://github.com/blakelucey/tic_tac_toe"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
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
                      <span className={styles.underline3}>Lorem Ipsum</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            // href="https://github.com/blakelucey/PERN-STACK-YELP-CLONE"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
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
                      <span className={styles.underline3}>Lorem Ipsum</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            // href="https://github.com/blakelucey/tetris"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
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
                      <span className={styles.underline3}>Lorem Ipsum</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open GitHub" arrow>
                          <a
                            // href="https://github.com/blakelucey/tic_tac_toe"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </Container>
      <br></br>
      <br></br>
      <Footer />
    </ThemeProvider>
  );
}
