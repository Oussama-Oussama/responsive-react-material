import React from "react";
import {
  Box,
  Typography,
  Tooltip,
  IconButton,
  Container,
  Link,
  Grid,
} from "@mui/material";

import {
  Call,
  Facebook,
  YouTube,
  WhatsApp,
  Twitter,
} from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Home() {
  const ways = [
    { title: "0555213396", icon: <Call color="success" fontSize="large" /> },
    { title: "PLMB DZ", icon: <Facebook color="primary" fontSize="large" /> },
    { title: "PLMB_DZ", icon: <YouTube color="error" fontSize="large" /> },
    {
      title: "+213555213396",
      icon: <WhatsApp color="success" fontSize="large" />,
    },
    { title: "Dz-PLMB", icon: <Twitter color="primary" fontSize="large" /> },
  ];
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us", "Locations"],
    },
    {
      title: "Features",
      description: [
        "Cool stuff",
        "Random feature",
        "Team feature",
        "Developer stuff",
        "Another one",
      ],
    },
    {
      title: "Resources",
      description: [
        "Resource",
        "Resource name",
        "Another resource",
        "Final resource",
      ],
    },
    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];
  
  return (
    <Box
      flex={5}
      p={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" mb={2} color="secondary" textAlign="center">
        Algerian Plumbing Tools
      </Typography>
      <Typography variant="h4" color="primary" mb={2}>
        with PLMB
      </Typography>
      <iframe
        style={{ marginBottom: 50, width: "80%", height: 300 }}
        src="https://www.youtube.com/embed/OekKI-8S500"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center" }}
      >
        Hi, we can help you here to find a job, a client, modern machines as you
        need just contact us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {ways.map((way, index) => (
          <Tooltip title={way.title} key={index}>
            <IconButton>{way.icon}</IconButton>
          </Tooltip>
        ))}
      </Box>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item} style={{
                    listStyle:"none",
                  }}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}

export default Home;
