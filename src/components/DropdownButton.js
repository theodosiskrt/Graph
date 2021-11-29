import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { setPlotType } from "../store/actions";

const styles = {
  button: {
    color: "#e8e8e8",
    "&:hover": {
      backgroundColor: "#222",
    },
    ":disabled": {
      color: "#777",
    },
  },
  dropdown: {
    zIndex: 10000,
    backgroundColor: "#0d0d0d",
    color: "#e8e8e8",
  },
  dropdownItem: {
    "&:hover": {
      backgroundColor: "#222",
    },
  },
};

const DropdownButton = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = ({ target }, type) => {
    type && dispatch(setPlotType(type));
    if (anchorRef.current && anchorRef.current.contains(target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        disableRipple
        ref={anchorRef}
        onClick={handleToggle}
        sx={styles.button}
      >
        Plot Type
        <KeyboardArrowDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "left top",
            }}
          >
            <Paper sx={styles.dropdown}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  <MenuItem
                    onClick={(e) => handleClose(e, "scatter")}
                    sx={styles.dropdownItem}
                  >
                    Scatter
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => handleClose(e, "bar")}
                    sx={styles.dropdownItem}
                  >
                    Bar
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
export default DropdownButton;
