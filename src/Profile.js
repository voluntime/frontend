import Event from './Event';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function Profile() {
  return (
    <div classname="wrapper">
      <Stack>
        <Stack direction={"row"}>
          <p>Icon</p>
          <Avatar sx={{ width: 50, height: 50}}>H</Avatar>
          <p>Icon</p>
        </Stack>
        <p>Robin Baker</p>
        <p>Super Volunteer</p>
        <div classname="events">
          <Event />
        </div>
      </Stack>
    </div>
  );
}

export default Profile;
