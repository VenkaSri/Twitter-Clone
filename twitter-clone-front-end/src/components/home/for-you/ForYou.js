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
import { RoundedIconButton } from "../../RoundedIconButton";
import { Reply } from "../../icons/icons";
import clsx from "clsx";

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
    h: "%dh",
    hh: "%dh",
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
        <div key={post.id}>
          <div className="cursor-pointer">
            <article className="flex-col-container px-4">
              <div className="flex-col-container flex grow ">
                <div className="flex grow pt-4"></div>
                <div className="max-w-full flex  grow pb-3 ">
                  <div className="w-[40px] mr-4">
                    <ProfilePicture userId={post.userDetails.id} />
                  </div>
                  <div className="flex-col-container grow  ">
                    <div className="flex">
                      <div>
                        <TimelineUserInfo userData={post.userDetails} />
                      </div>
                      <div>
                        <PostCreationInfo datetime={post.createdAt} />
                      </div>
                      <div className="ml-auto">
                        <div className="-m-[8px] self-end">
                          <MoreButton />
                        </div>
                      </div>
                    </div>
                    <PostText text={post.text} />
                    <PostMedia media={post.media} />
                    <div className="flex grow mt-3">
                      <PostActions postId={post.postId} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="absolute w-full ">
            <div className="border-b border-b-[#eff3f4]"></div>
          </div>
        </div>
      );
    });
  }

  return <>{divs}</>;
};

const PostCreationInfo = ({ datetime }) => {
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
      displayTime = localDateTime.format("MMM D");
    } else {
      displayTime = localDateTime.format("MMM D, YYYY");
    }
  }

  return (
    <div className="gap-1 text-[#536471] text-[15px] ">
      &nbsp;&#183;&nbsp;<span>{displayTime}</span>
    </div>
  );
};
