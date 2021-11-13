import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemButton,
  IconButton,
  Grid,
  Tooltip,
} from "@mui/material";
import { Done, Clear } from "@mui/icons-material";

import {
  addSelDataName,
  removeSelDataName,
  setSelDataNames,
} from "../store/actions";

const styles = {
  list: {
    backgroundColor: "#fff",
    marginLeft: "2em",
    zIndex: 0,
    minHeight: "50em",
  },
  selected: {
    backgroundColor: "#ddd",
    "&:hover": {
      backgroundColor: "#bbb",
    },
  },
};

const MultichoiceList = ({ listItems }) => {
  const selDataNames = useSelector((state) => state.selDataNames);

  const dispatch = useDispatch();

  const handleItemClick = ({ name }) => {
    if (selDataNames.includes(name)) dispatch(removeSelDataName(name));
    else dispatch(addSelDataName(name));
  };

  const handleSetSelNames = (isSelectAll) => {
    const arrayOfNames = [];
    if (isSelectAll) for (const item of listItems) arrayOfNames.push(item.name);
    dispatch(setSelDataNames(arrayOfNames));
  };

  return (
    <List
      dense
      sx={styles.list}
      subheader={
        <ListSubheader>
          <Grid container>
            <Grid xs={9}>Data</Grid>
            <Grid xs={1.5}>
              <Tooltip title="Select All" placement="top">
                <IconButton onClick={() => handleSetSelNames(true)}>
                  <Done />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid xs={1.5}>
              <Tooltip title="Deselect All" placement="top">
                <IconButton onClick={() => handleSetSelNames(false)}>
                  <Clear />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </ListSubheader>
      }
    >
      {listItems.map((item) => (
        <ListItem
          key={item.id}
          disablePadding
          sx={selDataNames.includes(item.name) && styles.selected}
        >
          <ListItemButton onClick={() => handleItemClick(item)}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MultichoiceList;
