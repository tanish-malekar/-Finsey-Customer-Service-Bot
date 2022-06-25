import React, { useEffect } from 'react';
import { Avatar, Fab, Fade, Grid, Typography } from "@mui/material";
import { VOICE_WINDOW } from "../../constants";
import { useStore } from "../../store";
import ChatHeader from './ChatWindow/ChatHeader';
import Message from './Message';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Button from '../Button'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import useVoice from '../../hooks/useVoice';

const VoiceWindow = ({type})=>{
    const [state,] = useStore();

    const {messages,transcript,currentSpeaker} = useVoice();
    
    return(
    <Fade in={state.botStepper === VOICE_WINDOW} unmountOnExit>
      <Grid container>
        <ChatHeader />
        <Grid container xs={12}>
          <Grid 
          container 
          item 
          xs={6} 
          height="100%"
          paddingTop="85px"
          >
            <Grid item xs={12}>
              <Avatar sx={{
                backgroundColor:"primary.dark",
                width:"125px",
                height:"125px",
                margin:"12.5px auto"
              }}>
                <SupportAgentIcon/>
              </Avatar>
              <Typography variant="h6" textAlign="center">Customer Care Associate</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button size='small' status='danger'> Disconnect Call </Button>
            </Grid>
            <Grid item container xs={12} height="60px" borderTop="1px solid gray">
              <Grid item xs={12}>
              <Typography variant='body1'>{transcript}</Typography>
              <Fab
                color="primary"
                aria-label="add"
              >
                <KeyboardVoiceIcon />
              </Fab>
              {currentSpeaker=="bot"?<Typography variant='subtitle1'>Please wait</Typography>:<Typography variant='subtitle1'>Speak now</Typography>}
              </Grid>
            </Grid>
          </Grid>
          <Grid
          container
          item
          height="400px"
          paddingTop="85px"
          paddingBottom="65px"
          overflow="auto"
          alignItems="self-start"
          display="block"
          xs={6}
          borderLeft="1px solid gray"
        >
          {messages.map((chat, index) => (
            <Message {...chat} key={index} />
          ))}
        </Grid>
      </Grid>
        </Grid>
    </Fade>
    )
}

export default VoiceWindow;