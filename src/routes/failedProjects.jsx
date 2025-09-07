import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import StatementofPurposeDashboardImg from "./../images/dashboard.png";
import liveProjectDataJson from "./../jsonData/liveProjectData.json";

const StyledBadge = styled(Badge)(({ theme }) => ({
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

export async function loader({ params }) {
  const liveProjectData = params.projectName;
  return { liveProjectData };
}
export default function FailedProjects() {
  const { liveProjectData } = useLoaderData();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  var arr = [];
  Object.keys(liveProjectDataJson).forEach(function (key) {
    if (key === liveProjectData) {
      arr.push(liveProjectDataJson[key]);
      console.log(arr);
    }
  });

  const nstr = arr[0].desc;

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%", overflow: "hidden" }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid xs={12} md={3}>
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Grid xs={12} textAlign="center" sx={{ mb: 2 }}>
              <Chip
                sx={{ 
                  paddingLeft: 2.5,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" }
                }}
                variant="outlined"
                icon={
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  ></StyledBadge>
                }
                label=" FAILED PROJECTS"
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  sx={{ 
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    fontWeight: 600,
                    mb: 2
                  }}
                  gutterBottom
                  variant="button"
                  component="div"
                >
                  Project Details
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ 
                  p: 2, 
                  backgroundColor: "#f5f5f5", 
                  borderRadius: 2,
                  mb: 2
                }}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Launch Date:{" "}
                    <span style={{ fontWeight: 400 }}>
                      {arr[0].launchDate}
                    </span>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Category:{" "}
                    <span style={{ fontWeight: 400 }}>
                      {arr[0].category}
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Target Audience:{" "}
                    <span style={{ fontWeight: 400 }}>
                      {arr[0].targetAudience}
                    </span>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Website:{" "}
                    <span style={{ fontWeight: 400 }}>
                      {arr[0].websiteLink}
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      fontWeight: 600
                    }}
                  >
                    Impact:{" "}
                    <span style={{ fontWeight: 400 }}>{arr[0].impact}</span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={12} md={9}>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{ 
                  fontSize: { xs: 18, sm: 20, md: 24 },
                  fontWeight: 600,
                  mb: 2
                }}
                gutterBottom
                variant="h4"
                component="div"
              >
                {arr[0].title}
              </Typography>
            </Grid>
            <Grid xs={12}>
              {arr[0].frontImage === "1" ? (
                <Box sx={{ 
                  width: "100%", 
                  maxWidth: "100%",
                  overflow: "hidden",
                  borderRadius: 2,
                  boxShadow: 2
                }}>
                  <img 
                    src={StatementofPurposeDashboardImg} 
                    alt="Project dashboard"
                    style={{ 
                      width: "100%", 
                      height: "auto",
                      display: "block"
                    }}
                  />
                </Box>
              ) : (
                <Box sx={{ 
                  width: "100%", 
                  height: "200px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Typography color="text.secondary">No image available</Typography>
                </Box>
              )}
            </Grid>
            <Grid xs={12} sx={{ pt: { xs: 3, sm: 4, md: 5 } }}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ 
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  lineHeight: 1.7,
                  whiteSpace: "pre-wrap"
                }}
              >
                {nstr}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
