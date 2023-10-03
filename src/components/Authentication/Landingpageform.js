// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import React from "react";
import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import { Grid } from "@mui/material";

function Landingpageform() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <div className="form" style={{ padding: "10px", width: "400px" }}>
        <Paper elevation={10} style={{ padding: "10px", paddingBottom: "60px" }} sx={{borderRadius:"30px"}}>
          <div align="center">
            {checked ? (
              <Chip
                icon={<LockIcon />}
                label="Log In"
                variant="outlined"
                color="info"
              />
            ) : (
              <Chip
                icon={<FaceIcon />}
                label="Sign Up"
                variant="outlined"
                color="info"
              />
            )}
            <br />

            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          {checked ? <Login /> : <Signup />}
        </Paper>
      </div>
    </Grid>
  );
}

export default Landingpageform;
