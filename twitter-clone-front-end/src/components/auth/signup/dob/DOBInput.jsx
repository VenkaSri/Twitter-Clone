import DOBSelectField from "./DOBSelectField";
import MenuItem from "@mui/material/MenuItem";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);
import { useInputValidation } from "@/hooks/inputs/useInputValidation";
import { useContext } from "react";
import { RegisterContext } from "@/context/auth/register-context";

const months = dayjs.months().map((month) => (
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
  const { monthHandler, dayHandler, yearHandler, dob } = useInputValidation();
  const { autoFocusField } = useContext(RegisterContext);

  return (
    <div className="flex my-4">
      <DOBSelectField
        field={months}
        style={{ flexGrow: 2, width: "13.063rem", marginRight: "0.75rem" }}
        label="Month"
        onChange={monthHandler}
        defaultValue={dob.month}
        autoFocus={autoFocusField === "dob"}
      />
      <div className="h-[58px] flex grow">
        <DOBSelectField
          field={days}
          style={{ width: "5.735rem", marginRight: "0.75rem" }}
          label="Day"
          onChange={dayHandler}
          defaultValue={dob.day}
        />
        <DOBSelectField
          field={years}
          style={{ width: "7.178rem" }}
          label="Year"
          onChange={yearHandler}
          defaultValue={dob.year}
        />
      </div>
    </div>
  );
};

export default DOBInput;
