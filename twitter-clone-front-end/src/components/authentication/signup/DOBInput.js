import React from "react";

import NativeSelect from "@mui/material/NativeSelect";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const moment = require("moment");

const months = moment.months().map((month) => (
  <option value={month} key={month}>
    {month}
  </option>
));

const DOBInput = () => {
  return (
    <div className="flex mt-6 ]">
      <FormControl
        sx={{
          border: "1px solid #CFD9DE",
          height: "58px",
          borderRadius: "4px",
          flexGrow: 2,
          marginRight: "15px",
        }}
      >
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ fontSize: 20, m: "6px" }}
        >
          Month
        </InputLabel>
        <NativeSelect
          disableUnderline
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
            className: " !ml-[6px] !mt-[6px] !text-[18px]",
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <option disabled value={30}></option>
          {months}
        </NativeSelect>
      </FormControl>
      <div className="h-[58px] flex grow-1">
        <FormControl
          sx={{
            border: "1px solid #CFD9DE",
            height: "58px",
            borderRadius: "4px",
            marginRight: "15px",
          }}
        >
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
            sx={{ fontSize: 20, m: "6px" }}
          >
            Day
          </InputLabel>
          <NativeSelect
          className="w-20"
            disableUnderline
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
              className: " !ml-[6px] !mt-[6px] !text-[18px]",
            }}
            IconComponent={KeyboardArrowDownIcon}
          >
            <option disabled value={30}></option>
            {months}
          </NativeSelect>
        </FormControl>
        <FormControl
        sx={{
          border: "1px solid #CFD9DE",
          height: "58px",
          borderRadius: "4px",
        }}
      >
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
          sx={{ fontSize: 20, m: "6px" }}
        >
          Year
        </InputLabel>
        <NativeSelect
        className="w-20"
          disableUnderline
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
            className: " !ml-[6px] !mt-[6px] !text-[18px]",
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <option disabled value={30}></option>
          {months}
        </NativeSelect>
      </FormControl>
      </div>


    </div>
  );
};

export default DOBInput;
