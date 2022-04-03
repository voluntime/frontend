import './App.css';
import Login from './Login';
import Event from './Event';
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

function MainFeed(props) {
  const user = props.user || {};
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/profile/' + user.username, {replace : true}), [navigate]);
  const AddPost = useCallback(() => navigate('/post', {replace : true}), [navigate]);

  // Events for feed
  const [events, setEvents] = useState([]);
  useEffect(() => {
      fetch("https://api.volunti.me/v1/posts", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((resp) => resp.json())
      .then((json) => {
        setEvents(json);
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
        <Avatar><Button onClick={handleClick}>{user.name}</Button></Avatar>
      </Header>

      {/* ACTUAL FEED */}
      <Stack className='content'>
        {
          events.filter((e) => e.volunteered || e.organizer == user.username)
            .map((e) => (
            <UpcomingBanner
              date={new Date(e.begins).toLocaleDateString()}
              name={e.title}
              organizer={(e.organizer == user.username)}
            />
            ))
        }
        <Feed user={null}/>
      </Stack>

      {/* ADD NEW EVENT */}
      <Stack className="addPost" direction={'row'}>
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
