import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Post() {
  const [organization, setOrganization] = useState('');
  const [title, setTitle] = useState();
  const [eventType, setEventType] = useState();
  const [body, setBody] = useState();
  const [eventLocation, setEventLocation] = useState();
  const [volunteerGoal, setvolunteerGoal] = useState();
  const [beginsAt, setBeginsAt] = useState();
  const [endsAt, setEndsAt] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const backToFeed = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const submitForm = async (postDetails) => {
    fetch("https://api.volunti.me/v1/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDetails),
      credentials: "include",
    }).then(function (response) {
      if (response.ok) {
        backToFeed();
      } else {
        console.log("we are screwed");
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm({
      organization,
      title,
      eventType,
      body,
      eventLocation,
      volunteerGoal,
      beginsAt,
      endsAt,
    });
  };

  return (
    <div className="wrapper">
      <Header>
        <Button onClick={backToFeed}>
          <DynamicFeedIcon />
        </Button>
        <h2>new event</h2>
      </Header>
      <form className="form content" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder=""
          required
        />
        <label>Organization</label>
        <input
          type="text"
          name="organization"
          onChange={(e) => setOrganization(e.target.value)}
          placeholder=""
        />
        <label>Event Location</label>
        <input
          type="text"
          name="location"
          onChange={(e) => setEventLocation(e.target.value)}
          placeholder=""
          required
        />
        <label>Type</label>
        <input
          type="text"
          name="eventType"
          onChange={(e) => setEventType(e.target.value)}
          placeholder=""
          required
        />
        <label>Volunteer Count</label>
        <input
          type="number"
          name="count"
          onChange={(e) => setvolunteerGoal(e.target.value)}
          placeholder=""
          required
        />
        <label>Post Body</label>
        <input
          type="text"
          name="desc"
          onChange={(e) => setBody(e.target.value)}
          placeholder=""
          required
        />
        <label>Begins At</label>
        <input
          type="datetime-local"
          name="begins"
          onChange={(e) => setBeginsAt(e.target.value)}
          placeholder=""
          required
        />
        <label>Ends At</label>
        <input
          type="datetime-local"
          name="ends"
          onChange={(e) => setEndsAt(e.target.value)}
          placeholder=""
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Post
        </Button>
      </form>
    </div>
  );
}

export default Post;
