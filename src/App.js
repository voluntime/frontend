import './App.css';
import Login from './Login';
import Event from './Event';
import Profile from './Profile';
import Post from './Post';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useCallback, useState } from 'react';
import { Typography } from '@mui/material';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function Feed() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate('/Profile', {replace : true}), [navigate]);
  const AddPost = useCallback(() => navigate('/Post', {replace : true}), [navigate]);

  return (
    <div classname="wrapper">
      <Stack>
        <Stack direction={"row"}>
          <Typography variant="h2">hello</Typography>
          <p>Robin Baker</p>
          <Avatar><Button onClick={handleClick}>H</Button></Avatar>
        </Stack>
        <div classname="events">
          <Event />
        </div>
        <div classname="addPost">
          <Button onClick={AddPost}><AddBoxIcon /></Button>
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/Post" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
