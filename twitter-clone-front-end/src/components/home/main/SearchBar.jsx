import { Search } from "@/components/icons/Icons";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useSelector } from "react-redux";

export const SearchBar = () => {
  const { darkMode } = useSelector((state) => state.themeSlice.darkMode);

  return (
    <TextField
      placeholder="Search"
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: 9999,
            backgroundColor: "#202327",
            zIndex: -1,
            lineHeight: 20,
            fontSize: 15,
            fontFamily: "chripR",
          },
          "&:hover fieldset": {
            borderWidth: 0,
            borderColor: "none",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1e9bf0",
            borderWidth: 1,
            backgroundColor: "transparent",
          },
        },
        "& .MuiOutlinedInput-input": {
          color: "white",
          height: "44.5px",
          padding: "0 14px",
          "&::placeholder": {
            color: "#e7e9ea",
          },
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
