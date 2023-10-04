import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ControlledAccordions from "../components/AboutComponents/ControlledAccordions";
import ImageCollage from "../components/AboutComponents/ImageCollage";

export default function About() {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{ width: 1 }}>
      <Typography variant="h4" component="h1" marginTop={2} color="primary">
        Space City Houston
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://365thingsinhouston.com/wp-content/uploads/2018/04/we-love-houston-1.jpg"
          height={400}
        />
        <ImageCollage />
      </Box>

      <Typography variant="h5" component="h4" marginTop={3} color="primary">
        Welcome to Houston, Texas – a city as diverse as it is dynamic!
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Typography component="p" marginY={2}>
          Nestled in the heart of the Lone Star State, Houston is a vibrant
          metropolis renowned for its warm Southern hospitality, world-class
          museums, and thriving cultural scene. Whether you're exploring the
          awe-inspiring Space Center Houston, indulging in delectable Tex-Mex
          cuisine, or strolling through the lush green spaces of Buffalo Bayou
          Park, there's something for everyone in this sprawling city. With a
          rich history rooted in space exploration, a thriving energy sector,
          and a thriving arts community, Houston is a destination that
          seamlessly blends tradition with innovation. Come experience the charm
          and excitement of Houston, where the possibilities are as boundless as
          the Texas sky.
        </Typography>
      </Box>

      <Typography variant="h5" component="h4" marginBottom={3} color="primary">
        Frequently Asked Questions
      </Typography>

      <ControlledAccordions />
    </Container>
  );
}
