import React from "react";

export const MainLayout = (props) => {
  return (
    <div className="w-screen  h-screen flex dark:bg-black ">
      {props.children}
    </div>
  );
};