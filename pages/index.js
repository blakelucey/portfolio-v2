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
      <Container size="md">
        <Stack
          direction="column"
          divider={
            <Divider orientation="horizontal" color={theme.divider} flexItem />
          }
        >
          <Stack
            direction="column"
            divider={
              <Divider orientation="vertical" color={theme.divider} flexItem />
            }
          >
            <div className={styles.flex}>
              <div className={styles.center_image}>
                <Paper
                  elevation={11}
                  sx={{ minWidth: 600, minHeight: 600 }}
                  className={styles.paper_intro}
                >
                  <Image
                    src="/images/profile.jpg"
                    height={600}
                    width={600}
                    priority
                    className={styleUtils.borderCircle}
                  />
                </Paper>
              </div>
              <div className={styles.padding}>
                <div className={styles.flex_intro}>
                  <Typography variant="h2" color="#fff">
                    Hey, I'm Blake.
                  </Typography>
                  <br></br>
                  <Typography variant="h6" color="#fff">
                    A software developer within the Food and Beverage
                    distribution industry. I develop software to help create
                    more cost effective processes for my employer.
                  </Typography>
                </div>
              </div>
            </div>
          </Stack>
          <br></br>
          <br></br>
          <br></br>
          <Typography variant="h1" color="#fff">
            About me...
          </Typography>
          <br></br>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" color={theme.divider} flexItem />
            }
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Card sx={{ maxWidth: 345 }} elevation={11} className={styles.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Exercise
                </Typography>
                <Typography variant="body2" color="#fff">
                  I love exercising...
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} elevation={11} className={styles.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Outdoors
                </Typography>
                <Typography variant="body2" color="#fff">
                  Being outside...
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345 }} elevation={11} className={styles.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Travel
                </Typography>
                <Typography variant="body2" color="#fff">
                  And traveling as much as possible...
                </Typography>
              </CardContent>
            </Card>
          </Stack>
          <br></br>
          <br></br>
        </Stack>
      </Container>
      <br></br>
      <br></br>
      <Footer color="rgb(121, 168, 229)" />
    </ThemeProvider>
  );
}
