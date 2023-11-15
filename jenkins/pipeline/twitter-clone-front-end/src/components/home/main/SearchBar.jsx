import { Search } from "@/components/icons/Icons";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

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
            lineHeight: 20,
            fontSize: 15,
            fontFamily: "chripR",
          },
          "&:hover fieldset": {
            borderWidth: 0,
            borderColor: "none", // Custom hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1e9bf0",
            borderWidth: 1, // Custom focus border color
          },
        },
        "& .MuiOutlinedInput-input": {
          height: "44.5px", // Set your desired height here
          padding: "0 14px", // Adjust padding accordingly
        },
      }}
      id="input-with-icon-textfield"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search className="w-[20px] fill-[#536471]" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      className="flex grow"
    />
  );
};
