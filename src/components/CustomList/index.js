import React from "react";
import {
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: 360
  },
  paperStyle: {
    padding: theme.spacing(3),
    borderRadius: "12px"
  },

  textFieldStyle: {
    width: "100%"
  },

  buttonStyle: {
    display: "flex",
    marginTop: theme.spacing(2),
    justifyContent: "flex-end"
  }
}));

function CustomList(props) {
  const classes = useStyles();

  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event) {
    event.preventDefault();
    
    if (inputText === "") {
      alert("Please enter something");
    } else {
      props.handleClick(inputText);
      setInputText("");
    }
  }

  return (
    <form onSubmit={addItem} className={classes.root}>
      <Paper className={classes.paperStyle}>
        <TextField
          onChange={handleChange}
          label={props.label}
          variant="outlined"
          value={inputText}
          className={classes.textFieldStyle}
        />
        <FormControl className={classes.buttonStyle}>
          <Button type='submit' variant="contained" color="primary">
            Add to List
          </Button>
        </FormControl>
        <List>
          {props.listData.map((val) => (
            <ListItem key={val}>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </form>
  );
}

export default React.memo(CustomList, (prevProps, nextProps) => prevProps.listData?.length === nextProps.listData?.length);
