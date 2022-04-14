import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import Header from './Header';

export default function Profile() {
  const navigate = useNavigate();
  const feedClicked = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );
  const [eventName, setEventName] = useState("Event Name");
  const [volunteers, setVolunteers] = useState(["Adam", "Trey"]);

  return (
    <div className="wrapper">
      <Header>
        <Button onClick={feedClicked}>
          <DynamicFeedIcon className="brown profileNavIcon" />
        </Button>
        <h3>{eventName}</h3>
      </Header>

      <Stack className="content">
        {
          volunteers.map((v) => (
            <Stack direction={"row"}>
              <h3>{v}</h3>
              <Checkbox></Checkbox>
            </Stack>
          ))
        }
      </Stack>
    </div>
  );
};