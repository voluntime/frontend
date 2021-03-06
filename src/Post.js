import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { API_BASE_URL, API_VERSION } from "./Config";

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
    fetch(`${API_BASE_URL}/${API_VERSION}/post`, {
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
        <select
            name={"eventType"}
            onChange={(e) => setEventType(e.target.value)}
            required
        >
          <option value="none" selected disabled hidden>Select an Option</option>
          <option name={"Good"}>Good</option>
          <option name={"Service"}>Service</option>
        </select>
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
          min="2022-04-02T10:20:pm"
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
