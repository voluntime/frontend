import Stack from '@mui/material/Stack';
import './Header.css'

function Header(props) {
  return (
    <Stack className='header' direction={'row'}>
      <Stack className='headerContent' direction={'row'}>
        { props.children }
      </Stack>
    </Stack>
  );
}

export default Header;