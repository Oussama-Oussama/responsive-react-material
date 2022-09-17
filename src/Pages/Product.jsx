import React from "react";
import Card from "../Component/Card";
import { Grid, Box } from "@mui/material";
import awej from "../Images/3awej.jfif";
import ata3 from "../Images/9ta3.jfif";
import compler from "../Images/compler.jfif";
import klimonate from "../Images/klimonate.jfif";
import lacrive from "../Images/lacrive.jfif";
import mfateh from "../Images/mfateh.jfif";
import nhascut from "../Images/nhascut.jfif";
import pince from "../Images/pince.jfif";
import reglage from "../Images/reglage.jfif";
import laviseuse from "../Images/laviseuse.jfif";
import ridgid from "../Images/ridgid.jfif";
import sarah from "../Images/sarah.jfif";
import tchina from "../Images/tchina.jfif";

function Product() {
  const items = [
    {
      src:  awej ,
      title: "Awej",
    },
    {
      src:  ata3 ,
      title: "toolcut",
    },
    {
      src:  compler ,
      title: "All you need",
    },
    {
      src:  klimonate ,
      title: "klimonate",
    },
    {
      src:  lacrive ,
      title: "La crive",
    },
    {
      src:  mfateh ,
      title: "Mfateh",
    },
    {
      src:  nhascut ,
      title: "Nhas cut",
    },
    {
      src:  pince ,
      title: "Pince",
    },
    {
      src:  reglage ,
      title: "Reglage",
    },
    {
      src:  laviseuse ,
      title: "La viseuse",
    },
    {
      src:  ridgid ,
      title: "Ridgid",
    },
    {
      src:  sarah ,
      title: "Sarrah",
    },
    {
      src:  tchina ,
      title: "easetool",
    },
  ];
  return (
    <Box pt={10} pb={10}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        {items.map((item, i) => (
          <Grid item key={i} lg={3} md={4} sm={6} xs={12}>
            <Card src={item.src} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Product;
