import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import React, { useCallback } from 'react';
import {useNavigate} from 'react-router-dom';

function Post() {
    const navigate = useNavigate();
    const handleClick = useCallback(() => navigate('/', {replace : true}), [navigate]);

    return (
        <div classname="wrapper">
            <Stack>
                <Stack direction={"row"}>
                    <Button onClick={handleClick}><DynamicFeedIcon /></Button>
                    <p>new event</p>
                </Stack>
                <p>personal info</p>
                <div className="form">
                    <form>
                        <div className="input-container">
                            <label>Title</label>
                            <input type="text" name="title" placeholder="" />
                        </div>
                        <div className="input-container">
                            <label>Location</label>
                            <input type="text" name="location" placeholder="" />
                        </div>
                        <div className="input-container">
                            <label>Type</label>
                            <input type="text" name="type" placeholder="" />
                        </div>
                        <div className="input-container">
                            <label>Volunteer Count</label>
                            <input type="text" name="count" placeholder="" />
                        </div>
                        <div className="input-container">
                            <label>Description</label>
                            <input type="text" name="desc" placeholder="" />
                        </div>
                        <div className="button-container">
                            <Button type="submit" variant="contained" color="primary">Post</Button>
                        </div>
                    </form>
                </div>
                <p>event feed</p>
            </Stack>
        </div>
    );
}

export default Post;