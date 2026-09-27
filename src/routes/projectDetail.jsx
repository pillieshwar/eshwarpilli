import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link, useLoaderData } from "react-router-dom";
import StatementofPurposeDashboardImg from "./../images/dashboard.png";
import memoryvaultImg from "./../images/memoryvault.png";
import dpayImg from "./../images/dpay.png";
import projectDataJson from "./../jsonData/liveProjectData.json";
import { ACCENT } from "../theme";

const screenshots = {
  1: StatementofPurposeDashboardImg,
  2: memoryvaultImg,
  3: dpayImg,
};

export async function loader({ params }) {
  return { projectName: params.projectName };
}

function Detail({ label, children }) {
  return (
    <Box sx={{ py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}>
      <Typography variant="overline" color="text.secondary" component="dt">
        {label}
      </Typography>
      <Typography variant="body2" component="dd" sx={{ m: 0 }}>
        {children}
      </Typography>
    </Box>
  );
}

export default function ProjectDetail({ live }) {
  const { projectName } = useLoaderData();
  const project = projectDataJson[projectName];

  const backLink = (
    <Box
      component={Link}
      to={live ? "/#projects" : "/#experiments"}
      sx={{
        typography: "body2",
        fontWeight: 600,
        color: ACCENT,
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        "&:hover": { textDecoration: "underline" },
      }}
    >
      <ArrowBackIcon sx={{ fontSize: "1.1em" }} />
      All projects
    </Box>
  );

  if (!project) {
    return (
      <Box sx={{ maxWidth: 960, mx: "auto", py: 6, textAlign: "center" }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Project not found
        </Typography>
        {backLink}
      </Box>
    );
  }

  const screenshot = screenshots[project.frontImage];
  const paragraphs = project.desc
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <Box sx={{ maxWidth: 1080, mx: "auto", py: { xs: 2, md: 4 } }}>
      {backLink}

      <Box sx={{ mt: 3, mb: { xs: 3, md: 4 } }}>
        <Chip
          size="small"
          label={live ? "Live project" : "Past experiment"}
          sx={{
            mb: 1.5,
            bgcolor: live ? "rgba(68, 183, 0, 0.12)" : "rgba(0, 0, 0, 0.06)",
            color: live ? "#2e7d32" : "text.secondary",
          }}
        />
        <Typography variant="h1">{project.title}</Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1 }}>
          {project.category} · Launched {project.launchDate}
        </Typography>
      </Box>

      {screenshot && (
        <Box
          component="img"
          src={screenshot}
          alt={`${project.title} screenshot`}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 12px 32px rgba(17, 24, 39, 0.08)",
            mb: { xs: 3, md: 5 },
          }}
        />
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 300px" },
          gap: { xs: 3, md: 6 },
          alignItems: "start",
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ mb: 2 }}>
            About
          </Typography>
          {paragraphs.map((p, i) => (
            <Typography
              key={i}
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, whiteSpace: "pre-line" }}
            >
              {p}
            </Typography>
          ))}
        </Box>

        <Box
          component="dl"
          sx={{
            m: 0,
            p: 2.5,
            pt: 1,
            bgcolor: "#f9fafb",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 3,
            position: { md: "sticky" },
            top: { md: 88 },
            "& > div:last-of-type": { borderBottom: "none" },
          }}
        >
          <Detail label="Launched">{project.launchDate}</Detail>
          <Detail label="Category">{project.category}</Detail>
          <Detail label="Audience">{project.targetAudience}</Detail>
          <Detail label="Impact">{project.impact}</Detail>
          <Detail label="Website">
            {project.websiteLink ? (
              <Box
                component="a"
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: ACCENT,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Visit website
                <OpenInNewIcon sx={{ fontSize: "1.1em" }} />
              </Box>
            ) : (
              "No longer online"
            )}
          </Detail>
        </Box>
      </Box>
    </Box>
  );
}
