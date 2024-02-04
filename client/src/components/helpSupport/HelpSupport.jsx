import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './helpSupport.scss';

function HelpSupport() {

     const [age, setAge] = React.useState('');

     const handleChange = (event) => {
     setAge(event.target.value);
     };

  return (
    <div className='help-support'>
      <div className='sidebar'>
          <p>Back</p>
      </div>
      <div className='help'>
          <h2>Help and Support</h2>
          <div className='select-help'>
               <h3>What can we help you with?</h3>

               <FormControl sx={{ m: 1, width: 500 }}>
                    <Select
                         value={age}
                         onChange={handleChange}
                         displayEmpty
                         inputProps={{ 'aria-label': 'Without label' }}
                    >
                         <MenuItem value="">
                         <em>Select a topic</em>
                         </MenuItem>
                         <MenuItem value={10}>I haven't receved my booking conformation</MenuItem>
                         <MenuItem value={20}>I have a question about payment issue</MenuItem>
                         <MenuItem value={30}>I want to cancel/modify my booking</MenuItem>
                         <MenuItem value={40}>I found an error while using tripo</MenuItem>
                    </Select>
               </FormControl>

          </div>
          <div className='still-problem'>
               <h4>Still haven't found what you were looking for?</h4>
               <p>You can write us about other topics on our full contact form or you can read more information about trivago on our help center.</p>
          </div>
      </div>
    </div>
  )
}

export default HelpSupport
