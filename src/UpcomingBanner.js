/**
 * Example usage:
 * <UpcomingBanner date='April 1' name='Event Name' organizer={false}/>
 */

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Hand from '@mui/icons-material/PanTool';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function UpcomingBanner(props) {
  let icon = props.organizer ? <CalendarMonthIcon /> : <Hand />;
  return (
    <Stack className='upcomingBanner' direction='row' spacing={1} width='100%' alignItems={'center'}>
      {icon}
      <p style={{fontWeight: 'lighter', padding: 0}}>{props.date}:</p>
      <p style={{fontWeight: 'bold', padding: 0}}>{props.name}</p>
    </Stack>
  );
}

export default UpcomingBanner;