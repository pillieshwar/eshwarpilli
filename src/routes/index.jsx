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
import memoryvaultLogo from "./../images/memoryvaultLogo.png";
import dpayLogo from "./../images/dpayLogo.png";
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
      dpayLogo,
      "DPay",
      "https://eshwarpilli.vercel.app/",
      "DPay is a web-based platform designed to make doctor payments seamless and accurate. Hospitals often struggle with manual calculations, delayed payouts, and complex billing processes. DPay solves this by automating payment management, ensuring fair and transparent calculations for every doctor. The platform also integrates with hospital, doctor, billing, and payment management modules, offering a complete solution for healthcare institutions. With features like real-time payout tracking, error-free billing, and simple reporting, DPay empowers hospitals to streamline operations while letting doctors focus on what matters most—patient care.",
      "/live-projects/dpay",
    ],
    [
      memoryvaultLogo,
      "MemoryVault",
      "https://memoryvault.vercel.app/?id=O6326OhsyVQi-u9WFnonGZz9VPVfS6neaqZYW2wTLlw",
      "A platform that make memories last a lifetime. By combining QR codes with blockchain technology, we ensure your stories, photos, and milestones are permanently secured and always accessible. Whether it’s sharing moments with loved ones or preserving your personal journey, our mission is simple: to keep experiences safe, timeless, and just a scan away.",
      "/live-projects/memoryvault",
    ],
  ];

  const steppingStones = [
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
      "June 2025 - Present",
      "Software Development Engineer - II",
      "Amazon Inc.",
      "Seattle, Washington.",
    ],
    [
      AMAZON,
      "January 2023 - June 2025",
      "Software Development Engineer - I",
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
    <Box sx={{ flexGrow: 1, maxWidth: "100%", overflow: "hidden" }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid xs={12} md={4} position="relative">
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{
                alignSelf: "center",
                height: { xs: 300, sm: 350, md: 400 },
                objectFit: "cover",
                width: "80%",
                mt: { xs: 2, sm: 3, md: 4 },
              }}
              image={EshwarNagPilli}
              title="Eshwar Nag Pilli"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Eshwar Nag Pilli
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: 500,
                  color: "#1976d2",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 0.5, sm: 1 },
                  flexWrap: "wrap",
                }}
              >
                Software Development Engineer II at
                <Box
                  sx={{
                    width: { xs: "48px", sm: "54px", md: "60px" },
                    height: { xs: "48px", sm: "54px", md: "60px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{
                      marginTop: "6px",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "4px",
                    }}
                    src={AMAZON}
                    alt="Amazon logo"
                  />
                </Box>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  lineHeight: 1.6,
                }}
              >
                SDE II at Amazon building reliable backend services on AWS.
                Strong in data structures, algorithms, distributed systems, and
                web development. I like simple designs, strong tests, and fast
                feedback loops. Interested in startups and shipping small
                improvements that add up to 0.1%. <br></br>
                <br></br>I am also startup-curious. I enjoy validating small
                problems, shipping lightweight prototypes, and learning from
                users. My personal goal is simple: make something that improves
                life by even 0.1%, then keep compounding.
                <br></br>
                <br></br>
                <strong>Book time :</strong>{" "}
                <a href="https://cal.com/eshwarpilli/30min">Schedule Call</a>{" "}
                <OpenInNewIcon
                  sx={{
                    color: "#1876D0",
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                  }}
                />
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
          {infoStack.map((data, index) => (
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              key={index}
              sx={{ mb: 3 }}
            >
              <Grid
                xs={12}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "120px", sm: "140px", md: "100%" },
                    height: { xs: "120px", sm: "140px", md: "auto" },
                    maxWidth: { md: "150px" },
                  }}
                >
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                      src={data[0]}
                      alt="Find Statement of Purpose examples and get your statement of purpose reviewed"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid xs={12} md={10}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {data[1]}{" "}
                    <OpenInNewIcon
                      sx={{
                        color: "#1876D0",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                      }}
                    />
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: 1.6,
                    mb: 1,
                  }}
                >
                  {data[3]}
                </Typography>
                <Link
                  to={data[4]}
                  style={{
                    textDecoration: "none",
                    color: "#1876D0",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  View Project →
                </Link>
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
          {steppingStones.map((data, index) => (
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
              key={index}
              sx={{ mb: 3 }}
            >
              <Grid
                xs={12}
                md={2}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "120px", sm: "140px", md: "100%" },
                    height: { xs: "120px", sm: "140px", md: "auto" },
                    maxWidth: { md: "150px" },
                  }}
                >
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                      src={data[0]}
                      alt="Find Statement of Purpose examples and get your statement of purpose reviewed"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid xs={12} md={10}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  <Link
                    to={data[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    {data[1]}{" "}
                    <OpenInNewIcon
                      sx={{
                        color: "#1876D0",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                      }}
                    />
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    lineHeight: 1.6,
                    mb: 1,
                  }}
                >
                  {data[3]}
                </Typography>
                <Link
                  to={data[4]}
                  style={{
                    textDecoration: "none",
                    color: "#1876D0",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                  }}
                >
                  View Project →
                </Link>
              </Grid>
            </Grid>
          ))}
          <hr></hr>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  fontWeight: 600,
                  mb: 2,
                }}
                gutterBottom
                variant="button"
                component="div"
              >
                Skills
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 1, sm: 1.5 },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    sx={{
                      m: { xs: 0.5, sm: 1 },
                      fontSize: { xs: "0.75rem", sm: "0.875rem" },
                      height: { xs: 28, sm: 32 },
                    }}
                    label={skill}
                    size="medium"
                  />
                ))}
              </Box>
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
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  fontWeight: 600,
                  mb: 2,
                }}
                gutterBottom
                variant="button"
                component="div"
              >
                Work Experience
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {workExperience.map((data, index) => (
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                  key={index}
                  sx={{ mb: 3 }}
                >
                  <Grid
                    xs={12}
                    md={2}
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "80px", sm: "100px", md: "100%" },
                        height: { xs: "80px", sm: "100px", md: "auto" },
                        maxWidth: { md: "120px" },
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: "8px",
                        }}
                        src={data[0]}
                        alt="Company logo"
                      />
                    </Box>
                  </Grid>

                  <Grid xs={12} md={10}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        fontWeight: 500,
                      }}
                    >
                      {data[1]}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {data[2]}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {data[3]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
                      {data[4]}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <hr></hr>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 20 },
                  fontWeight: 600,
                  mb: 2,
                }}
                gutterBottom
                variant="button"
                component="div"
              >
                Education
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {education.map((data, index) => (
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                  key={index}
                  sx={{ mb: 3 }}
                >
                  <Grid
                    xs={12}
                    md={2}
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", md: "flex-end" },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "80px", sm: "100px", md: "100%" },
                        height: { xs: "80px", sm: "100px", md: "auto" },
                        maxWidth: { md: "120px" },
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: "8px",
                        }}
                        src={data[0]}
                        alt="University logo"
                      />
                    </Box>
                  </Grid>

                  <Grid xs={12} md={10}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                        fontWeight: 500,
                      }}
                    >
                      {data[1]}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {data[2]}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        fontWeight: 500,
                        mb: 0.5,
                      }}
                    >
                      {data[3]}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      }}
                    >
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
