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
import EshwarNagPilli from "./../images/Eshwar_Nag_Pilli.png";
import Terodoc_Statement_of_Purpose from "./../images/Terodoc_Statement_of_Purpose.png";
import AMAZON from "./../images/amazon.png";
import WSU from "./../images/wsu.png";
import MIT from "./../images/mit.png";
import DRDO from "./../images/drdo.png";
import FILLERIMG from "./../images/fillerImg.png";
import CYBAGE from "./../images/cybage.jpeg";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import SALESTAT_LOGO from "./../images/SALESTAT_LOGO.png";
import PLAYQUOTE_LOGO from "./../images/PlayQuote_Logo.png";
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

const skills = [
  "Python",
  "Typescript",
  "Java",
  "ReactJs",
  "SQL",
  "Linux",
  "Web Development",
  "HTML/CSS",
  "Javascript",
  "Python",
  "Typescript",

  "Web Development",
  "HTML/CSS",
  "Javascript",
];

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
  ];

  const steppingStones = [
    [
      SALESTAT_LOGO,
      "Salestat",
      "https://terodoc.com/",
      "SaleStat is a software product which helps the medical company to analyse their sales in a graphical view and get a clear picture of their monthly and yearly sales status.",
      "/failed-projects/salestat",
    ],
    [
      PLAYQUOTE_LOGO,
      "PlayQuote",
      "https://y5htjzc44h524qdggongomi4ret3cochxn37dmg62clyqilcszaa.arweave.net/x0805Fzh-65AZjOaZzEciSexOEe7d_Gw3tCXiCFilkA",
      "PlayQuote is a permaweb dapp for storing Quotes on blockchain in a Decentralized way. Powered by Arweave, all quotes are forever stored and accessible anywhere.",
      "/failed-projects/playquote",
    ],
    [
      FILLERIMG,
      "Blockcert",
      "https://terodoc.com/",
      "Blockchain based DAPP(Decentalized Application) for certifying other Dapps. A permanent certificate on the Arweave permaweb blockchain",
      "/failed-projects/blockcert",
    ],
  ];

  const workExperience = [
    [
      AMAZON,
      "January 2023 - Present",
      "Software Development Engineer",
      "Amazon Inc.",
      "Seattle, Washington.",
    ],
    [
      WSU,
      "September 2022 - December 2022",
      "Teaching Assistant",
      "Washington State University",
      "Pullman, Washington.",
    ],
    [
      AMAZON,
      "May 2022 - August 2022",
      "Software Development Engineer Intern",
      "Amazon Inc. (AWS)",
      "Seattle, Washington.",
    ],
    [
      WSU,
      "November 2021 - April 2022",
      "Graduate Developer",
      "Biological Systems Engineering (WSU)",
      "Pullman, Washington.",
    ],
    [
      WSU,
      "January 2021 - October 2021",
      "Graduate Student Developer",
      "Smart Grid Demonstration and Research Investigation Lab (WSU)",
      "Pullman, Washington.",
    ],
    [
      CYBAGE,
      "July 2018 - December 2020",
      "Software Developer",
      "Cybage Software",
      "Hyderabad, India.",
    ],
    [
      DRDO,
      "June 2017 - May 2018",
      "Research Intern",
      "Defense Research and Development Organisation",
      "Pune, India.",
    ],
  ];

  const education = [
    [
      WSU,
      "January 2021 - December 2022",
      "Master of Science in Computer Science",
      "Washington State University",
      "Pullman, Washington.",
    ],
    [
      MIT,
      "August 2014 - June 2018",
      "Bachelor of Engineering in Computer Science",
      "Maharashtra Institute of Technology",
      "Pune, India.",
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
              {/* <Button size="small">Share</Button>
              <Button size="small">Learn More</Button> */}
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
          {steppingStones.map((data) => (
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
          <hr></hr>
          <Grid container>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{ fontSize: 20 }}
                gutterBottom
                variant="button"
                component="div"
              >
                Skills
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {skills.map((skill) => (
                <Chip sx={{ m: 1 }} label={skill} size="medium" />
              ))}
            </Grid>
          </Grid>
          {/* <hr></hr>
          <Grid container>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{ fontSize: 20 }}
                gutterBottom
                variant="button"
                component="div"
              >
                Blogs
              </Typography>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid> */}
          <hr></hr>
          <Grid container>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{ fontSize: 20 }}
                gutterBottom
                variant="button"
                component="div"
              >
                Work Experience
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {workExperience.map((data) => (
                <Grid container spacing={2}>
                  <Grid xs={12} md={2} sx={{ float: "right" }}>
                    <div class="box">
                      <img
                        style={{ float: "right" }}
                        height={"100vh"}
                        src={data[0]}
                        alt="Find Statement of Purpose examples and get your statement of purpose reviewed"
                      />
                    </div>
                  </Grid>

                  <Grid xs={12} md={10}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="text.secondary"
                    >
                      {data[1]}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {data[2]}
                    </Typography>
                    <Typography variant="body1" color="div">
                      {data[3]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data[4]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{ fontSize: 20 }}
                gutterBottom
                variant="button"
                component="div"
              >
                Education
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {education.map((data) => (
                <Grid container spacing={2}>
                  <Grid xs={12} md={2} sx={{ float: "right" }}>
                    <div class="box">
                      <img
                        style={{ float: "right" }}
                        height={"100vh"}
                        src={data[0]}
                        alt="Find Statement of Purpose examples and get your statement of purpose reviewed"
                      />
                    </div>
                  </Grid>

                  <Grid xs={12} md={10}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="text.secondary"
                    >
                      {data[1]}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {data[2]}
                    </Typography>
                    <Typography variant="body1" color="div">
                      {data[3]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data[4]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
