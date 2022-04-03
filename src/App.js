import './App.css';
import Login from './Login';
import Event from './Event';
import Profile from './Profile';
import Post from './Post';
import Settings from './Settings'
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import UpcomingBanner from './UpcomingBanner';

function Feed() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/profile', {replace : true}), [navigate]);
  const AddPost = useCallback(() => navigate('/post', {replace : true}), [navigate]);

  return (
    <div classname="wrapper">
      <Stack alignItems={'center'}>
        {/* HEADER */}
        <Stack className='feedHeader' direction={"row"}>
          <Stack direction={'row'} justifyContent={'center'} alignItems={'flex-end'} spacing={1}>
            <h2 style={{margin: 0}}>hello, </h2>
            <h3 style={{marginBottom: '0.2rem'}}>Robin Baker</h3>
          </Stack>
          <Avatar><Button onClick={handleClick}>H</Button></Avatar>
        </Stack>

        {/* ACTUAL FEED */}
        <Stack className='content'>
          <div className="events">
            <Event />
          </div>
          <Stack className="addPost" direction={'row'}>
            <Button onClick={AddPost}><AddBoxIcon sx={{width: '4rem', height: '4rem'}} /></Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/post" element={<Post/>} />
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
