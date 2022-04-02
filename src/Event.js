import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
// import Icon from '@mui/material/Icon';
import UpArrow from '@mui/icons-material/ArrowUpward';
import Hand from '@mui/icons-material/PanTool';
import Button from '@mui/material/Button';

function EventHeader() {
    return (
        <Stack direction={'row'} spacing={2}>
            <Avatar sx={{ width: 50, height: 50}}>H</Avatar>
            <Stack>
                <p>User Name</p>
                <p>Location</p>
            </Stack>
            <Stack>
                <p>1/1/2000</p>
                <p>4 Hr</p>
            </Stack>
        </Stack>
    );
}

function ProgressBar () {
    const [progress, setProgress] = React.useState(0);
    {/* TODO create dynamic progress bar
        On Volunteer button click increment progress
        Hard cap determined by amount of volunteers/Items needed
    */}

    return (
        <div>
           <LinearProgress variant="determinate" value={progress}/>
        </div>
    );
}

function EventButtons() {
    return (
        <div>
            <Stack direction={'row'} spacing={2}>
                <Button>
                    <UpArrow/> Like
                </Button>
                <Button onClick={ProgressBar.changeWidth}>
                    <Hand/> Volunteer
                </Button>
            </Stack>
        </div>
    );
}

function Event() {

    return (
        <Stack>
            <EventHeader/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at fringilla mi, non dapibus tortor.
                Nunc sit amet dictum felis, nec rhoncus nibh. Sed metus ipsum, imperdiet vel placerat eu, porta ac mi.
                Nam pretium magna eget purus interdum laoreet. Cras ornare ullamcorper mi sit amet bibendum. Mauris
                justo erat, ornare in ultricies a, aliquam ut mi. Phasellus eros urna, pharetra sed felis non, iaculis
                convallis lacus. Fusce sed nisi aliquet, hendrerit est eu, egestas dolor.
            </p>
            <ProgressBar/>
            <EventButtons/>
        </Stack>
    );

}

export default Event;
