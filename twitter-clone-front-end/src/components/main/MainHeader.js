import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MainHeader = () => {
  return (
    <div className="flex items-center pb-5 justify-around border-b border-b-slate-200 ">
      <div className="w-120 rounded-full h-12 flex items-center bg-[#EFF3F4]">
        <SearchIcon style={{ marginLeft: "15px" }} />
        <input
          type="text"
          className="ml-5 h-11 w-100 focus:outline-none text-lg bg-[#EFF3F4]"
        />
      </div>
      <SettingsOutlinedIcon  />
    </div>
  );
};

export default MainHeader;
