import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import { Outlet, NavLink, Link, ScrollRestoration } from "react-router-dom";
import { ACCENT } from "../theme";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Blogs", to: "/blogs" },
];

function Logo() {
  return (
    <Box
      component="img"
      src="/Eshwar_Nag_Pilli_Logo.png"
      alt=""
      sx={{ width: 28, height: 28, borderRadius: 1 }}
    />
  );
}

function Root(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Logo />
          <Typography variant="subtitle1">Eshwar Nag Pilli</Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} aria-label="Close menu">
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ flexGrow: 1, px: 2, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.to}
              end={item.end}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 2,
                mb: 1,
                "&.active": {
                  bgcolor: "rgba(25, 118, 210, 0.08)",
                  color: ACCENT,
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ variant: "subtitle2" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #e0e0e0",
          textAlign: "center",
          color: "text.secondary",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Eshwar Nag Pilli
        </Typography>
        <Typography variant="caption">
          Software Development Engineer II
        </Typography>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", width: "100%", minWidth: 0 }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          position: "fixed",
          zIndex: 1200,
          bgcolor: "#111",
          boxShadow:
            "0 1px 0 rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
          <IconButton
            color="inherit"
            aria-label="Open menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              color: "#fff",
              textDecoration: "none",
              typography: "h3",
            }}
          >
            <Logo />
            Eshwar Nag Pilli
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.end}
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  "&:hover": { color: "#fff" },
                  "&.active": {
                    color: "#fff",
                    boxShadow: "inset 0 -2px 0 #fff",
                    borderRadius: 0,
                  },
                }}
              >
                {item.label}
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
              width: 280,
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
          minWidth: 0, // Let wide children (e.g. scrollable rows) shrink instead of widening the page
          mt: { xs: 7, sm: 8 }, // Account for AppBar height
          px: { xs: 1, sm: 2, md: 3 },
          pb: 3,
        }}
      >
        <Outlet />
        <ScrollRestoration />
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
