import Head from "next/head";
import Image from "next/Image";
// import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css";
// import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";
// import Date from '../components/date'
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
} from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

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
        <Grid>
          <Grid>
            <Paper elevation={11}>
              <Typography variant="h1" color="#fff">
                lorem ipsum
              </Typography>
            </Paper>
          </Grid>
          <br></br>
          <Divider variant="fullWidth" light={true} />
          <br></br>
          <Grid>
            <Card
              sx={{ maxWidth: 345 }}
              elevation={11}
              className={utilStyles.onHover}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" color="#fff">
                  Exercise
                </Typography>
                <Typography variant="body2" color="#fff">
                  lorem ipsum...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
