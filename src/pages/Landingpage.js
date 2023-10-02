import React from "react";
import Landingpageform from "../components/Authentication/Landingpageform";
import { Container } from "@mui/material";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <Container className="container">
      <Landingpageform />
    </Container>
  );
};

export default Landingpage;
