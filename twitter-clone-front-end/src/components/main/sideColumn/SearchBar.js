import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Search } from "../../icons/icons";

export const SearchBar = () => {
  return (
    <TextField
      placeholder="Search"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#eff3f4",
            borderRadius: 9999,
            backgroundColor: "#eff3f4",
            zIndex: -1,
          },
        },
      }}
      id="input-with-icon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search className="h-[18.75px] w-[44px] fill-[#536471]" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      className="flex grow"
    />
  );
};
