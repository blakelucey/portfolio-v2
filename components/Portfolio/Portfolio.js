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
  import styles from './Portfolio.module.css';
  import GitHubIcon from "@mui/icons-material/GitHub";
  import Image from 'next/image';




export default function Portfolio() {
    return(
        <Stack direction="column">
            <br></br>
            <br></br>
            <br></br>
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
                          Mass emails are sent out based on a data table. 
                          A customer service representative selects
                          a checkbox based on criteria presented in the table. 
                          When the representative has finished going
                          through the table they click a button that
                          sends out all of the emails.
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
                          Tech Lead and the data science team.
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
                          This project is still underway.  Once successfully proven it will be
                          implemented on all shipping lines.
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
                        <li>Created a web3 version of Amazon using ReactJS and Moralis for 
                          user authentication and payment.
                        </li>
                      </span>
                      <span className={styles.underline3}>
                      <li>
                          See README for instructions on how to authenticate crypto wallet via Moralis. 
                        </li>
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open Repository" arrow>
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
                        <li>
                          Created a yelp clone via Postgres, Express, ReactJS and NodeJS.
                        </li>
                      </span>
                      <div className={styles.button_github}>
                        <Tooltip title="Open Repository" arrow>
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
                      <span className={styles.underline3}>React Calculator</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                          This was one of my first React projects -- built with ReactJS. 
                        </li> 
                      </span>
                      <div className={styles.button_github}>
                      <Tooltip title="Open Repository" arrow>
                          <a
                            href="https://github.com/blakelucey/react-calculator"
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
                      <span className={styles.underline3}>Markdown Previewer</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                          I built this markdown previewer with ReactJS and github flavored
                          Markdown.
                        </li>
                      </span>
                      <span className={styles.underline3}>
                      <li>
                        The basic idea behind the previewer is that a person can type out their 
                        Markdown and understand what it will look like before copying it into their 
                        code and commiting it.
                      </li>
                      </span>
                      <div className={styles.button_github}>
                      <Tooltip title="Open Repository" arrow>
                          <a
                            href="https://github.com/blakelucey/Markdown-Previewer"
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
                      <span className={styles.underline3}>Tic Tac Toe</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                          I also built this game via python and pygame.  To play, 
                          download the code and run via terminal.
                        </li>
                      </span>
                      <span className={styles.underline3}>
                        <li>
                          I chose Tic Tac Toe for this project because I thought it would
                          be an interesting way to approach basic Machine Learning fundamentals.
                        </li>
                      </span>
                      <div className={styles.button_github}>
                      <Tooltip title="Open Repository" arrow>
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
                        <li>
                          This project was built using python and pygame.  To play the 
                          game, download the code and run via terminal. 
                        </li> 
                      </span>
                      <span className={styles.underline3}>
                        <li>
                          This was my first pygame project, so I wasn't sure what to expect
                          throughout this build.  However, it was a very enjoyable result and 
                          I look forward to building more games down the road. 
                        </li>
                      </span>
                      <div className={styles.button_github}>
                      <Tooltip title="Open Repository" arrow>
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
                      <Tooltip title="Open Repository" arrow>
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

    )
}