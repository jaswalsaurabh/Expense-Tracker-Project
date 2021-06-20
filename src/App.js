import React, { useEffect, useRef } from "react";
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import useStyles from "./styles.js";
import Main from "./components/Main/Main";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "0",
    message: "Welcome to Expense Tracker!",
    trigger: "1",
  },
  {
    id: "1",
    message: "My name is Sandy",
    trigger: "2",
  },
  {
    id: "2",
    message: "Can you tell me your name!",
    trigger: "3",
  },
  {
    id: "3",
    user: true,
    trigger: "4",
  },
  {
    id: "4",
    message: "Hi {previousValue}, nice to meet you!",
    trigger: "5",
  },
  {
    id: "5",
    message: "How I can help you?",
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    trigger: "7",
  },
  {
    id: "7",
    message: "Ok!",
    trigger: "8",
  },
  {
    id: "8",
    message: "You can go on this link, https://bit.ly/3wKmbP0",
    end: true,
  },
];

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
  return (
    <>
      <div>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
          </Grid>
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
        <div style={{ position: "absolute", right: 20, top: 300 }}>
          <ChatBot
            headerTitle="Your Support"
            customDelay={1000}
            floating
            speechSynthesis={{ enable: true, lang: "en" }}
            steps={steps}
          />
        </div>
      </div>
    </>
  );
};

export default App;
