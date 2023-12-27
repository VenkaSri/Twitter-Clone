import ProfilePicture from "@/components/ProfilePicture";
import dayjs from "dayjs";
import RoundedTextButton from "@/components/RoundedTextButton";
import Head from "@/components/head/Head";
import { Calender, Ellipsis } from "@/components/icons/Icons";
import { MainSectionHeader } from "@/components/layout/MainSectionHeader";
import { useSession } from "@/hooks/useSession";
import { useGetUserByUsernameQuery } from "@/services/userApi";
import { useParams } from "react-router-dom";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

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
        <div className="pt-3 px-4 mb-4">
          <div className="flex relative items-start justify-between">
            <div className="w-[145.5px] h-[145.5px] -mt-[15%]  mb-3 overflow-visible  rounded-full  dark:bg-black bg-white relative flex justify-center items-center">
              <div className="">
                <ProfilePicture src={data.profile_image_url} size={141.5} />
              </div>
            </div>
            <div className=" flex justify-start items-end max-w-full">
              <ProfileOptions username={data.username} />
            </div>
          </div>
          <div className="mb-3 mt-1">
            <div className="flex flex-col grow overflow-hidden">
              <div className="text-black dark:text-white break-words whitespace-nowrap text-ellipsis overflow-hidden font-cBold leading-6 text-[20px]">
                <span>{data.name}</span>
              </div>
              <div className="text-[#71767B] break-words whitespace-nowrap text-ellipsis overflow-hidden font-cReg leading-5 text-[15px]">
                <span>@{data.username}</span>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="font-cR">{data.bio}</div>
          </div>
          <div className="mb-3 flex items-center">
            <Calender className="w-[18.75px] fill-[#71767b] mr-2" />
            <span className="font-cR text-[#71767b] ">
              Joined{" "}
              <span>{dayjs(data.accountCreatedAt).format("MMMM YYYY")}</span>
            </span>
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
          <div
            className="w-[36px] h-[36px] mb-3 rounded-full border border-[#536471] mr-2 flex justify-center items-center hover:bg-[#eff3f4]/[0.1]"
            role="button"
          >
            <Ellipsis className="dark:fill-white w-[20px]" />
          </div>
          <div className="mb-3 min-w-[81px] ">
            <RoundedTextButton
              text={"Follow"}
              className={`btn--action flex min-w-[81px] min-h-[36px] rounded-full mb-3 px-4`}
              disabled
            />
          </div>
        </div>
      )}
    </div>
  );
};
