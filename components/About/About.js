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
  import styles from './About.module.css';
  import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
  import ParkIcon from '@mui/icons-material/Park';
  import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
  import TravelExploreIcon from '@mui/icons-material/TravelExplore';



export default function About() {
    return(
        <div>
        <Typography variant="h1" color="#fff">
        <span className={styles.underline}>About me...</span>
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
        spacing={12}
      >
        <Card
          sx={{ minWidth: 250 }}
          elevation={11}
          className={styles.card}
        >
          <div>
          <CardActionArea className={styles.flex_intro}>
            <CardMedia >
              <FitnessCenterIcon sx={{ fontSize: 75 }} className={styles.icon}/>
              </CardMedia>              
            <CardContent className={styles.center}>
              <Typography variant="body1" color="#fff">
                <div>
                <span className={styles.underline3}>
                I love exercising...
                </span>
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
          </div>
        </Card>
        <Card
          sx={{ minWidth: 250 }}
          elevation={11}
          className={styles.card}
        >
          <div>
          <CardActionArea className={styles.flex_intro}>
            <CardMedia>
              <NaturePeopleIcon sx={{ fontSize: 75 }} className={styles.icon} />
            </CardMedia>
            <CardContent className={styles.center}>
            <Typography variant="body1" color="#fff">
              <div>
              <span className={styles.underline3}>
                Being outside...
                 </span>
                 </div>
            </Typography>
            </CardContent>
          </CardActionArea>
          </div>
        </Card>
        <Card
          sx={{ minWidth: 250 }}
          elevation={11}
          className={styles.card}
        >
          <div>
          <CardActionArea className={styles.flex_intro}>
            <CardMedia className={styles.icon}>
              <TravelExploreIcon sx={{ fontSize: 75 }}  />
            </CardMedia>
          <CardContent className={styles.center}>
            <Typography variant="body1" color="#fff">
              <div>
              <span className={styles.underline3}>
              And traveling as much as possible...
              </span>
              </div>
            </Typography>
          </CardContent>
          </CardActionArea>
          </div>
        </Card>
      </Stack>
      </div>
    )
}