import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';

function EventHeader() {
    return (
        <Stack direction={'row'} spacing={2}>
            <Avatar sx={{ width: '3rem'}}>H</Avatar>
            <Stack>
                <p>User Name</p>
                <p>Location</p>
            </Stack>
        </Stack>
    );
}

function EventButtons() {
    return (
        <Stack direction={'row'}>
            <Button>
                Upvote
            </Button>
            <Button>
                Volunteer
            </Button>
        </Stack>
    );
}

function Event() {

    return (
        <Stack>
            <EventHeader />
            <p>This is text</p>
            <p>Progress Bar</p>
            <EventButtons />
        </Stack>
    );

}

export default Event;
