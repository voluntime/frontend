import './Event.css';
import React, { useState, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import UpArrow from '@mui/icons-material/ArrowUpward';
import Hand from '@mui/icons-material/PanTool';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TimerIcon from '@mui/icons-material/Timer';
import {useNavigate} from "react-router-dom";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { API_BASE_URL, API_VERSION } from "./Config";

function EventHeader(props) {
    const navigate = useNavigate();
    const eventName = props.title || "Placeholder";
    const organizer = props.organizer || "placeholder";
    const organization = props.organization || "Placeholder";
    const location = props.event_location || "Placeholder";
    const dateTime = new Date(props.begins).toLocaleDateString() || "Placeholder";
    const duration = Math.abs(new Date(props.ends) - new Date(props.begins)) / 36e5 + " Hours" || "Placeholder";
    const likes = props.likeCount;
    const setLikeCount = props.setLikeCount;

    const handleAvatarClick = useCallback(() => navigate('/profile/' + organizer, {replace : true}), [navigate]);

    return (
        <Stack
            direction='row'
            alignItems='center'
            spacing={2}
            className='eventHeader'>
            <Avatar className='avatar' onClick={handleAvatarClick}>{organizer[0] || ""}</Avatar>
            <Stack>
                <h3>{eventName}</h3>
                {props.organization && (
                    <Stack direction='row' spacing={1}>
                        <CorporateFareIcon className='brown'/>
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
                <Stack direction='row' spacing={1}>
                    <UpArrow className='brown'/>
                    <h4>{likes}</h4>
                </Stack>
            </Stack>
        </Stack>
    );
}

function ProgressBar ({ volunteerCount, volunteerGoal }) {

    let progress = volunteerCount / volunteerGoal;
    let progressVal = progress > 1 ? 100 : progress * 100;

    return (
        <div>
            <div className='progressCounter'>
                {volunteerCount} / {volunteerGoal}
            </div>
            <LinearProgress variant="determinate" value={progressVal} sx={{height: '2.5rem'}}/>
        </div>
    );
}

function EventButtons(props) {
    const [liked, setLike] = useState(props.liked);
    const [volunteered, setVolunteer] = useState(props.volunteered);

    const {
        volunteerCount,
        volunteerGoal,
        setVolunteerCount,
        setVolunteerGoal,
        likeCount,
        setLikeCount
    } = props;

    const performInteraction = (type, setHandler) => {
        const options = {
            id: props.eventId
        };

        fetch(`${API_BASE_URL}/${API_VERSION}/interaction/${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options),
            credentials: "include"
        })
            .then((resp) => resp.json())
            .then((json) => {
                if (type === "volunteer") {
                    if (json.interaction) {
                        setVolunteerCount(volunteerCount + 1);
                    } else {
                        setVolunteerCount(volunteerCount - 1);
                    }
                } else {
                    if (json.interaction) {
                        setLikeCount(likeCount + 1);
                    } else {
                        setLikeCount(likeCount - 1);
                    }
                }

               setHandler(json.interaction);
            })
    };

    const likeTapHandler = () => {
        performInteraction("like", setLike);
    };

    const volunteerTapHandler = () => {
        performInteraction("volunteer", setVolunteer);
    };

    return (
        <Stack direction={'row'} spacing={2} justifyContent='center' alignItems='center' className='eventActions'>
            <Button variant={liked ? "contained" : "outlined"} onClick={() => likeTapHandler()}>
                <UpArrow sx={{ marginRight: '0.5rem' }}/> Like
            </Button>

            <Button variant={volunteered ? "contained" : "outlined"} onClick={() => volunteerTapHandler()}>
                <Hand sx={{ marginRight: '0.5rem' }}/> Volunteer
            </Button>
        </Stack>
    );
}

function Event(props) {
    const eventDescription = props.body || "";
    const eventId = props.id || -1;

    const [volunteerCount, setVolunteerCount] = useState(props.volunteers);
    const [likeCount, setLikeCount] = useState(props.likes);
    const volunteerGoal = props.goal;

    return (
        <Stack className='eventPost'>
            <EventHeader {...props} likeCount={likeCount} />
            <div className='description'>
                <p>{eventDescription}</p>
            </div>
            <ProgressBar volunteerCount={volunteerCount} volunteerGoal={volunteerGoal} />
            <EventButtons {...props} eventId={eventId} volunteerCount={volunteerCount} setVolunteerCount={setVolunteerCount} likeCount={likeCount} setLikeCount={setLikeCount}/>
        </Stack>
    );

}

export default Event;
