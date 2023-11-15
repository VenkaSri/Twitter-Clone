import React from "react";
import FollowSuggestions from "../../signup/dialog/FollowSuggestions";



const DialogContentBody = ({title, subheading}) => {
  return (
    <div className="px-[5rem] mt-6">
      <FollowSuggestions />
    </div>
  );
};

export default DialogContentBody;
