import Head from "next/head";
import Image from "next/image";
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
  Tooltip,
} from "@mui/material";
import ResponsiveAppBar from "../components/AppBar/AppBar";
import Footer from "../components/StickyFooter/StickyFooter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Intro from '../components/Intro/Intro.js';
import About from '../components/About/About.js';
import Portfolio from '../components/Portfolio/Portfolio.js';

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
    <div>
      <Head>
    <title>Blake Lucey's Portfolio</title>
    </Head>
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
        >
          <Intro />     
          <br></br>
          <br></br>
          <div id="about">
            <br></br>
            <br></br>
            <br></br>
           <About />
          </div>
          <br></br>
          <Portfolio />
        </Stack>
      </Container>
      <br></br>
      <br></br>
      <Footer />
    </ThemeProvider>
    </div>
  );
}
