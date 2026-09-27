import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link, useLocation } from "react-router-dom";
import EshwarNagPilli from "./../images/Eshwar_Nag_Pilli.png";
// Logos are trimmed and have transparent backgrounds so they scale evenly and cast shaped shadows.
import terodocLogo from "./../images/logos/terodoc.png";
import memoryvaultLogo from "./../images/logos/memoryvault.png";
import dpayLogo from "./../images/logos/dpay.png";
import AMAZON from "./../images/logos/amazon.png";
import WSU from "./../images/logos/wsu.png";
import MIT from "./../images/logos/mit.png";
import DRDO from "./../images/logos/drdo.png";
import blockcertLogo from "./../images/logos/blockcert.png";
import CYBAGE from "./../images/logos/cybage.png";
import SALESTAT_LOGO from "./../images/logos/salestat.png";
import PLAYQUOTE_LOGO from "./../images/logos/playquote.png";
import projectDetails from "./../jsonData/liveProjectData.json";
import { ACCENT } from "../theme";

const LiveDot = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
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
    "0%": { transform: "scale(.8)", opacity: 1 },
    "100%": { transform: "scale(2.4)", opacity: 0 },
  },
}));

const liveProjects = [
  {
    key: "dpay",
    logo: dpayLogo,
    name: "DPay",
    url: "https://dpayhealth.com/",
    summary:
      "Automates doctor payouts for hospitals: fair, transparent payment calculations, real-time payout tracking, and simple reporting, so doctors can focus on patient care.",
    detail: "/live-projects/dpay",
  },
  {
    key: "memoryvault",
    logo: memoryvaultLogo,
    name: "MemoryVault",
    url: "https://memoryvault.vercel.app/?id=O6326OhsyVQi-u9WFnonGZz9VPVfS6neaqZYW2wTLlw",
    summary:
      "Preserves photos, stories, and milestones on the blockchain, each linked to a QR code, so memories stay safe, timeless, and just a scan away.",
    detail: "/live-projects/memoryvault",
  },
];

// Past projects are no longer online, so only PlayQuote keeps an external link.
const experiments = [
  {
    key: "terodoc-statement-of-purpose",
    logo: terodocLogo,
    name: "Terodoc",
    summary:
      "A library of Statements of Purpose accepted by universities, with an interface for browsing and tailoring them to each program.",
    detail: "/failed-projects/terodoc-statement-of-purpose",
  },
  {
    key: "salestat",
    logo: SALESTAT_LOGO,
    name: "Salestat",
    summary:
      "Sales analytics for pharmaceutical companies, charting monthly and yearly sales by product and region.",
    detail: "/failed-projects/salestat",
  },
  {
    key: "playquote",
    logo: PLAYQUOTE_LOGO,
    name: "PlayQuote",
    url: "https://y5htjzc44h524qdggongomi4ret3cochxn37dmg62clyqilcszaa.arweave.net/x0805Fzh-65AZjOaZzEciSexOEe7d_Gw3tCXiCFilkA",
    summary:
      "A permaweb dapp that stores quotes on the Arweave blockchain, so they are kept forever and accessible anywhere.",
    detail: "/failed-projects/playquote",
  },
  {
    key: "blockcert",
    logo: blockcertLogo,
    name: "Blockcert",
    summary:
      "A decentralized application (dapp) for certifying other dapps, with permanent certificates stored on the Arweave permaweb.",
    detail: "/failed-projects/blockcert",
  },
];

const skillGroups = [
  {
    name: "Languages",
    skills: [
      "TypeScript",
      "Python",
      "JavaScript",
      "Java",
      "HTML",
      "CSS",
      "C++",
    ],
  },
  {
    name: "Databases",
    skills: ["DynamoDB", "PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  },
  {
    name: "Cloud & frameworks",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "S3",
      "SNS",
      "SQS",
      "Route 53",
      "Systems Manager",
      "React",
      "Flask",
      "Spring Boot",
      "JPA",
    ],
  },
  { name: "Tools", skills: ["Git", "Linux", "Postman", "VS Code"] },
];

const experience = [
  {
    logo: AMAZON,
    org: "Amazon",
    location: "Seattle, WA",
    roles: [
      {
        title: "Software Development Engineer II",
        dates: "Jun 2025 – Present",
      },
      {
        title: "Software Development Engineer I",
        dates: "Jan 2023 – Jun 2025",
        highlights: [
          "Led AMS case routing in GovCloud, fixing routing for 142 cases across 43 accounts and eliminating SLA violations.",
          "Increased Census API burst-limit capacity by 82.2% by standardizing API key distribution.",
          "Fixed ACL bypass vulnerabilities in the AMS Connector for ServiceNow, enabling Yokohama certification.",
          "Led incident response for a Chronos SIR offboarding issue, protecting 177 accounts from security-monitoring gaps.",
        ],
      },
      {
        title: "Software Development Engineer Intern (AWS)",
        dates: "May 2022 – Aug 2022",
        highlights: [
          "Built end-to-end automation that raises alarms during outages and notifies affected customers.",
          "Designed an automated banner display architecture on Lambda, DynamoDB, S3, Route 53, SNS, and SQS.",
        ],
      },
    ],
  },
  {
    logo: WSU,
    org: "Washington State University",
    location: "Pullman, WA",
    roles: [
      { title: "Teaching Assistant", dates: "Sep 2022 – Dec 2022" },
      {
        title: "Graduate Developer, Biological Systems Engineering",
        dates: "Oct 2021 – May 2022",
        highlights: [
          "Built a Spring Boot and Hibernate tool that finds the closest analog of a county's vegetable production, improving performance by 21%.",
        ],
      },
      {
        title:
          "Graduate Student Developer, Smart Grid Demonstration and Research Investigation Lab",
        dates: "Feb 2021 – Oct 2021",
        highlights: [
          "Built a React, Flask, and PostgreSQL app that detects voltage and power fluctuations in Washington State's power grid.",
        ],
      },
    ],
  },
  {
    logo: CYBAGE,
    org: "Cybage Software",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Software Developer",
        dates: "Jul 2018 – Dec 2020",
        highlights: [
          "Built role-based REST APIs (Spring Boot, JPA) and React screens for a fleet management portal, working across four teams.",
        ],
      },
    ],
  },
  {
    logo: DRDO,
    org: "Defence Research and Development Organisation",
    location: "Pune, India",
    roles: [{ title: "Research Intern", dates: "Jun 2017 – May 2018" }],
  },
];

const education = [
  {
    logo: WSU,
    org: "Washington State University",
    location: "Pullman, WA",
    roles: [
      {
        title: "Master of Science in Computer Science",
        dates: "Jan 2021 – Dec 2022",
      },
    ],
  },
  {
    logo: MIT,
    org: "Maharashtra Institute of Technology",
    location: "Pune, India",
    roles: [
      {
        title: "Bachelor of Engineering in Computer Engineering",
        dates: "Aug 2014 – May 2018",
      },
    ],
  },
];

const sections = [
  { id: "projects", label: "Projects" },
  { id: "experiments", label: "Experiments" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/pillieshwar",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pillieshwar",
    icon: <LinkedInIcon />,
  },
  {
    label: "Email",
    href: "mailto:eshwarpilli@gmail.com",
    icon: <EmailOutlinedIcon />,
  },
];

function Section({ id, title, live, first, children }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        scrollMarginTop: { xs: 112, sm: 120 },
        py: { xs: 3, md: 4 },
        borderTop: first ? "none" : "1px solid #eee",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 3,
        }}
      >
        {live && <LiveDot variant="dot" overlap="circular" sx={{ mx: 0.5 }} />}
        {title}
      </Typography>
      {children}
    </Box>
  );
}

// Share of the tile's inner area each logo should cover. Sizing by area instead of
// fitting to the box keeps wide wordmarks from looking tiny next to square marks.
const LOGO_AREA = 0.7;

function logoBox(aspect) {
  let w = Math.sqrt(LOGO_AREA * aspect);
  let h = Math.sqrt(LOGO_AREA / aspect);
  const overflow = Math.max(w, h, 1);
  w /= overflow;
  h /= overflow;
  return { width: `${w * 100}%`, height: `${h * 100}%` };
}

function LogoTile({ src, alt }) {
  const [aspect, setAspect] = React.useState(null);
  return (
    <Box
      sx={{
        flexShrink: 0,
        alignSelf: "flex-start", // keep the tile square instead of stretching to the text height
        width: { xs: 56, sm: 72, md: 80 },
        height: { xs: 56, sm: 72, md: 80 },
        p: { xs: 0.75, sm: 1 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={(e) =>
          setAspect(
            e.currentTarget.naturalWidth / e.currentTarget.naturalHeight,
          )
        }
        sx={{
          objectFit: "contain",
          borderRadius: "12%",
          // drop-shadow follows the logo's outline (backgrounds are transparent), unlike box-shadow
          filter:
            "drop-shadow(0 1px 1px rgba(0,0,0,0.12)) drop-shadow(0 4px 8px rgba(0,0,0,0.12))",
          ...(aspect ? logoBox(aspect) : { width: "100%", height: "100%" }),
        }}
      />
    </Box>
  );
}

function LogoRow({ logo, alt, children }) {
  return (
    <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 }, mb: 4 }}>
      <LogoTile src={logo} alt={alt} />
      <Box sx={{ minWidth: 0, flex: 1 }}>{children}</Box>
    </Box>
  );
}

function ProjectRow({ project }) {
  const category = projectDetails[project.key]?.category;
  const titleLinkProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : { component: Link, to: project.detail };
  return (
    <LogoRow logo={project.logo} alt={`${project.name} logo`}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          mb: 1,
        }}
      >
        <Typography variant="h3">
          <Box
            component="a"
            {...titleLinkProps}
            sx={{
              color: "text.primary",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              "&:hover": { color: ACCENT },
            }}
          >
            {project.name}
            {project.url && (
              <OpenInNewIcon
                sx={{ fontSize: "1em", color: ACCENT }}
                aria-label="opens in a new tab"
              />
            )}
          </Box>
        </Typography>
        {category && <Chip label={category} size="small" />}
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {project.summary}
      </Typography>
      <Box
        component={Link}
        to={project.detail}
        sx={{
          typography: "body2",
          color: ACCENT,
          fontWeight: 600,
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        View details →
      </Box>
    </LogoRow>
  );
}

function TimelineEntry({ entry }) {
  const grouped = entry.roles.length > 1;
  return (
    <LogoRow logo={entry.logo} alt={`${entry.org} logo`}>
      <Typography variant="h3">{entry.org}</Typography>
      <Typography
        variant="caption"
        component="p"
        color="text.secondary"
        sx={{ mb: 1.5 }}
      >
        {entry.location}
      </Typography>
      <Box
        sx={{
          borderLeft: grouped ? "2px solid #e0e0e0" : "none",
          pl: grouped ? 2 : 0,
        }}
      >
        {entry.roles.map((role) => (
          <Box key={role.title} sx={{ mb: 2, "&:last-child": { mb: 0 } }}>
            <Typography variant="subtitle1">{role.title}</Typography>
            <Typography variant="caption" component="p" color="text.secondary">
              {role.dates}
            </Typography>
            {role.highlights && (
              <Box
                component="ul"
                sx={{
                  m: 0,
                  mt: 1,
                  pl: 2.5,
                  typography: "body2",
                  color: "text.secondary",
                }}
              >
                {role.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </LogoRow>
  );
}

function Profile() {
  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      <Box
        component="img"
        src={EshwarNagPilli}
        alt="Eshwar Nag Pilli"
        sx={{
          width: { xs: 180, sm: 220 },
          aspectRatio: "1 / 1",
          objectFit: "cover",
          mx: "auto",
          mb: 3,
        }}
      />
      <Typography variant="h1">Eshwar Nag Pilli</Typography>
      <Typography variant="subtitle2" sx={{ color: ACCENT, mt: 0.5, mb: 2.5 }}>
        Software Development Engineer II at{" "}
        <Box
          component="img"
          src={AMAZON}
          alt="Amazon"
          sx={{
            display: "inline-block",
            height: 16,
            width: "auto",
            verticalAlign: "-4px",
            ml: 0.5,
          }}
        />
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 2 }}>
        <Button
          variant="contained"
          disableElevation
          startIcon={<CalendarMonthIcon />}
          href="https://cal.com/eshwarpilli/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call
        </Button>
        <Button
          variant="outlined"
          startIcon={<DescriptionOutlinedIcon />}
          href="/Eshwar_2025_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View resume
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 3 }}>
        {contactLinks.map((c) => (
          <IconButton
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={c.label}
            sx={{ color: "text.secondary", "&:hover": { color: ACCENT } }}
          >
            {c.icon}
          </IconButton>
        ))}
      </Box>
      <Typography color="text.secondary" variant="body2" sx={{ mb: 1.5 }}>
        SDE II at Amazon building reliable backend services on AWS. Strong in
        data structures, algorithms, distributed systems, and web development. I
        like simple designs, strong tests, and fast feedback loops.
      </Typography>
      <Typography color="text.secondary" variant="body2">
        I am also startup-curious. I enjoy validating small problems, shipping
        lightweight prototypes, and learning from users. My personal goal is
        simple: make something that improves life by even 0.1%, then keep
        compounding.
      </Typography>
    </Box>
  );
}

function SectionNav() {
  return (
    <Box
      component="nav"
      aria-label="Page sections"
      sx={{
        position: "sticky",
        top: { xs: 56, sm: 64 },
        zIndex: 2,
        bgcolor: "#fff",
        borderBottom: "1px solid #eee",
        display: "flex",
        gap: 0.5,
        overflowX: "auto",
        py: 1,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {sections.map((s) => (
        <Button
          key={s.id}
          href={`#${s.id}`}
          size="small"
          sx={{
            color: "text.secondary",
            flexShrink: 0,
            minWidth: 0,
            px: 1.5,
          }}
        >
          {s.label}
        </Button>
      ))}
    </Box>
  );
}

export default function Index() {
  const { hash } = useLocation();

  // Router navigation doesn't scroll to #anchors, e.g. "All projects" -> /#experiments.
  React.useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <Box sx={{ display: { md: "flex" }, alignItems: "flex-start" }}>
      <Box
        component="aside"
        sx={{
          width: { md: "25%" },
          minWidth: { md: 300 },
          flexShrink: 0,
          position: { md: "sticky" },
          top: { md: 64 },
          maxHeight: { md: "calc(100vh - 64px)" },
          overflowY: { md: "auto" },
          borderRight: { md: "1px solid #e0e0e0" },
          borderBottom: { xs: "1px solid #e0e0e0", md: "none" },
        }}
      >
        <Profile />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0, px: { xs: 1, sm: 3, md: 5 } }}>
        <SectionNav />

        <Section id="projects" title="Live projects" live first>
          {liveProjects.map((p) => (
            <ProjectRow key={p.key} project={p} />
          ))}
        </Section>

        <Section id="experiments" title="Past experiments">
          {experiments.map((p) => (
            <ProjectRow key={p.key} project={p} />
          ))}
        </Section>

        <Section id="skills" title="Skills">
          {skillGroups.map((g) => (
            <Box key={g.name} sx={{ mb: 2.5 }}>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ display: "block", mb: 1 }}
              >
                {g.name}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {g.skills.map((skill) => (
                  <Chip key={skill} label={skill} />
                ))}
              </Box>
            </Box>
          ))}
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((e) => (
            <TimelineEntry key={e.org} entry={e} />
          ))}
        </Section>

        <Section id="education" title="Education">
          {education.map((e) => (
            <TimelineEntry key={e.org} entry={e} />
          ))}
        </Section>
      </Box>
    </Box>
  );
}
