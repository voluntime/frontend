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
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'fixed', left: 'calc(50vw - 7rem)', top: 'calc(50vh - 6rem)', width: '14rem', height: '12rem'}}>
            <p style={{textAlign: 'center'}}>No events to volunteer for!<br/>Time to chill.</p>
            <img src='/chill.svg' alt='sunglasses dude on lawn chair' style={{width: '100%', height: 'auto', maxWidth: '10rem'}}/>
          </div>
        )
      }
    </div>
  );
}

export default Feed;