import React from "react";

export const MainLayout = (props) => {
  return <div className="flex w-full overflow-hidden">{props.children}</div>;
};
