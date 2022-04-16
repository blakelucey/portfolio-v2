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
  import styles from './Intro.module.css';
  import Image from 'next/image';


export default function Intro() {
    return(
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
                      priority={true}
                      alt="Blake Lucey"
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
    )}
