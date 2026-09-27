import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, Chip, CardMedia } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Renders **bold** spans inside a line of post text.
function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <Box
        component="strong"
        key={i}
        sx={{ fontWeight: 600, color: "text.primary" }}
      >
        {part.slice(2, -2)}
      </Box>
    ) : (
      part
    ),
  );
}

// Turns the post's lightweight markdown into themed blocks.
function renderContent(content, title) {
  const blocks = [];
  let list = null;
  const flushList = () => {
    if (list) {
      blocks.push(
        <Box
          component="ul"
          key={`list-${blocks.length}`}
          sx={{
            typography: "body1",
            color: "text.secondary",
            pl: 3,
            mt: 0,
            mb: 2.5,
          }}
        >
          {list}
        </Box>,
      );
      list = null;
    }
  };

  content.split("\n").forEach((raw, index) => {
    const line = raw.trim();
    if (line.startsWith("- ")) {
      list = list || [];
      list.push(
        <Box component="li" key={index} sx={{ mb: 0.75 }}>
          {renderInline(line.slice(2))}
        </Box>,
      );
      return;
    }
    flushList();
    if (line === "") return;
    if (line.startsWith("# ")) {
      // The post title is already shown above; skip a repeated top-level heading.
      if (line.slice(2) === title) return;
      blocks.push(
        <Typography key={index} variant="h2" sx={{ mt: 5, mb: 2 }}>
          {line.slice(2)}
        </Typography>,
      );
    } else if (line.startsWith("## ")) {
      blocks.push(
        <Typography key={index} variant="h2" sx={{ mt: 5, mb: 2 }}>
          {line.slice(3)}
        </Typography>,
      );
    } else if (line.startsWith("### ")) {
      blocks.push(
        <Typography key={index} variant="h3" sx={{ mt: 3.5, mb: 1.5 }}>
          {line.slice(4)}
        </Typography>,
      );
    } else if (line.startsWith("*") && line.endsWith("*") && line.length > 2) {
      blocks.push(
        <Typography
          key={index}
          variant="body1"
          color="text.secondary"
          sx={{
            fontStyle: "italic",
            borderLeft: "3px solid",
            borderColor: "primary.main",
            pl: 2,
            my: 3,
          }}
        >
          {line.slice(1, -1)}
        </Typography>,
      );
    } else {
      blocks.push(
        <Typography
          key={index}
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2.5 }}
        >
          {renderInline(line)}
        </Typography>,
      );
    }
  });
  flushList();
  return blocks;
}

export default function BlogDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  // If no blog data is available, redirect to blogs page
  React.useEffect(() => {
    if (!blog) {
      navigate("/blogs");
    }
  }, [blog, navigate]);

  if (!blog) {
    return null;
  }

  const handleBack = () => {
    navigate("/blogs");
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
      <Box
        component="article"
        sx={{
          maxWidth: 720,
          mx: "auto",
          px: { xs: 1, sm: 3 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Box
          component={Link}
          to="/blogs"
          sx={{
            typography: "body2",
            fontWeight: 600,
            color: "primary.main",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            mb: 3,
            "&:hover": { textDecoration: "underline" },
          }}
        >
          <ArrowBackIcon sx={{ fontSize: "1.1em" }} />
          All posts
        </Box>
        <br />
        <Chip
          label={blog.category}
          size="small"
          sx={{
            mb: 2,
            backgroundColor: "rgba(25, 118, 210, 0.1)",
            color: "primary.main",
          }}
        />
        <Typography variant="h1" sx={{ mb: 2 }}>
          {blog.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, sm: 3 },
            mb: 4,
            flexWrap: "wrap",
            color: "text.secondary",
          }}
        >
          <Typography variant="caption">By {blog.author}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: "1rem" }} />
            <Typography variant="caption">{blog.date}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: "1rem" }} />
            <Typography variant="caption">{blog.readTime}</Typography>
          </Box>
        </Box>
        <CardMedia
          component="img"
          image={blog.image}
          alt={blog.title}
          sx={{
            borderRadius: 3,
            mb: 4,
            aspectRatio: "16 / 9",
            objectFit: "cover",
          }}
        />

        {renderContent(blog.content, blog.title)}

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
          >
            Back to blogs
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
