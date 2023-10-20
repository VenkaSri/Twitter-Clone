import ProfilePicture from "@components/ProfilePicture";

const UserCard = () => {
  return (
    <div className="card--follow br">
      <div className="mr-3   flex self-stretch">
        <ProfilePicture size={44} />
      </div>
      <div className="flex grow ">
        <div className="flex flex-col">
          <span className="inline-block font-cBold dark:text-white">venka</span>
          <span className="text-[#71767B] font-cReg text-[15px]">@venka</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
