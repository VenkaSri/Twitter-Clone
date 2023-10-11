import React, { useEffect, useState } from "react";
import ProfilePicture from "../../ProfilePicture";
import { UserProfile } from "../../UserProfile";
import { MoreButton } from "../../MoreButton";
import { PostMedia } from "../../post/post-media/PostMedia";
import { useGetAllPostsQuery } from "../../../services/post/postApi";
import { PostText } from "../../post/PostText";

export const ForYou = () => {
  const { data: posts, isLoading, isError, isSuccess } = useGetAllPostsQuery();
  const [allPosts, setAllPosts] = useState(null);
  let divs = null;

  if (isSuccess) {
    divs = posts.map((post) => {
      return <PostText text={post.text} />;
    });
  }

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
        {divs}
      </article>
    </div>
  );
};
