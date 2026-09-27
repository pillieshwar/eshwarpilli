import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../jsonData/blogPosts";

export default function Blogs() {
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%", overflow: "hidden" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4, mt: 2 }}>
        <Typography variant="h1" sx={{ mb: 1.5 }}>
          Blog
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 600, mx: "auto" }}
        >
          Thoughts on software engineering, distributed systems, and building
          products that matter
        </Typography>
      </Box>

      {/* Blog Cards */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ px: { xs: 1, sm: 2 } }}
      >
        {blogPosts.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                },
              }}
              onClick={() => handleBlogClick(blog)}
            >
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip
                  label={blog.category}
                  size="small"
                  sx={{
                    mb: 2,
                    backgroundColor: "rgba(25, 118, 210, 0.1)",
                    color: "primary.main",
                  }}
                />
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    mb: 1.5,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {blog.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: "auto",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {blog.date}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <AccessTimeIcon
                      sx={{ fontSize: "0.9rem", color: "text.secondary" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {blog.readTime}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
