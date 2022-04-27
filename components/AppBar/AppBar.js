import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import styles from "./AppBar.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import Link from "next/link";

const pages = ["Get in Touch","About", "Coding Portfolio"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    

    <AppBar position="fixed">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Sansita:ital,wght@1,700&display=swap" rel="stylesheet"></link>

      </head>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
                <MenuItem>
                  <Typography textAlign="center"><a href="mailto:blucey7@gmail.com&subject=Get in Touch&body=Blake,">Get in Touch</a></Typography>
                </MenuItem>
                <MenuItem>
                <Typography textAlign='center'><a href="#about">About</a></Typography>
                </MenuItem>
                <MenuItem>
                <Typography textAlign='center'><a href="#portfolio">Coding Portfolio</a></Typography>
                </MenuItem>
            
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <div className={styles.underline}><a href="mailto:blucey7@gmail.com?&subject=Get in Touch" className={styles.a}>Get in Touch</a></div>
              </Button>
              <Button
              onClick={handleCloseNavMenu}
              sx={{my: 2, color: 'white', display: 'block'}}
              >
                <div className={styles.underline} color="#fff"><a href="#about" className={styles.a}>About</a></div>
              </Button>
              <Button
              onClick={handleCloseNavMenu}
              sx={{my: 2, color: 'white', display: 'block'}}
              >
                <div className={styles.underline} color="#fff"><a href="#portfolio" className={styles.a}>Coding Portfolio</a></div>
              </Button>
          </Box>
          <Box>
            {/* Div here for css styling */}
            <div className={styles.flex}>
              <div className={styles.button_github}>
                <Tooltip title="Open GitHub" arrow>
                  <a
                    href="https://github.com/blakelucey?tab=repositories"
                    target="_blank"
                    className={styles.icon}
                  >
                    <GitHubIcon fontSize="large" color="#fff" />
                  </a>
                </Tooltip>
              </div>
              <div className={styles.button_linkedIn}>
                <Tooltip title="Open LinkedIn" arrow>
                  <a 
                  href="https://www.linkedin.com/in/blake-lucey" 
                  target="_blank" 
                  className={styles.icon}
                  >
                  <LinkedInIcon fontSize="large" color="#fff"/>
                  </a>
                </Tooltip>
              </div>
              <div className={styles.button_pdf}>
                <Tooltip title="Open Résumé via Dropbox" arrow>
                  <a
                  href="https://www.dropbox.com/s/0tecouxjklftjj0/r%C3%A9sum%C3%A9.pdf?dl=0"
                  target="_blank"
                  className={styles.icon}
                  >
                  <FilePresentIcon fontSize="large" color="#fff" />
                  </a>
                </Tooltip>
              </div>
            </div>
          </Box>
          <Box>
            <div className={styles.center}>
              <Typography variant="h3" className={styles.name}>
                <a href="#home" className={styles.a}>
                  Blake Lucey
                  </a>
                </Typography>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
