import Head from "next/head";
import Image from "next/Image";
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";
// import Date from '../components/date'
//mui
import { Container, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#5893df',
    },
    secondary: {
      main: '#2ec5d3',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Image
          priority
          width={108}
          height={108}
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
        />
      </Container>
    </ThemeProvider>
  );
}
