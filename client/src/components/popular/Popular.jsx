import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './popular.scss';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='popular-search'>
      <h2>Popular Searches</h2>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Cities" {...a11yProps(0)} />
            <Tab label="Destination" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className='cards'>
            <div className='popular-card'>
              <ul>
                <li><span>Mumbai</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
            <div className='popular-card'>
              <ul>
                <li><span>Mumbai</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
            <div className='popular-card'>
            <ul>
                <li><span>Mumbai</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
            <div className='popular-card'>
            <ul>
                <li><span>Mumbai</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <div className='cards'>
            <div className='popular-card'>
              <ul>
                <li><span>Goa</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
            <div className='popular-card'>
              <ul>
                <li><span>Goa</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
            <div className='popular-card'>
            <ul>
                <li><span>Goa</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
            <div className='popular-card'>
            <ul>
                <li><span>Goa</span></li>
                <li><span>5,680 Hotels</span></li>
                <li><span>Avg Rs-3598</span></li>
              </ul>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}