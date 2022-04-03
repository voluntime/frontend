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

async function getReputation(username) {

}

function Verified({ username }) {
    if (JSON.parse(localStorage.getItem("token")).verified) {
        return (
            <Badge badgeContent={'✓'} color="secondary">
                <h3>{username}</h3>
            </Badge>
        );
    } else {
        return <h3>{username}</h3>;
    }
}

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

function Profile({ setToken }) {
  const navigate = useNavigate();

  const [hands, setHands] = useState(0);

  const feedClicked = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const logoutClicked = async () => {
    console.log('logout pressed');
    fetch("https://api.volunti.me/v1/logout", {
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

  let username = JSON.parse(localStorage.getItem("token")).username;
  let verified = JSON.parse(localStorage.getItem("token")).verified;

  useEffect(() => {
      fetch("https://api.volunti.me/v1/reputation/" + username, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
          credentials: "include",
      }).then((resp) => resp.json()).then(function (json) {
          setHands(json["reputation"]);
      });
  })

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
            <Button onClick={logoutClicked} sx={{margin: '2rem'}}>
              <LogoutIcon className="brown" sx={{width: '3rem', height: '3rem'}}/>
            </Button>
          </Stack>

          {/* PROFILE INFORMATION */}
          <Avatar sx={{width: 'var(--avatar-size)', height: 'var(--avatar-size)'}}>{username[0]}</Avatar>
          <Verified username={username} verfied={verified}/>
          <div className="email"></div>
          {reputation(hands)}
        </Stack>

        {/* EVENT FEED */}
        <Stack className='content'>
          <Feed user={username} />
        </Stack>
      </Stack>
    </div>
  );
}

export default Profile;
