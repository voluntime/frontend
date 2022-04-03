import Event from './Event';
import {useNavigate} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import React, { useCallback } from 'react';

function Profile() {
    const navigate = useNavigate();
    const handleClick = useCallback(() => navigate('/', {replace : true}), [navigate]);

    return (
        <div classname="wrapper">
        <Stack>
            <Stack direction={"row"}>
                <Button onClick={handleClick}><DynamicFeedIcon /></Button>
                <Avatar sx={{ width: 50, height: 50}}>H</Avatar>
                <p>Icon</p>
            </Stack>
            <p>Robin Baker</p>
            <div classname="email"></div>
            <p>Super Volunteer</p>
            <div classname="events">
            <Event />
            </div>
        </Stack>
        </div>
    );
}

export default Profile;
