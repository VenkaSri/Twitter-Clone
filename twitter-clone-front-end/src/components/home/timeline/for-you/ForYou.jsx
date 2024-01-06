import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import RelativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { useGetAllPostsQuery } from "@/services/postApi";
import { Link, useNavigate } from "react-router-dom";
import ProfilePicture from "@/components/ProfilePicture";
import { DisplayNameAndUsername } from "@components/home/timeline/DisplayNameAndUsername";
import { MoreOptionsButton } from "@/components/MoreOptionsButton";
import { PostMedia } from "@/components/post/media/PostMedia";
import { PostSkeleton } from "@/components/post/Skeleton";
import { PostActions } from "@/components/post/PostActions";
import { ProfilePopover } from "@/components/ProfilePopover";
import { Tooltip } from "@mui/material";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(RelativeTime);

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ",
    s: "%ds",
    m: "1m",
    mm: "%dm",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%d",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export const ForYou = () => {
  const { data: posts, isError, isSuccess, isLoading } = useGetAllPostsQuery();
  const navigate = useNavigate();
  let divs = null;

  if (isSuccess) {
    divs = posts.map((post) => {
      return (
        <div key={post.postId}>
          <div
            onClick={() =>
              navigate(`/${post.userDetails.username}/status/${post.postId}`)
            }
            className="cursor-pointer hover:bg-black/[0.03]"
          >
            <article className="flex flex-col px-4">
              <div className="flex flex-col grow ">
                <div className="flex grow pt-4"></div>
                <div className="max-w-full flex  grow pb-3 ">
                  <PostProfilePicture userData={post.userDetails} />
                  <div className="flex flex-col grow">
                    <div className="flex">
                      <div onClick={(e) => e.stopPropagation()}>
                        <DisplayNameAndUsername userData={post.userDetails} />
                      </div>

                      <PostCreationInfo datetime={post.createdAt} />
                      <div className="ml-auto">
                        <div
                          className="-m-[8px] self-end"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreOptionsButton />
                        </div>
                      </div>
                    </div>
                    <PostText text={post.text} />
                    <PostMedia media={post.media} />
                    <div className="flex grow mt-3">
                      <PostActions postId={post.postId} home />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="absolute w-full ">
            <div className="border-b border-b-[#eff3f4] dark:border-b-[#2f3336]"></div>
          </div>
        </div>
      );
    });
  }

  if (isLoading) {
    return (divs = (
      <>
        {Array.from({ length: 5 }, (_, index) => (
          <PostSkeleton key={index} />
        ))}
      </>
    ));
  }

  return <>{divs}</>;
};

const PostCreationInfo = ({ datetime }) => {
  // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDateTime = dayjs.utc(datetime);
  const now = dayjs();
  const differenceInDays = now.diff(localDateTime, "day");
  const currentYear = now.year();
  const tooltipTime = dayjs.utc(datetime).format("h:mm a");
  const tooltipDate = dayjs.utc(datetime).format("MMM D, YYYY");

  let displayTime;

  if (differenceInDays < 1) {
    displayTime = localDateTime.fromNow();
  } else {
    if (localDateTime.year() === currentYear) {
      displayTime = localDateTime.format("MMM D");
    } else {
      displayTime = localDateTime.format("MMM D, YYYY");
    }
  }

  return (
    <div className=" text-[#536471] text-[15px] font-cR">
      <div>
        &nbsp;&#183;&nbsp;
        <Tooltip title={`${tooltipTime}·${tooltipDate}`}>
          <span className="hover:underline">{displayTime}</span>
        </Tooltip>
      </div>
    </div>
  );
};

const PostText = ({ text }) => {
  return (
    <div className=" flex grow">
      <div className="flex leading-6 text-[17px] font-cR">
        <span>{text}</span>
      </div>
    </div>
  );
};

const PostProfilePicture = ({ userData }) => {
  return (
    <ProfilePopover userDetails={userData}>
      <div
        className="w-[40px] mr-4 self-start"
        onClick={(e) => e.stopPropagation()}
      >
        <Link to={`/${userData.username}`}>
          <ProfilePicture src={userData.profile_image_url} />
        </Link>
      </div>
    </ProfilePopover>
  );
};
