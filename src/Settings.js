import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function Settings() {
  const navigate = useNavigate();
  const profileClicked = useCallback(
    () => navigate("/profile", { replace: true }),
    [navigate]
  );
  return (
    <div className="wrapper">
      <Stack alignItems={"center"}>
        {/* HEADER */}
        <Stack direction='row' className="profileHeader" justifyContent={'center'} alignItems={"center"} sx={{ width: '100%' }} >
          <Stack direction='row' justifyContent={'space-between'} sx={{width: '100%', maxWidth: 'var(--content-width)'}}>
            <Button onClick={profileClicked}>
              <Avatar sx={{ width: "var(--avatar-size)", height: "var(--avatar-size)" }}>H</Avatar>
            </Button>
            <h2>settings</h2>
          </Stack>
        </Stack>

        {/* SETTINGS */}
        <p>Settings go here....</p>
      </Stack>
    </div>
  );
}

export default Settings;
