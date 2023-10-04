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
          <Typography>What is the history of Houston?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Houston, Texas, has a storied history marked by growth and
            transformation. Founded in 1836 by real estate entrepreneurs
            Augustus Chapman Allen and John Kirby Allen, it was named after Sam
            Houston, a Texas Revolution hero. The city played a pivotal role in
            the Texas Revolution, leading to Texas gaining independence from
            Mexico in 1836. Houston's development surged with the discovery of
            oil at Spindletop, establishing it as an energy center. The
            construction of the Houston Ship Channel further fueled growth, and
            today, Houston is a thriving, diverse metropolis with a rich history
            that encompasses everything from space exploration to civil rights
            milestones.
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
            Enjoy the city's pleasant weather in the fall and spring, ensuring a
            comfortable and enjoyable stay. While Houston's mild winters make it
            a year-round destination, many prefer the fall and spring seasons
            when the weather is pleasant and outdoor activities are enjoyable
            without the scorching summer heat.
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
            Indulge your taste buds with Houston's culinary gems. Satisfy your
            Tex-Mex cravings at acclaimed restaurants like El Tiempo Cantina and
            Pappadeaux Seafood Kitchen, or dive into mouthwatering barbecue at
            Gatlin's BBQ and The Pit Room. Don't forget to reserve your table in
            advance to savor the flavors of Houston.
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
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can I navigate the city with ease?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Explore Houston effortlessly by considering your transportation
            options. Ride the convenient METRORail for downtown adventures, rent
            a car for flexibility, or book a ride with popular services like
            Uber and Lyft. Travel at your own pace and convenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            What are the must-visit attractions in Houston?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dive into a world of possibilities as you explore iconic
            destinations like Space Center Houston, where the mysteries of outer
            space come alive, and the Houston Museum of Natural Science, where
            you'll uncover the wonders of our planet. Don't miss the cultural
            treasures of the Museum of Fine Arts, the wildlife wonders at the
            Houston Zoo, and an immersive journey through space at the renowned
            NASA Johnson Space Center.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
