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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Outlet, NavLink, Link } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const drawerWidth = 240;
const navItems = ["projects", "blogs"];

function Root(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 2 }}>
        <ModeEditOutlineOutlinedIcon sx={{ color: "#000", fontSize: "1.5rem" }} />
        <Typography variant="h6" sx={{ color: "#000", fontSize: "1.1rem", fontWeight: 600 }}>
          Eshwar Nag Pilli
        </Typography>
      </Box>
      <Divider sx={{ mb: 1 }} />
      <List sx={{ px: 1 }}>
        <ListItem key="homeHam" disablePadding>
          <ListItemButton 
            sx={{ 
              textAlign: "center", 
              borderRadius: 1,
              mb: 0.5,
              "&:hover": {
                backgroundColor: "#e3e3e3"
              }
            }}
          >
            <ListItemText>
              <Link
                style={{
                  textDecoration: "None",
                  color: "#000",
                  fontSize: "1rem",
                  fontWeight: 500
                }}
                to={`/`}
              >
                Home
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: "center", 
                borderRadius: 1,
                mb: 0.5,
                "&:hover": {
                  backgroundColor: "#e3e3e3"
                }
              }}
            >
              <ListItemText>
                <NavLink
                  key={item}
                  style={{
                    textDecoration: "None",
                    color: "#000",
                    fontSize: "1rem",
                    fontWeight: 500
                  }}
                  to={`/` + item}
                >
                  {item}
                </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar 
        style={{ backgroundColor: "#000" }} 
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
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
              fontSize: { xs: "1rem", sm: "1.25rem" }
            }}
          >
            <Link
              style={{
                textDecoration: "None",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
              to={`/`}
            >
              <ModeEditOutlineOutlinedIcon sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
              <span style={{ fontSize: "inherit" }}>Eshwar Nag Pilli</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <Button key="Home" sx={{ color: "#fff", fontSize: { sm: "0.875rem", md: "1rem" } }}>
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
              <Button key={item} sx={{ color: "#fff", fontSize: { sm: "0.875rem", md: "1rem" } }}>
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
              width: { xs: "280px", sm: drawerWidth },
              backgroundColor: "#f5f5f5",
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
          pb: 3
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
