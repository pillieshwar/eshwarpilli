import { Form, useLoaderData } from "react-router-dom";
import liveProjectDataJson from "./../jsonData/liveProjectData.json";
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
import StatementofPurposeDashboardImg from "./../images/dashboard.png";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import SALESTAT_LOGO from "./../images/SALESTAT_LOGO.svg";
import Chip from "@mui/material/Chip";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useRef } from "react";

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

export async function loader({ params }) {
  const liveProjectData = params.projectName;
  return { liveProjectData };
}
export default function LiveProjects() {
  const { liveProjectData } = useLoaderData();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  var arr = [];
  Object.keys(liveProjectDataJson).forEach(function (key) {
    if (key === liveProjectData) {
      arr.push(liveProjectDataJson[key]);
      console.log(arr);
    }
  });
  return (
    <Box sx={{ flexGrow: 1 }} pt={10}>
      <Grid container spacing={5}>
        <Grid xs={12} md={3}>
          <Grid xs={10} textAlign="center">
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
          <Grid container>
            <Grid item textAlign={"center"} xs={12}>
              <Typography
                sx={{ fontSize: 20 }}
                gutterBottom
                variant="button"
                component="div"
              >
                {/* {arr[0].title} */}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                Launch Date:{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {arr[0].launchDate}
                </span>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                Category:{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {" "}
                  {arr[0].category}
                </span>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                Target Audience:{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {arr[0].targetAudience}
                </span>
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                Website:{" "}
                <span style={{ fontWeight: "lighter" }}>
                  {" "}
                  {arr[0].websiteLink}
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontWeight: "bold" }}
              >
                Impact:{" "}
                <span style={{ fontWeight: "lighter" }}>{arr[0].impact}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item textAlign={"center"} xs={12}>
              <Typography
                sx={{ fontSize: 20 }}
                gutterBottom
                variant="button"
                component="div"
              >
                {arr[0].title}
              </Typography>
            </Grid>
            <Grid xs={12}>
              {arr[0].frontImage === "1" ? (
                <img src={StatementofPurposeDashboardImg} />
              ) : (
                <img />
              )}
            </Grid>
            <Grid xs={12} pt={5}>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign={"justify"}
              >
                {arr[0].desc}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={0} md={1}></Grid>
      </Grid>
    </Box>
  );
}
