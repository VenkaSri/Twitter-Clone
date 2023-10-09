import React, { useState } from "react";
import ProfilePicture from "../ProfilePicture";
import { UserProfile } from "../UserProfile";
import getIcon from "../../utils/icons/iconsutil";
import { MoreButton } from "../MoreButton";
import clsx from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { PostMedia } from "./post-media/PostMedia";
import { TweetSectionProvider } from "../../context/TweetSectionCtx";
import {
  Analytics,
  Bookmark,
  Like,
  Reply,
  Repost,
  Share,
} from "../icons/icons";
import RoundedButton from "../RoundedButton";
import { RoundedIconButton } from "../RoundedIconButton";
import TweetSection from "../main/maincolumn/TweetSection";
import { PostReply } from "./PostReply";

dayjs.extend(utc);
dayjs.extend(timezone);

const PostText = ({ text }) => {
  return (
    <div className="mt-3 flex grow">
      <div className="flex leading-6 text-[17px] font-cReg ">
        <span>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi.
          adffasdfsadffddsafdfas
        </span>
      </div>
    </div>
  );
};

const PostCreationInfo = ({ datetime }) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timeZone);
  const localTime = dayjs.utc(datetime).tz(timeZone).format("h:mm A");
  const localDate = dayjs.utc(datetime).tz(timeZone).format("MMM D, YYYY");
  console.log(datetime);
  return (
    <div className="flex py-4 gap-1 text-[#536471] text-[15px]">
      <span>{localTime}</span>&#183;<span>{localDate}</span>
      &#183;<span>Views</span>
    </div>
  );
};

const PostActions = () => {
  const icons = [
    {
      Component: Reply,
      className: "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)]",
    },
    {
      Component: Repost,
      className: "hover:bg-[#00ba7c]/[0.1] hover:fill-[#00ba7c]",
    },
    {
      Component: Like,
      className: "hover:bg-[#f91881]/[0.1] hover:fill-[#f91881]",
    },
    {
      Component: Bookmark,
      className: "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)]",
    },
    {
      Component: Share,
      className: "hover:bg-[#1d9cf0]/[0.1] hover:fill-[var(--primary-color)]",
      noFlex: true,
    },
  ];

  return (
    <>
      {icons.map(({ Component, className, noFlex }, index) => {
        return (
          <div key={index} className={noFlex ? "" : "flex flex-1"}>
            <RoundedIconButton
              className={clsx(
                "w-[38.5px] h-[38.5px] centered-column-container rounded-full " +
                  className
              )}
              icon={<Component className={"w-[22.75px] h-[18.75px]"} />}
            />
          </div>
        );
      })}
    </>
  );
};

const PostEngagementButton = ({ postId, onClick }) => {
  return (
    <div
      className="button--post-engagement hover:bg-black/[0.03]"
      role="button"
      onClick={onClick}
    >
      <div className="flex grow py-4 font-cReg leading-5">
        <Analytics className="w-[22.75px] h-[18.75px] pr-0.5 fill-[#536471] " />
        <span>View post engagements</span>
      </div>
    </div>
  );
};
export const Post = ({ postData }) => {
  return (
    <div className="border-b border-b-[#eff3f4] dark:border-b-[var(--primary-dark-border-color)]">
      <article className="flex-col-container px-4">
        <div className=" flex grow ">
          <div className=" max-w-full flex  grow items-center">
            <div className="w-[40px]">
              <ProfilePicture />
            </div>
            <div className="flex-col-container overflow-hidden shrink-1 tablet:block hidden">
              <UserProfile />
            </div>
            <div className="ml-auto self-start ">
              <MoreButton />
            </div>
          </div>
        </div>
        <PostText text={postData.Text} />
        <PostMedia media={postData.media} />
        <PostCreationInfo datetime={postData.createdAt} />
        <PostEngagementButton />
        <div className="post-actions">
          <div className="flex grow items-center">
            <PostActions />
          </div>
        </div>
      </article>
      <div className="">
        <PostReply />
      </div>
    </div>
  );
};
