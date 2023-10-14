import ProfilePicture from "../../ProfilePicture";

import { MoreButton } from "../../MoreButton";
import { PostMedia } from "../../post/post-media/PostMedia";
import { useGetAllPostsQuery } from "../../../services/post/postApi";
import { PostText } from "../../post/PostText";

import { TimelineUserInfo } from "../TimelineUserInfo";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import RelativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

import { LikePostButton } from "../../post/post-interactions/LikePostButton";

import { PostSkeleton } from "../PostSkeleton";
import { ReplyPostButton } from "../../post/post-interactions/ReplyPostButton";
import { RepostPostButton } from "../../post/post-interactions/RepostPostButton";
import { BookmarkPostButton } from "../../post/post-interactions/BookmarkPostButton";
import { AnalyticsPostButton } from "../../post/post-interactions/AnalyticsPostButton";
import { SharePostButton } from "../../post/post-interactions/SharePostButton";
import { Link, useNavigate } from "react-router-dom";

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
    d: "a day",
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
        <div key={post.id}>
          <div
            onClick={() =>
              navigate(`/${post.userDetails.username}/status/${post.postId}`)
            }
            className="cursor-pointer hover:bg-black/[0.03]"
          >
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
                      <ReplyPostButton postId={post.postId} />
                      <RepostPostButton postId={post.postId} />
                      <LikePostButton postId={post.postId} />
                      <BookmarkPostButton postId={post.postId} />
                      <AnalyticsPostButton postId={post.postId} />
                      <SharePostButton />
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
