import React, { useEffect, useState } from "react";
import ProfilePicture from "../../ProfilePicture";
import { UserProfile } from "../../UserProfile";
import { MoreButton } from "../../MoreButton";
import { PostMedia } from "../../post/post-media/PostMedia";
import { useGetAllPostsQuery } from "../../../services/post/postApi";
import { PostText } from "../../post/PostText";
import { PostActions } from "../../post/PostActions";
import { TimelineUserInfo } from "../TimelineUserInfo";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import RelativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(RelativeTime);

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ",
    s: "%ds",
    m: "a minute",
    mm: "%dm",
    h: "h",
    hh: "h",
    d: "a day",
    dd: "%d",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

export const ForYou = () => {
  const { data: posts, isLoading, isError, isSuccess } = useGetAllPostsQuery();
  const [allPosts, setAllPosts] = useState(null);
  let divs = null;

  if (isSuccess) {
    divs = posts.map((post) => {
      return (
        <div>
          <div className="border-b border-b-[#eff3f4] dark:border-b-[var(--primary-dark-border-color)]">
            <article className="flex-col-container px-4">
              <div className=" flex grow ">
                <div className=" max-w-full flex  grow ">
                  <div className="w-[40px] mr-4">
                    <ProfilePicture />
                  </div>
                  <div className="flex-col-container grow justify-center">
                    <div className="flex grow br">
                      <div className="self-center">
                        <TimelineUserInfo userData={post.userDetails} />
                      </div>
                      <PostCreationInfo datetime={post.createdAt} />
                      <div className="ml-auto  self-center">
                        <MoreButton />
                      </div>
                    </div>
                    <div className="-mt-2">
                      <PostText text={post.text} />
                    </div>

                    <PostMedia media={post.media} />
                    <div className="post-actions">
                      <div className="flex grow items-center">
                        <PostActions />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      );
    });
  }

  return <>{divs}</>;
};

// const PostCreationInfo = ({ datetime }) => {
//   const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   console.log(timeZone);
//   const localTime = dayjs.utc(datetime).tz(timeZone).fromNow();

//   return (
//     <div className="inline-flex py-4 gap-1 text-[#536471] text-[15px] ">
//       &#183;<span>{localTime}</span>
//     </div>
//   );
// };

const PostCreationInfo = ({ datetime }) => {
  console.log(datetime);
  // const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localDateTime = dayjs.utc(datetime);
  const now = dayjs();
  const differenceInDays = now.diff(localDateTime, "day");
  const currentYear = now.year();

  let displayTime;

  if (differenceInDays <= 1) {
    displayTime = localDateTime.fromNow();
  } else {
    if (localDateTime.year() === currentYear) {
      displayTime = localDateTime.format("MMM D"); // e.g., "Aug 23"
    } else {
      displayTime = localDateTime.format("MMM D, YYYY"); // e.g., "Aug 23, 2022"
    }
  }

  return (
    <div className="inline-flex py-4 gap-1 text-[#536471] text-[15px] ">
      &#183;<span>{displayTime}</span>
    </div>
  );
};
