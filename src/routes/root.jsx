import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Outlet, Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Root() {
  return (
    <>
      <div id="detail">
        <Grid container spacing={2} columns={12}>
          <Grid xs={4.5}></Grid>
          <Grid xs={1} sx={{ paddingTop: 4 }}>
            <Link
              style={{
                textDecoration: "None",
                color: "black",
              }}
              to={`/`}
            >
              Portfolio
            </Link>
          </Grid>
          <Grid xs={1} sx={{ paddingTop: 4 }}>
            <Link
              style={{
                textDecoration: "None",
                color: "black",
              }}
              to={`/projects`}
            >
              Projects
            </Link>
          </Grid>
          <Grid xs={1} sx={{ paddingTop: 4 }}>
            <Link
              style={{
                textDecoration: "None",
                color: "black",
              }}
              to={`/blogs`}
            >
              Blogs
            </Link>
          </Grid>
        </Grid>
        <Outlet />
      </div>
    </>
  );
}
