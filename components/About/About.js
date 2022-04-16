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
    )
}