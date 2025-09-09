import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  AppBar,
  Toolbar,
  CardMedia,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
    <Box sx={{ flexGrow: 1, maxWidth: "100%", overflow: "hidden" }}>
      {/* Header */}
      <AppBar
        sx={{
          position: "sticky",
          top: 0,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            sx={{ flex: 1 }}
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              display: { xs: "none", sm: "block" },
            }}
          >
            {blog.title}
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Blog Content */}
      <Box sx={{ maxWidth: "800px", mx: "auto", p: { xs: 2, sm: 3, md: 4 } }}>
        {/* Blog Header */}
        <Box sx={{ mb: 4 }}>
          <Chip
            label={blog.category}
            size="small"
            sx={{
              mb: 2,
              backgroundColor: "rgba(102, 126, 234, 0.1)",
              color: "#667eea",
              fontWeight: 500,
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            {blog.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
              mb: 3,
              flexWrap: "wrap",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              By {blog.author}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <CalendarTodayIcon
                sx={{ fontSize: "1rem", color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                {blog.date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <AccessTimeIcon
                sx={{ fontSize: "1rem", color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                {blog.readTime}
              </Typography>
            </Box>
          </Box>
          <CardMedia
            component="img"
            height="400"
            image={blog.image}
            alt={blog.title}
            sx={{ borderRadius: 2, mb: 3 }}
          />
        </Box>

        {/* Blog Content */}
        <Box
          sx={{
            "& h1, & h2, & h3, & h4, & h5, & h6": {
              fontWeight: 600,
              mb: 2,
              mt: 4,
              color: "text.primary",
            },
            "& h1": { fontSize: "2rem" },
            "& h2": { fontSize: "1.5rem" },
            "& h3": { fontSize: "1.25rem" },
            "& p": {
              mb: 2,
              lineHeight: 1.7,
              fontSize: "1rem",
            },
            "& ul, & ol": {
              mb: 2,
              pl: 3,
            },
            "& li": {
              mb: 1,
              lineHeight: 1.6,
            },
            "& strong": {
              fontWeight: 600,
            },
            "& em": {
              fontStyle: "italic",
              color: "text.secondary",
            },
            "& blockquote": {
              borderLeft: "4px solid #667eea",
              pl: 2,
              ml: 0,
              fontStyle: "italic",
              color: "text.secondary",
              mb: 2,
            },
          }}
        >
          {blog.content.split("\n").map((line, index) => {
            if (line.startsWith("# ")) {
              return (
                <Typography
                  key={index}
                  variant="h4"
                  component="h1"
                  sx={{ fontWeight: 600, mb: 2, mt: 4 }}
                >
                  {line.substring(2)}
                </Typography>
              );
            } else if (line.startsWith("## ")) {
              return (
                <Typography
                  key={index}
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: 600, mb: 2, mt: 3 }}
                >
                  {line.substring(3)}
                </Typography>
              );
            } else if (line.startsWith("### ")) {
              return (
                <Typography
                  key={index}
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600, mb: 2, mt: 3 }}
                >
                  {line.substring(4)}
                </Typography>
              );
            } else if (
              line.startsWith("*") &&
              line.endsWith("*") &&
              line.length > 2
            ) {
              return (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{
                    fontStyle: "italic",
                    color: "text.secondary",
                    mb: 2,
                  }}
                >
                  {line.substring(1, line.length - 1)}
                </Typography>
              );
            } else if (line.trim() === "") {
              return <br key={index} />;
            } else {
              return (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ mb: 2, lineHeight: 1.7 }}
                >
                  {line}
                </Typography>
              );
            }
          })}
        </Box>

        {/* Back to Blogs Button */}
        <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
          <IconButton
            onClick={handleBack}
            sx={{
              backgroundColor: "rgba(102, 126, 234, 0.1)",
              color: "#667eea",
              "&:hover": {
                backgroundColor: "rgba(102, 126, 234, 0.2)",
              },
              px: 3,
              py: 1,
            }}
          >
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Blogs
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
