import Event from "./Event";
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Hand from '@mui/icons-material/PanTool';
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useCallback } from "react";

function reputation(hands) {
  // 0 hands =  0 verified events
  // 1 hands =  1 verified event
  // 2 hands =  5 verified event
  // 3 hands = 10 verified event
  let h1 = hands >= 1 ? 'color: var(--green)' : 'color: var(--tea)';
  let h2 = hands >= 2 ? 'color: var(--green)' : 'color: var(--tea)';
  let h3 = hands >= 3 ? 'color: var(--green)' : 'color: var(--tea)';
  return (
    <Stack direction={'row'} spacing={1} width='100%' justifyContent='center' paddingTop='1rem'>
      <Hand sx={h1}/>
      <Hand sx={h2}/>
      <Hand sx={h3}/>
    </Stack>
  );
}

function Profile() {
  const navigate = useNavigate();
  const feedClicked = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const settingsClicked = useCallback( // TODO
    () => navigate("/settings", { replace: true }),
    [navigate]
  );

  let hands = 2; // TODO get from DB

  return (
    <div className="wrapper">
      <Stack alignItems={'center'}>
        {/* HEADER */}
        <Stack className="profileHeader" alignItems={'center'} sx={{width: '100%'}}>

          {/* NAVIGATION BUTTONS */}
          <Stack direction={"row"} justifyContent='space-between' sx={{width: '100%', maxWidth: 'var(--content-width)'}}>
            {/* FEED */}
            <Button onClick={feedClicked} sx={{margin: '2rem'}}>
              <DynamicFeedIcon className="brown" sx={{width: '3rem', height: '3rem'}}/>
            </Button>
            {/* SETTINGS */}
            <Button onClick={settingsClicked} sx={{margin: '2rem'}}>
              <SettingsIcon className="brown" sx={{width: '3rem', height: '3rem'}}/>
            </Button>
          </Stack>

          {/* PROFILE INFORMATION */}
          <Avatar sx={{width: 'var(--avatar-size)', height: 'var(--avatar-size)'}}>H</Avatar>
          <Badge badgeContent={'✓'} color="secondary">
            <h3>Robin Baker</h3>
          </Badge>
          <div className="email"></div>
          {reputation(hands)}
        </Stack>

        {/* EVENT FEED */}
        <Stack className='content'>
          <div className="events">
            <Event />
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default Profile;
