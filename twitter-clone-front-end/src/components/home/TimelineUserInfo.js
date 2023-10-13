export const TimelineUserInfo = ({ userData }) => {
  return (
    <div className="flex-col-container grow overflow-hidden ">
      <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-5">
        <span>{userData.name}</span>&nbsp;&nbsp;
        <span className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5">
          @{userData.username}&nbsp;
        </span>
      </div>
    </div>
  );
};
