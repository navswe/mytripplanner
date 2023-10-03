import React from "react";
import Landingpageform from "../components/Authentication/Landingpageform";
import { Container } from "@mui/material";
import "./Landingpage.css";
// import { useEffect } from "react";
// import WAVES from "vanta/src/vanta.waves";

const Landingpage = () => {
  // useEffect(() => {
  //   WAVES({
  //     el: "#vanta",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: 0x3f88,
  //   });
  // });
  return (
    <Container className="container" id="vanta">
      <Landingpageform />
    </Container>
  );
};

export default Landingpage;
