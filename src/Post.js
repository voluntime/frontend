import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Post() {
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  return (
    <div className="wrapper">
      <Header>
        <Button onClick={handleClick}>
          <DynamicFeedIcon />
        </Button>
        <h2>new event</h2>
      </Header>

      <div className="form content">
        <form>
            <label style={{width: '100%'}}>Title</label>
            <input type="text" name="title" placeholder="" />
            <label style={{width: '100%'}}>Location</label>
            <input type="text" name="location" placeholder="" />
            <label style={{width: '100%'}}>Type</label>
            <input type="text" name="type" placeholder="" />
            <label style={{width: '100%'}}>Volunteer Count</label>
            <input type="text" name="count" placeholder="" />
            <label style={{width: '100%'}}>Description</label>
            <input type="text" name="desc" placeholder="" />
          <div className="button-container">
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
