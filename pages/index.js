import Head from "next/head";
import Image from "next/Image";
import Link from "next/link";
import styles from "./index.module.css";
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
import Footer from '../components/StickyFooter/StickyFooter';

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
      <Container size="xs">
        <Stack
          direction="column"
          divider={
            <Divider
              orientation="horizontal"
              color="rgba(255, 255, 255, 0.12)"
              flexItem
            />
          }
        >
          <Paper elevation={11}>
            <Typography
              variant="h4"
              color="#fff"
              className={styles.padding}
            ></Typography>
          </Paper>
          <br></br>
          <Divider variant="fullWidth" light={true} />
          <br></br>
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                color="rgba(255, 255, 255, 0.12)"
                flexItem
              />
            }
            justifyContent="center"
            alignItems="center"
            spacing={12}
          >
            <Card
              sx={{ maxWidth: 345 }}
              elevation={11}
              className={styles.card}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Exercise
                </Typography>
                <Typography variant="body2" color="#fff">
                  I love exercising...
                </Typography>
              </CardContent>
            </Card>
          <Card
            sx={{ maxWidth: 345 }}
            elevation={11}
            className={styles.card}
            >
            <CardContent>
              <Typography gutterBottom variant="h5" color="#fff">
                Outdoors
              </Typography>
              <Typography variant="body2" color="#fff">
                Being outside...
              </Typography>
            </CardContent>
          </Card>
          <Card
              sx={{ maxWidth: 345 }}
              elevation={11}
              className={styles.card}
            >
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
        </Stack>
      </Container>
      <br></br>
      <br></br>
      <Footer color="rgb(121, 168, 229)"/>
    </ThemeProvider>
  );
}
