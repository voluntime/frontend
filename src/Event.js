import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
// import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import UpArrow from '@mui/icons-material/ArrowUpward';
import Hand from '@mui/icons-material/PanTool';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';

function EventHeader() {
    return (
        <Stack
            direction='row'
            alignItems='center'
            spacing={2}
            className='eventHeader'>
            <Avatar className='avatar'>H</Avatar>
            <Stack>
                <h3>Event Name</h3>
                <Stack direction='row' spacing={1}>
                    <LocationOnIcon className='brown'/>
                    <h4>Location</h4>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <CalendarMonthIcon className='brown'/>
                    <h4>1/1/2000</h4>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <TimerIcon className='brown'/>
                    <h4>4 hr</h4>
                </Stack>
            </Stack>
        </Stack>
    );
}

function ProgressBar () {
    // TODO get from db
    const [volunteerCount, setVolunteerCount] = React.useState(0);

    // TODO get from db
    const [volunteerTarget, setVolunteerTarget] = React.useState(5);

    let progress = volunteerCount / volunteerTarget;

    return (
        <div>
            <div className='progressCounter'>
                {volunteerCount} / {volunteerTarget}
            </div>
            <LinearProgress variant="determinate" value={progress} sx={{height: '2.5rem'}}/>
        </div>
    );
}

function EventButtons() {
    return (
        <Stack direction={'row'} spacing={2} justifyContent='center' alignItems='center' className='eventActions'>
            <Button>
                <UpArrow sx={{ marginRight: '0.5rem' }}/> Like
            </Button>
            <Button onClick={ProgressBar.changeWidth}>
                <Hand sx={{ marginRight: '0.5rem' }}/> Volunteer
            </Button>
        </Stack>
    );
}

function Event() {

    return (
        <Stack className='eventPost'>
            <EventHeader/>
            <div className='description'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at fringilla mi, non dapibus tortor.
                    Nunc sit amet dictum felis, nec rhoncus nibh. Sed metus ipsum, imperdiet vel placerat eu, porta ac mi.
                    Nam pretium magna eget purus interdum laoreet. Cras ornare ullamcorper mi sit amet bibendum. Mauris
                    justo erat, ornare in ultricies a, aliquam ut mi. Phasellus eros urna, pharetra sed felis non, iaculis
                    convallis lacus. Fusce sed nisi aliquet, hendrerit est eu, egestas dolor.
                </p>
            </div>
            <ProgressBar/>
            <EventButtons/>
        </Stack>
    );

}

export default Event;
