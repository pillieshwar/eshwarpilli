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
const navItems = ["Projects", "Blogs"];

function Root(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <ModeEditOutlineOutlinedIcon color="white" />
      <Typography variant="h6" sx={{ my: 2 }}>
        Eshwar Nag Pilli
      </Typography>
      <Divider />
      <List>
        <ListItem key="homeHam" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link
                style={{
                  textDecoration: "None",
                  color: "#000",
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
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>
                <NavLink
                  key={item}
                  style={{
                    textDecoration: "None",
                    color: "#000",
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "#000" }} component="nav">
        <Toolbar>
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
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link
              style={{
                textDecoration: "None",
                color: "#fff",
              }}
              to={`/`}
            >
              <ModeEditOutlineOutlinedIcon color="white" /> Eshwar Nag Pilli
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Button key="Home" sx={{ color: "#fff" }}>
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
              <Button key={item} sx={{ color: "#fff" }}>
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
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
