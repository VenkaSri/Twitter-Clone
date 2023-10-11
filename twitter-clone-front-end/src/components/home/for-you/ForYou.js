import React from "react";
import ProfilePicture from "../../ProfilePicture";
import { UserProfile } from "../../UserProfile";
import { MoreButton } from "../../MoreButton";
import { PostMedia } from "../../post/post-media/PostMedia";

export const ForYou = () => {
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

        {/* <PostMedia /> */}
      </article>
    </div>
  );
};
