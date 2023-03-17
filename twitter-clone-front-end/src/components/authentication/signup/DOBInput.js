import React from "react";

import DOBSelectField from "../../UI/auth/sign-up/DOBSelectField";
import moment from "moment";
import { MenuItem } from "@mui/material";

const months = moment.months().map((month) => (
  <MenuItem value={month} key={month}>
    {month}
  </MenuItem>
));

let dayArr = [];
for (let i = 1; i < 32; i++) {
  dayArr.push(i);
}

let yearArr = [];
const year = new Date().getFullYear();
yearArr.push(year);
for (let i = 1; i < 100; i++) {
  yearArr.push(year - i);
}

const days = dayArr.map((day) => (
  <MenuItem value={day} key={day}>
    {day}
  </MenuItem>
));

const years = yearArr.map((year) => (
  <MenuItem value={year} key={year}>
    {year}
  </MenuItem>
));

const DOBInput = () => {
  return (
    <div className="flex mt-6">
      <DOBSelectField
        field={months}
        style={{ flexGrow: 2, width: "13.063rem", marginRight: "0.75rem" }}
        label="Month"
      />
      <div className="h-[58px] flex grow">
        <DOBSelectField
          field={days}
          style={{ width: "5.735rem", marginRight: "0.75rem" }}
          label="Day"
        />
        <DOBSelectField
          field={years}
          style={{ width: "7.178rem" }}
          label="Year"
        />
      </div>
    </div>
  );
};

export default DOBInput;
