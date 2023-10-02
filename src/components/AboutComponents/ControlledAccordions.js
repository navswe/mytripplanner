import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        marginBottom: 10,
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            What are the must-visit attractions in Houston?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Visitors often ask for recommendations on the top attractions to
            explore in Houston. Popular choices include the Space Center
            Houston, the Museum District with its diverse cultural institutions,
            the Houston Zoo, and the historic NASA Johnson Space Center.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What's the best time to visit Houston?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Travelers frequently inquire about the ideal time to visit Houston.
            While Houston's mild winters make it a year-round destination, many
            prefer the fall and spring seasons when the weather is pleasant and
            outdoor activities are enjoyable without the scorching summer heat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How is Houston's food scene?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Food enthusiasts often want to know about Houston's culinary
            offerings, especially Tex-Mex and barbecue. Visitors can savor
            Tex-Mex delights at places like Ninfa's on Navigation or indulge in
            mouthwatering barbecue at joints like Gatlin's BBQ or Killen's
            Barbecue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Are there any unique events or festivals in Houston during my visit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Visitors often seek information about local events and festivals to
            enhance their experience. Houston hosts a variety of events
            throughout the year, including the Houston Livestock Show and Rodeo,
            the Houston Art Car Parade, and the Bayou City Art Festival, which
            showcase the city's diverse culture and creativity.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
