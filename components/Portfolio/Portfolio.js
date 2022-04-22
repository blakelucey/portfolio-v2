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
  import OpenInNewIcon from '@mui/icons-material/OpenInNew';




export default function Portfolio() {
    return(
      <div>
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
              <Stack direction="column" spacing={6} justifyContent="space-evenly" alignItems="center">
              <Stack
                direction="row"
                divider={
                  <Divider orientation="vertical" color="#5893df" flexItem />
                }
                justifyContent="space-evenly"
                alignItems="center"
                spacing={4}
              >
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>
                        Automated Mass Email
                      </span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      {" "}
                      <li>
                        <span className={styles.underline3}>
                        Throughout this project, I wrote two APIs. 
                        One to fetch data from the MySQL database 
                        and the other to handle parameters used in the 
                        email template.
                        </span>
                      </li>
                      <li>
                        <span className={styles.underline3}>
                        Mass emails are sent out based on a data table. 
                        A customer service representative selects a checkbox 
                        based on the criteria presented in the table. When the 
                        representative has finished going through the table, 
                        they click a button that sends out all emails.
                        </span>
                      </li>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>
                        Computer Vision Project
                      </span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                        I am acting as the Project Manager in 
                        coordination with my Tech Lead and the 
                        data science team.
                        </li>
                      </span>
                      <span className={styles.underline3}>
                        <li>
                        Collecting a dataset for training, 
                        implementing the trained model, and 
                        ensuring that each project component 
                        functions as intended.
                        </li>
                      </span>
                      <span className={styles.underline3}>
                        <li>
                          This project is still underway. 
                          Once successfully proven, we will 
                          implement it on all shipping lines.
                        </li>
                      </span>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Amazon Clone</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                          Built a web3 version of Amazon.com.
                        </li>
                      </span>
                      <span className={styles.underline3}>
                      <li>
                          See README for instructions on how to authenticate a crypto wallet via Moralis. 
                        </li>
                      </span>
                      <span className={styles.underline3}>
                        <li>
                        Built using ReactJS and Moralis for user authentication and payment.
                        </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
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
                      </div>
                    </Typography>
                    </div>
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
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Yelp Clone</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                          Created a clone of the review site Yelp.
                        </li>
                        </span>
                        <span className={styles.underline3}>
                        <li>
                        Implemented this application using Postgres, Express, ReactJS, and NodeJS.
                        </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
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
                      </div>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>React Calculator</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                          The application displays an ios style calculator and correctly performs numeric calculations.
                        </li> 
                      </span>
                      <span className={styles.underline3}>
                        <li>
                        Built this project using ReactJS.
                        </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
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
                      <div>
                          <Tooltip title="Open React Calculator" arrow>
                            <a 
                            href="https://happy-murdock-8521d6.netlify.app/"
                            target="_blank"
                            className={styles.icon}
                            >
                              <OpenInNewIcon fontSize="large" color="#fff"/>
                           </a>
                          </Tooltip>
                        </div>
                        </div>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Markdown Previewer</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                        Using this Markdown Previewer, a person can 
                        type out their Markdown and understand what 
                        it will look like before copying it into their 
                        code and committing it.                        
                        </li>
                      </span>
                      <span className={styles.underline3}>
                      <li>
                        Built this application with ReactJS and GitHub flavored Markdown.
                      </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
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
                        <div>
                          <Tooltip title="Open Markdown Previewer" arrow>
                            <a 
                            href="https://affectionate-tereshkova-098232.netlify.app/"
                            target="_blank"
                            className={styles.icon}
                            >
                              <OpenInNewIcon fontSize="large" color="#fff"/>
                           </a>
                          </Tooltip>
                        </div>
                      </div>
                    </Typography>
                    </div>
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
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Drum Machine</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                        Built a drum machine with drum pads that the user 
                        can press either with the mouse or corresponding keyboard keys. 
                        </li> 
                      </span>
                      <span className={styles.underline3}>
                        <li>
                          Built with ReactJS.
                        </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
                      <div className={styles.button_github}>
                      <Tooltip title="Open Repository" arrow>
                          <a
                            href="https://github.com/blakelucey/Drum-Machine"
                            target="_blank"
                            className={styles.icon}
                          >
                            <GitHubIcon fontSize="large" color="#fff"/>
                          </a>
                        </Tooltip>
                      </div>
                      <div>
                          <Tooltip title="Open Drum Machine" arrow>
                            <a 
                            href="https://dreamy-banach-11c214.netlify.app/"
                            target="_blank"
                            className={styles.icon}
                            >
                              <OpenInNewIcon fontSize="large" color="#fff"/>
                           </a>
                          </Tooltip>
                        </div>
                        </div>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Tic Tac Toe</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                        Tic Tac Toe was an intriguing project to approach basic Machine Learning fundamentals.                          
                        </li>
                      </span>
                      <span className={styles.underline3}>
                        <li>
                        Built this game via python and pygame. 
                        To play, download the code and run via terminal.
                        </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
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
                      </div>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minHeight: 400, minWidth: 400 }}
                  elevation={11}
                  className={styles.card2}
                >
                  <CardContent>
                  <div className={styles.flex_intro}>
                    <Typography gutterBottom variant="h5" color="#fff">
                      <span className={styles.underline3}>Tetris</span>
                    </Typography>
                    <Typography variant="body" color="#fff">
                      <span className={styles.underline3}>
                        <li>
                        Tetris was my first pygame project, and I ended up with a gratifying result.                 
                        </li> 
                      </span>
                      <span className={styles.underline3}>
                        <li>
                        Built this project using python and pygame. 
                        To play the game, download the code and run it via terminal. 
                        </li>
                      </span>
                      <br></br>
                      <div className={styles.flex}>
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
                      </div>
                    </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Stack>
              </Stack>
            </div>
            <br></br>
            <br></br>
    </div>

    )
}