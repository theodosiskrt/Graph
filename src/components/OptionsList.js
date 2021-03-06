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
  setSelDataYear,
} from "../store/actions";

const styles = {
  list: {
    backgroundColor: "#fff",
    zIndex: 0,
    minHeight: "45em",
  },
  selected: {
    backgroundColor: "#ddd",
    "&:hover": {
      backgroundColor: "#bbb",
    },
  },
  unselected: {
    backgroundColor: "#fff",
  },
};

const OptionsList = ({ listItems, singleChoice, storeName, listTitle }) => {
  const selData = useSelector((state) => state.selectedData[storeName]);

  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    if (!singleChoice)
      if (selData.includes(item.name)) dispatch(removeSelDataName(item.name));
      else dispatch(addSelDataName(item.name));
    else dispatch(setSelDataYear(selData === item.name ? "" : item.name));
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
            <Grid item xs={9}>
              {listTitle}
            </Grid>
            {!singleChoice && (
              <>
                <Grid item xs={1.5}>
                  <Tooltip title="Select All" placement="top">
                    <IconButton onClick={() => handleSetSelNames(true)}>
                      <Done />
                    </IconButton>
                  </Tooltip>
                </Grid>
                <Grid item xs={1.5}>
                  <Tooltip title="Deselect All" placement="top">
                    <IconButton onClick={() => handleSetSelNames(false)}>
                      <Clear />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </>
            )}
          </Grid>
        </ListSubheader>
      }
    >
      {listItems.map((item) => {
        return (
          <ListItem
            key={item.id}
            disablePadding
            sx={selData.includes(item.name) ? styles.selected : {}}
          >
            <ListItemButton onClick={() => handleItemClick(item)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default OptionsList;
