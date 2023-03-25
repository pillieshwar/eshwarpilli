import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EshwarNagPilli from "./../images/Eshwar_Nag_Pilli.jpeg";
import Terodoc_Statement_of_Purpose from "./../images/Terodoc_Statement_of_Purpose.png";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import SALESTAT_LOGO from "./../images/SALESTAT_LOGO.svg";
import Chip from "@mui/material/Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    marginRight: 7,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const StyledBadgeFail = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "red",
    color: "red",
    marginRight: 7,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
export default function Index() {
  const infoStack = [
    [
      Terodoc_Statement_of_Purpose,
      "Terodoc",
      "https://terodoc.com/",
      "A platform that provides a comprehensive library of Statement of Purpose that have been approved and accepted by universities. It offers a user-friendly interface for accessing and customizing SOPs, ensuring that they meet the specific needs of each institution.",
      "/live-projects/terodoc-statement-of-purpose",
    ],
    [
      SALESTAT_LOGO,
      "Salestat",
      "https://terodoc.com/",
      "SaleStat is a software product which helps the medical company to analyse their sales in a graphical view and get a clear picture of their monthly and yearly sales status",
      "/live-projects/salestat",
    ],
  ];
  return (
    <Box sx={{ flexGrow: 1 }} pt={10}>
      <Grid container spacing={5}>
        <Grid xs={12} md={4} position="relative">
          <Card>
            <CardMedia
              sx={{ height: 400 }}
              image={EshwarNagPilli}
              title="Eshwar Nag Pilli"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Eshwar Nag Pilli
              </Typography>
              <Typography gutterBottom variant="body2" component="div">
                Software Development Engineer(SDE) at Amazon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dedicated, hardworking, energetic graduate student studying
                Masters in Computer Science at Washington State University.
                Skilled in data structures, algorithms, problem-solving, and web
                development. Passionate about Innovation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid xs={12} textAlign="center">
              <Chip
                sx={{ paddingLeft: 2.5 }}
                variant="outlined"
                icon={
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  ></StyledBadge>
                }
                label=" LIVE PROJECTS"
              />
            </Grid>
          </Grid>
          {infoStack.map((data) => (
            <Grid container spacing={2}>
              <Grid xs={12} md={2} sx={{ float: "right" }}>
                <div class="box">
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      style={{ float: "right" }}
                      height={"100vh"}
                      src={data[0]}
                      alt="Find Statement of Purpose examples and get your statement of purpose reviewed"
                    />
                  </Link>
                </div>
              </Grid>
              <Grid xs={12} md={10}>
                <Typography gutterBottom variant="h6" component="div">
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {data[1]} <OpenInNewIcon sx={{ color: "#1876D0" }} />
                  </Link>
                </Typography>
                <div style={{ display: "inline" }}>
                  <Typography variant="body2" color="text.secondary">
                    {data[3]}
                    <Link
                      to={data[4]}
                      style={{ textDecoration: "none", color: "#1876D0" }}
                    >
                      {" "}
                      View Project
                    </Link>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={2}>
            <Grid xs={12} textAlign="center">
              <Chip
                sx={{ paddingLeft: 2.5 }}
                variant="outlined"
                icon={
                  <StyledBadgeFail
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  ></StyledBadgeFail>
                }
                label=" FAILED PROJECTS"
              />
            </Grid>
          </Grid>
          {infoStack.map((data) => (
            <Grid container spacing={2}>
              <Grid xs={12} md={2} sx={{ float: "right" }}>
                <div class="box">
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      style={{ float: "right" }}
                      height={"100vh"}
                      src={data[0]}
                      alt="Find Statement of Purpose examples and get your statement of purpose reviewed"
                    />
                  </Link>
                </div>
              </Grid>
              <Grid xs={12} md={10}>
                <Typography gutterBottom variant="h6" component="div">
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    {data[1]} <OpenInNewIcon sx={{ color: "#1876D0" }} />
                  </Link>
                </Typography>
                <div style={{ display: "inline" }}>
                  <Typography variant="body2" color="text.secondary">
                    {data[3]}
                    <Link
                      to={data[4]}
                      style={{ textDecoration: "none", color: "#1876D0" }}
                    >
                      {" "}
                      View Project
                    </Link>
                  </Typography>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
