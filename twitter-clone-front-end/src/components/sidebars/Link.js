import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const Link = () => {
  return (
      <div className="flex items-center w-3/5">
        <SettingsOutlinedIcon style={{ fontSize: "32px" }}/>
        <p className='ml-5 font-custom1  text-2xl'>Settings</p>
      </div>
  );
};

export default Link;
