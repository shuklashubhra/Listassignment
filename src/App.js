import React from "react";
import { Container, CssBaseline } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AppContainer from "./container";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(2)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.main}>
        <AppContainer />
      </Container>
    </React.Fragment>
  );
}

export default App;
