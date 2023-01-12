import React from "react";
import CircleButton from "../../UI/CircleButton";

import { SearchButton } from "../../../utils/ButtonLinkObjects";

const Search = () => {
  return (
    <div className="w-120 rounded-full h-11.5 flex items-center bg-[#EFF3F4] pl-3 border">
      <CircleButton buttonInfo={SearchButton} />
      <input
        type="text"
        className="h-10 w-100 ml-2 focus:outline-none  text-ssm rounded-r-full bg-[#EFF3F4] placeholder:text-slate-500" placeholder="Search Twitter"
      />
    </div>
  );
};

export default Search;
