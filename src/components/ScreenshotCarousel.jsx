import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const INTERVAL_MS = 5000;

/**
 * Auto-advancing screenshot carousel.
 * - Slides are a CSS scroll-snap row, so touch swipe and trackpad scrolling work natively.
 * - Auto-advance pauses on hover/focus and is disabled for prefers-reduced-motion.
 */
export default function ScreenshotCarousel({ slides }) {
  const trackRef = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const goTo = React.useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track) return;
      const next = (i + slides.length) % slides.length;
      track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
    },
    [slides.length],
  );

  // Keep the dots in sync with manual swipes as well as auto-advance.
  const onScroll = () => {
    const track = trackRef.current;
    if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  React.useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduceMotion || slides.length < 2) return undefined;
    const timer = setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [index, paused, goTo, slides.length]);

  const arrowSx = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    bgcolor: "rgba(255,255,255,0.9)",
    boxShadow: "0 2px 8px rgba(17,24,39,0.15)",
    "&:hover": { bgcolor: "#fff" },
    display: { xs: "none", sm: "inline-flex" },
  };

  return (
    <Box
      component="section"
      aria-roledescription="carousel"
      aria-label="Product screenshots"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "#f4f4f5",
          boxShadow: "0 12px 32px rgba(17, 24, 39, 0.08)",
        }}
      >
        <Box
          ref={trackRef}
          onScroll={onScroll}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {slides.map((slide, i) => (
            <Box
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${slide.caption}`}
              sx={{
                flex: "0 0 100%",
                scrollSnapAlign: "start",
                aspectRatio: { xs: "16 / 9", sm: "21 / 9" }, // wide dashboards leave less empty space
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 1, sm: 2 },
              }}
            >
              <Box
                component="img"
                src={slide.src}
                alt={slide.caption}
                loading={i === 0 ? "eager" : "lazy"}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  borderRadius: 1.5,
                }}
              />
            </Box>
          ))}
        </Box>
        <IconButton
          aria-label="Previous screenshot"
          onClick={() => goTo(index - 1)}
          sx={{ ...arrowSx, left: 12 }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          aria-label="Next screenshot"
          onClick={() => goTo(index + 1)}
          sx={{ ...arrowSx, right: 12 }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mt: 1.5,
        }}
      >
        <Typography variant="caption" color="text.secondary" aria-live="polite">
          {slides[index]?.caption}
        </Typography>
        <Box sx={{ display: "flex", gap: 0.75, flexShrink: 0 }}>
          {slides.map((slide, i) => (
            <Box
              key={slide.src}
              component="button"
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              sx={{
                width: i === index ? 20 : 8,
                height: 8,
                p: 0,
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                bgcolor: i === index ? "primary.main" : "#d1d5db",
                transition: "width 0.2s, background-color 0.2s",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
