import './App.css';
import Login from './Login';
import Event from './Event';
import Profile from './Profile';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Feed() {
  return (
    <div classname="wrapper">
      <Stack>
        <Stack direction={"row"}>
          <Typography variant="h2">hello</Typography>
          <p>Robin Baker</p>
          <Avatar sx={{ width: 50, height: 50}}>H</Avatar>
        </Stack>
        <div classname="events">
          <Event />
        </div>
      </Stack>
    </div>
  );
}

function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="wrapper">
      <h1>Voluntime</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
