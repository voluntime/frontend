import './App.css';
import Login from './Login';
import Profile from './Profile';
import Post from './Post';
import NotFound from './NotFound';
import Settings from './Settings'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import UpcomingBanner from './UpcomingBanner';
import Header from './Header';
import Feed from './Feed';

import { API_BASE_URL, API_VERSION } from "./Config";

function GetUpcomingEvents(events, user) {
  let ue = events.filter((e) => e.volunteered || e.organizer == user.username);
  if (ue.length > 0) {
    return (
      <div class='upcomingGroup'>
        <div class='upcomingTitle'><p>Upcoming Events</p></div>
        {
          ue.map((e) => (
          <UpcomingBanner
            date={new Date(e.begins).toLocaleDateString()}
            name={e.title}
            organizer={(e.organizer == user.username)}
          />
          ))
        }
      </div>
    );
  }
}

function MainFeed(props) {
  const user = props.user || {};
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/profile/' + user.username, {replace : true}), [navigate]);
  const AddPost = useCallback(() => navigate('/post', {replace : true}), [navigate]);

  // Events for feed
  const [events, setEvents] = useState([]);

  useEffect(() => {
      fetch(`${API_BASE_URL}/${API_VERSION}/posts`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((resp) => resp.json())
      .then((json) => {
          let evts = json;
          evts.sort(function(a, b) { return new Date(a.begins) - new Date(b.begins) })
          setEvents(evts);
      });
  }, []);

  return (
    <div className="wrapper">
      {/* HEADER */}
      <Header>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'flex-end'} spacing={1}>
          <h2 style={{margin: 0}}>hello, </h2>
          <h3 style={{marginBottom: '0.2rem'}}>{user.name}</h3>
        </Stack>
        <Avatar sx={{backgroundColor: 'var(--ivory)'}}><Button onClick={handleClick} sx={{color: 'var(--dark-slate)'}}>{user.name[0] || ""}</Button></Avatar>
      </Header>

      {/* ACTUAL FEED */}
      <Stack className='content'>
        {GetUpcomingEvents(events, user)}
        <Feed user={null}/>
      </Stack>

      {/* ADD NEW EVENT */}
      <Stack className="addPost" direction={"row"} width={"100%"} justifyContent={"center"} position={"fixed"} bottom={"0"}>
        <Button onClick={AddPost}><AddBoxIcon class='addIcon'/></Button>
      </Stack>
    </div>
  );
}

function App() {
  // TODO init state to localstorage if exists
  const [token, setToken] = useState(
    () => {
      return JSON.parse(localStorage.getItem("token"));
    }
  );

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFeed user={token} />} />
          <Route path="/profile/:username" element={<Profile setToken={setToken}/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/settings" element={<Settings/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
