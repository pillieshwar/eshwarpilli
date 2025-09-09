import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, NavLink, Link } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const drawerWidth = 240;
const navItems = ["blogs"];

function Root(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      {/* Header with close button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#000",
            fontSize: "1.2rem",
            fontWeight: 700,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Eshwar Nag Pilli
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: "#6c757d",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.04)",
              color: "#000",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation */}
      <Box sx={{ flexGrow: 1, pt: 2 }}>
        <List sx={{ px: 2 }}>
          <ListItem key="homeHam" disablePadding>
            <ListItemButton
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                mb: 1,
                "&:hover": {
                  backgroundColor: "rgba(102, 126, 234, 0.1)",
                  transform: "translateX(4px)",
                  transition: "all 0.2s ease-in-out",
                },
              }}
            >
              <ListItemText>
                <Link
                  style={{
                    textDecoration: "None",
                    color: "#000",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                  }}
                  to={`/`}
                >
                  🏠 Home
                </Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "rgba(102, 126, 234, 0.1)",
                    transform: "translateX(4px)",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                <ListItemText>
                  <NavLink
                    key={item}
                    style={{
                      textDecoration: "None",
                      color: "#000",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                    to={`/` + item}
                  >
                    📝 {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #dee2e6",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.02)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#6c757d",
            fontSize: "0.85rem",
          }}
        >
          © 2024 Eshwar Nag Pilli
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6c757d",
            fontSize: "0.75rem",
            mt: 0.5,
          }}
        >
          Software Development Engineer II
        </Typography>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          background:
            "linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(108, 107, 108) 100%)",
          boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            <Link
              style={{
                textDecoration: "None",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              to={`/`}
            >
              <ModeEditOutlineOutlinedIcon
                sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
              />
              <span style={{ fontSize: "inherit" }}>Eshwar Nag Pilli</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <Button
              key="Home"
              sx={{ color: "#fff", fontSize: { sm: "0.875rem", md: "1rem" } }}
            >
              <Link
                style={{
                  textDecoration: "None",
                  color: "#fff",
                }}
                to={`/`}
              >
                Home
              </Link>
            </Button>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff", fontSize: { sm: "0.875rem", md: "1rem" } }}
              >
                <NavLink
                  key={item}
                  style={{
                    textDecoration: "None",
                    color: "#fff",
                  }}
                  to={`/` + item}
                >
                  {item}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: "320px", sm: drawerWidth },
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: "100%",
          mt: { xs: 7, sm: 8 }, // Account for AppBar height
          px: { xs: 1, sm: 2, md: 3 },
          pb: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

Root.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Root;
