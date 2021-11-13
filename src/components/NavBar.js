import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";

import DropdownButton from "./DropdownButton";

const styles = {
  navbar: {
    backgroundColor: "#0d0d0d",
    color: "#e8e8e8",
    padding: "0.5em",
  },
  button: {
    padding: "0.2em",
    "&:hover": {
      backgroundColor: "#222",
    },
  },
};

const NavBar = () => {
  return (
    <Grid container sx={styles.navbar} alignItems="center">
      <Grid item xs={1}>
        <Typography variant="h4">Graph</Typography>
      </Grid>
      <Grid item xs={1}>
        <DropdownButton />
      </Grid>
      <Grid item xs={9.7} />
      <Grid item xs={0.3}>
        <IconButton color="inherit">
          <Settings sx={styles.button} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NavBar;
