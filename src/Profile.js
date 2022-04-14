import './Profile.css'
import { useNavigate, useParams } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Hand from '@mui/icons-material/PanTool';
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import LogoutIcon from '@mui/icons-material/Logout';
import React, {useCallback, useEffect, useState} from "react";
import Feed from './Feed';
import Header from './Header';
import { API_BASE_URL, API_VERSION } from "./Config";
import { Typography } from '@mui/material';
import CorporateFare from '@mui/icons-material/CorporateFare';


function ProfileDetails({ bio, hands, name, organization }) {

  // 0 hands =  0 verified events
  // 1 hands =  1 verified event
  // 2 hands =  5 verified event
  // 3 hands = 10 verified event

  let h1 = hands >= 1 ? 'color: var(--green)' : 'color: var(--tea)';
  let h2 = hands >= 2 ? 'color: var(--green)' : 'color: var(--tea)';
  let h3 = hands >= 3 ? 'color: var(--green)' : 'color: var(--tea)';


  return (
    <Stack
      alignItems={"center"}
      spacing={2}
      paddingTop={1}
    >
      <Stack
        direction={'row'}
        spacing={1}
      >
        <Hand sx={h1} />
        <Hand sx={h2} />
        <Hand sx={h3} />
      </Stack>

      {
        name &&
        <Typography variant="h5">
          {name}
        </Typography>
      }

      {
        organization && 
        <Stack direction='row' spacing={1}>
          <CorporateFare className='brown'/>

          <Typography>
            {organization}
          </Typography> 
        </Stack>
      }

      {
        name &&
        <Typography variant="body1">
          {bio}
        </Typography>
      }

    </Stack>
  );
}

function Profile({ setToken }) {
  const navigate = useNavigate();
  const { username } = useParams();

  const [user, setUser] = useState({});

  const feedClicked = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const logoutClicked = async () => {
    fetch(`${API_BASE_URL}/${API_VERSION}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    })
    .then(function(response) {
      if(response.ok) {
        setToken(null);
        feedClicked();
        window.location.reload();
        console.log('logout successful');
      } else {
        console.log('error logging out');
        // Error loggin out
      }
    })
  };

  useEffect(() => {
      fetch(`${API_BASE_URL}/${API_VERSION}/user/${username}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          credentials: "include",
      })
        .then((resp) => resp.json())
        .then((json) => setUser(json));
  }, []);

  return (
    <div className="wrapper">
      <Stack alignItems={'center'}>

        {/* NAVIGATION BUTTONS */}
        <Header>
          <Stack className="buttonContainer" flexDirection={"row"} justifyContent={"space-between"} >
            <Button onClick={feedClicked}>
              <DynamicFeedIcon className="brown profileNavIcon" />
            </Button>
            <Button onClick={logoutClicked}>
              <LogoutIcon className="brown profileNavIcon" />
            </Button>
          </Stack>
        </Header>

          {/* PROFILE INFORMATION */}
          <Badge
            invisible={!user.verified}
            badgeContent={<Typography color="white" variant="caption" children={"✓"} />}
            color={"secondary"}
            overlap={"circular"}
          >
            <Avatar sx={{width: 'var(--avatar-size)', height: 'var(--avatar-size)'}}>{username[0]}</Avatar>
          </Badge>

          <ProfileDetails bio={user.bio} hands={user.reputation} name={user.name} organization={user.organization} />

        </Stack>

        {/* EVENT FEED */}
        <Stack className='content'>
          <Feed user={user.name} />
        </Stack>
    </div>
  );
}

export default Profile;
