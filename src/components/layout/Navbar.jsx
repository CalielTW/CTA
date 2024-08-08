import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useTwitch from "../../hooks/useTwitch";
import { purple } from "@mui/material/colors";
import firmaCalielB from "../../static/firmaCalielB.png";

export const NavBar = () => {
  const { twitchName, twitchToken, loading, error } = useTwitch();
  const [pagesMenu, setPagesMenu] = useState([
    { url: "/Twitch", name: "Twitch" },
    { url: "/Obs", name: "Obs" },
  ]);

  const [anchorElNav, setAnchorElNav] = useState(null);

  useEffect(() => {
    if (twitchName && !loading && !error) {
      const auxMenu = pagesMenu.filter(
        (page) => !page.url.includes("/Twitch/")
      );

      auxMenu.push({ url: `/Twitch/${twitchName}`, name: `${twitchName}` });
      auxMenu.push({ url: `/Twitch/Wheel`, name: `Wheel` });

      setPagesMenu(auxMenu);
    }
    //eslint-disable-next-line
  }, [twitchName, twitchToken, loading, error]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: purple[900] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Larger Screen Version */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <img
                alt="Logo"
                src={firmaCalielB}
                style={{ height: "60px", margin: "0 auto" }}
              />
            </Box>

            <Box sx={{ flexGrow: 1, display: "flex", marginLeft: 3 }}>
              {pagesMenu.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.url}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    textTransform: "uppercase",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Smaller Screen Version */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
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
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <img
                alt="Logo"
                src={firmaCalielB}
                style={{ height: "60px", margin: "0 auto" }}
              />
            </Box>
            <Box sx={{ width: "48px" }} />
          </Box>

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
            {pagesMenu.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page.url}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textAlign: "center",
                  textTransform: "uppercase",
                  width: "100%",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
