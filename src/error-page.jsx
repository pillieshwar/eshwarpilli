import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box id="error-page" sx={{ px: 2, textAlign: "center" }}>
      <Typography variant="h1" sx={{ mb: 1.5 }}>
        Oops!
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ mb: 3 }}>
        {error.statusText || error.message}
      </Typography>
      <Button variant="contained" disableElevation component={Link} to="/">
        Back to home
      </Button>
    </Box>
  );
}
