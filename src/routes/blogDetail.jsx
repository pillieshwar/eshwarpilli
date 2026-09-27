import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogPosts } from "../jsonData/blogPosts";
import { renderRichText } from "../components/RichText";
import { Box, Button, Typography, Chip, CardMedia } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find((post) => post.slug === slug);
  // Older links used the numeric id (/blog/4); send them to the title URL.
  const legacy = !blog && blogPosts.find((post) => String(post.id) === slug);

  React.useEffect(() => {
    if (legacy) {
      navigate(`/blog/${legacy.slug}`, { replace: true });
    } else if (!blog) {
      navigate("/blogs", { replace: true });
    }
  }, [blog, legacy, navigate]);

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
            // Natural aspect ratio: wide product screenshots must not be cropped.
            height: "auto",
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            mb: 4,
          }}
        />

        {renderRichText(blog.content, blog.title)}

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
