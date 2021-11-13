import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Settings } from "@mui/icons-material";

import DropdownButton from "./DropdownButton";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  NavBar: {
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
}));

const NavBar = () => {
  const plotType = useSelector((state) => state.plotType);

  const classes = useStyles();
  return (
    <Grid container className={classes.NavBar} alignItems="center">
      <Grid item xs={1}>
        <Typography variant="h4">{plotType}</Typography>
      </Grid>
      <Grid item xs={1}>
        <DropdownButton />
      </Grid>
      <Grid item xs={9.7} />
      <Grid item xs={0.3}>
        <IconButton color="inherit">
          <Settings className={classes.button} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NavBar;
