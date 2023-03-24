import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EshwarNagPilli from "./../images/Eshwar_Nag_Pilli.jpeg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container pt={2} spacing={10}>
          <Grid xs={12} md={4}>
            <Card sx={{ maxWidth: 420 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={EshwarNagPilli}
                title="Eshwar Nag Pilli"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Eshwar Nag Pilli
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  Software Development Engineer(SDE) at Amazon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dedicated, hardworking, energetic graduate student studying
                  Masters in Computer Science at Washington State University.
                  Skilled in data structures, algorithms, problem-solving, and
                  web development. Passionate about Innovation.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <Typography gutterBottom variant="h6" component="div">
                  <Link
                    to="https://terodoc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terodoc
                  </Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A platform that provides a comprehensive library of Statement
                  of Purpose (SOPs) that have been approved and accepted by
                  universities. It offers a user-friendly interface for
                  accessing and customizing SOPs, ensuring that they meet the
                  specific needs of each institution.
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography gutterBottom variant="h6" component="div">
                  Salestat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  SaleStat is a software product which helps the medical company
                  to analyse their sales in a graphical view and get a clear
                  picture of their monthly and yearly sales status
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography gutterBottom variant="h6" component="div">
                  Terodoc
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A platform that provides a comprehensive library of Statement
                  of Purpose (SOPs) that have been approved and accepted by
                  universities. It offers a user-friendly interface for
                  accessing and customizing SOPs, ensuring that they meet the
                  specific needs of each institution.
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography gutterBottom variant="h6" component="div">
                  Salestat
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  SaleStat is a software product which helps the medical company
                  to analyse their sales in a graphical view and get a clear
                  picture of their monthly and yearly sales status
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Typography gutterBottom variant="h6" component="div">
                  Terodoc
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A platform that provides a comprehensive library of Statement
                  of Purpose (SOPs) that have been approved and accepted by
                  universities. It offers a user-friendly interface for
                  accessing and customizing SOPs, ensuring that they meet the
                  specific needs of each institution.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </p>
  );
}
