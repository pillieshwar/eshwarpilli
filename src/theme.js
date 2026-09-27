import { createTheme } from "@mui/material/styles";

// Single accent color used for links, buttons, and highlights across the site.
export const ACCENT = "#1976d2";

const FONT_FAMILY =
  '"Inter Variable", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

// Matches theme.breakpoints.up("sm"); written out because typography is defined
// in the same createTheme call that creates the breakpoints.
const up = "@media (min-width:600px)";

/*
 * Type scale. Every piece of text on the site uses one of these variants;
 * pages should not set fontSize/fontWeight themselves.
 *
 *   h1        page title (profile name, "Blog", post title, project name)
 *   h2        section title ("Live projects", "Experience", post headings)
 *   h3        item title (project name, company, blog card title)
 *   subtitle1 emphasized line (job title, role title, lead paragraph)
 *   body1     reading text (descriptions, post body)
 *   body2     compact text (bio, details, lists)
 *   caption   metadata (dates, locations, read time)
 *   overline  small label (skill groups, "Project details")
 *
 * Weights: 400 regular, 500 medium, 600 semibold, 700 bold.
 */
export const theme = createTheme({
  palette: {
    primary: { main: ACCENT },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
      disabled: "#9ca3af",
    },
    divider: "#e5e7eb",
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: FONT_FAMILY,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      [up]: { fontSize: "2.25rem" },
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: "-0.015em",
      [up]: { fontSize: "1.5rem" },
    },
    h3: {
      fontSize: "1.0625rem",
      fontWeight: 600,
      lineHeight: 1.35,
      letterSpacing: "-0.01em",
      [up]: { fontSize: "1.1875rem" },
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.45,
    },
    subtitle2: {
      fontSize: "0.9375rem",
      fontWeight: 500,
      lineHeight: 1.45,
    },
    body1: {
      fontSize: "0.9375rem",
      fontWeight: 400,
      lineHeight: 1.7,
      [up]: { fontSize: "1rem" },
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.65,
    },
    caption: {
      fontSize: "0.8125rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
      letterSpacing: 0,
      textTransform: "none",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        // Section/item titles are real headings; subtitles are plain paragraphs.
        variantMapping: { subtitle1: "p", subtitle2: "p", overline: "p" },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontSize: "0.8125rem", fontWeight: 500 },
        sizeSmall: { fontSize: "0.75rem" },
      },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: 8 } },
    },
  },
});
