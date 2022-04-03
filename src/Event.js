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

function EventHeader(props) {
    const eventName = props.title || "Placeholder";
    const organization = props.organization || "Placeholder";
    const location = props.event_location || "Placeholder";
    const dateTime = props.begins || "Placeholder";
    const duration = new Date(props.ends) - new Date(props.begins) || "Placeholder";

    return (
        <Stack
            direction='row'
            alignItems='center'
            spacing={2}
            className='eventHeader'>
            <Avatar className='avatar'>H</Avatar>
            <Stack>
                <h3>{eventName}</h3>
                {props.organization && (
                    <Stack direction='row' spacing={1}>
                        <LocationOnIcon className='brown'/>
                        <h4>{organization}</h4>
                    </Stack>
                )}
                <Stack direction='row' spacing={1}>
                    <LocationOnIcon className='brown'/>
                    <h4>{location}</h4>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <CalendarMonthIcon className='brown'/>
                    <h4>{dateTime}</h4>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <TimerIcon className='brown'/>
                    <h4>{duration}</h4>
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

function Event(props) {
    const eventDescription = props.body || "";

    return (
        <Stack className='eventPost'>
            <EventHeader {...props} />
            <div className='description'>
                <p>{eventDescription}</p>
            </div>
            <ProgressBar {...props} />
            <EventButtons {...props} />
        </Stack>
    );

}

export default Event;
