import React, {useCallback, useEffect, useState} from "react";
import Event from "./Event";
import { API_BASE_URL, API_VERSION } from "./Config";

function Feed(props) {
  let url = `${API_BASE_URL}/${API_VERSION}/posts`;

  if (props.user) {
    url += '?profile=' + props.user;
  }

  const [events, setEvents] = useState([]);
  useEffect(() => {
      fetch(url, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
          .then((resp) => resp.json())
          .then((json) => {
              let evts = json;
              evts.sort(function(a, b) { return new Date(a.begins) - new Date(b.begins) })
              setEvents(evts);
          });
  }, []);
  return (
    <div>
      {
        events.length > 0
        ?
          events.map((e) => (
            <Event {...e} />
          ))
        : (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>No events to volunteer for! Time to chill.</p>
            <img src='/chill.svg' alt='sunglasses dude on lawn chair' style={{width: '100%', height: 'auto', maxWidth: '12rem'}}/>
          </div>
        )
      }
    </div>
  );
}

export default Feed;