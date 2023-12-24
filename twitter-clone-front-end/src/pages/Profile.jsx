import FollowToggleButton from "@/components/FollowToggleButton";
import { MoreOptionsButton } from "@/components/MoreOptionsButton";
import ProfilePicture from "@/components/ProfilePicture";
import RoundedTextButton from "@/components/RoundedTextButton";
import { TabLink } from "@/components/TabLink";
import Head from "@/components/head/Head";
import { MainSectionHeader } from "@/components/layout/MainSectionHeader";
import { useSession } from "@/hooks/useSession";
import { useGetUserByUsernameQuery } from "@/services/userApi";
import { useParams } from "react-router-dom";
export const Profile = () => {
  const { username } = useParams();
  const { data, error, isSuccess, isLoading, isError } =
    useGetUserByUsernameQuery(username);

  if (isLoading) {
    return <LoadingProfile />;
  }

  return (
    <>
      <Head title={data.name + `(@${data.username})`} />
      <MainSectionHeader
        text={data.name}
        numberOfPosts={data.postsCount}
      ></MainSectionHeader>
      <div className="flex flex-col">
        <div className="bg-[#cfd9de] dark:bg-[#333639] h-[185px] flex grow">
          <div className="w-full pb-33"></div>
          <div className="absolute h-full"></div>
        </div>
        <div className="pt-3 px-4 mb-4 flex relative items-start br justify-between">
          <div className="w-[145.5px] h-[145.5px] -mt-[15%]  mb-3 overflow-visible  rounded-full  dark:bg-black bg-white relative flex justify-center items-center">
            <div className="">
              <ProfilePicture src={data.profile_image_url} size={141.5} />
            </div>
          </div>
          <div className=" flex justify-start items-end max-w-full">
            <ProfileOptions username={data.username} />
          </div>
        </div>
      </div>
    </>
  );
};

const LoadingProfile = () => {
  return (
    <>
      <MainSectionHeader text={""}></MainSectionHeader>
      <div className="br"></div>
    </>
  );
};

const ProfileOptions = ({ username }) => {
  const { username: principalUsername } = useSession();

  return (
    <div>
      {username === principalUsername ? (
        <RoundedTextButton
          text={"Edit profile"}
          className={`btn--skip flex min-h-[36px] min-w-[36px] rounded-full mb-3 px-4`}
          disabled
        />
      ) : (
        <div className="flex">
          <div className="w-[36px] h-[36px] mb-3 rounded-full border border-[#536471]"></div>
          <div className="mb-3 min-w-[81px]">
            <FollowToggleButton />
          </div>
        </div>
      )}
    </div>
  );
};
