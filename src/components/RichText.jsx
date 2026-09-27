import * as React from "react";
import { Box, Typography } from "@mui/material";

// Renders **bold** spans and [text](url) links inside a line of post text.
function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <Box
          component="strong"
          key={i}
          sx={{ fontWeight: 600, color: "text.primary" }}
        >
          {part.slice(2, -2)}
        </Box>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = /^https?:/.test(link[2]);
      return (
        <Box
          component="a"
          key={i}
          href={link[2]}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          sx={{ color: "primary.main", fontWeight: 600, fontStyle: "normal" }}
        >
          {link[1]}
        </Box>
      );
    }
    return part;
  });
}

// Turns lightweight markdown (#/##/### headings, "- " lists, **bold**,
// [text](url) links, ![caption](src) images, *italic* lines, blank-line
// paragraphs) into themed blocks.
// Used by blog posts and project descriptions.
export function renderRichText(content, title) {
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
    const image = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      blocks.push(
        <Box component="figure" key={index} sx={{ mx: 0, my: 4 }}>
          {/* Wide screenshots are small in the reading column; click opens full size. */}
          <Box
            component="a"
            href={image[2]}
            target="_blank"
            rel="noopener noreferrer"
            title="Open full size"
            sx={{ display: "block", cursor: "zoom-in" }}
          >
            <Box
              component="img"
              src={image[2]}
              alt={image[1]}
              loading="lazy"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 8px 24px rgba(17, 24, 39, 0.06)",
              }}
            />
          </Box>
          {image[1] && (
            <Typography
              component="figcaption"
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 1, textAlign: "center" }}
            >
              {image[1]}
            </Typography>
          )}
        </Box>,
      );
      return;
    }
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
          {renderInline(line.slice(1, -1))}
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
