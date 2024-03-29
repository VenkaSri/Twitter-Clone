import clsx from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Analytics } from "@components/icons/Icons";
import ProfilePicture from "@components/ProfilePicture";
import { UserProfile } from "../UserProfile";
import { MoreOptionsButton } from "../MoreOptionsButton";
import { PostMedia } from "./media/PostMedia";

import PropTypes from "prop-types";
import { PostReply } from "./PostReply";
import { useSession } from "@/hooks/useSession";
import { PostActions } from "./PostActions";
import { useNavigate } from "react-router-dom";

dayjs.extend(utc);
dayjs.extend(timezone);

const PostText = ({ text }) => {
  return (
    <div className="mt-3 flex grow">
      <div className="flex leading-6 text-[17px] font-cReg ">
        <span>{text}</span>
      </div>
    </div>
  );
};

const PostCreationInfo = ({ datetime }) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localTime = dayjs.utc(datetime).tz(timeZone).format("h:mm A");
  const localDate = dayjs.utc(datetime).tz(timeZone).format("MMM D, YYYY");
  return (
    <div className="flex py-4 gap-1 text-[#536471] text-[15px]">
      <span>{localTime}</span>&#183;<span>{localDate}</span>
      &#183;<span>Views</span>
    </div>
  );
};

const PostEngagementButton = ({ post, onClick }) => {
  const { username } = useSession();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${post.userDetails.username}/status/${post.postId}/quotes`);
  };
  return (
    <div
      className={clsx(
        "flex flex-col grow  text-[#536471] text-[15px]" +
          "border-t border-t-[#eff3f4] dark:border-t-[#2f3336] hover:bg-black/[0.03] ",
        { hidden: username !== post.userDetails.username }
      )}
      role="button"
      onClick={handleClick}
    >
      <div className="flex grow py-4 font-cR leading-5 items-center">
        <Analytics className="w-[22.75px] h-[18.75px] pr-0.5 fill-[#536471]" />
        <span className="mt-2">View post engagements</span>
      </div>
    </div>
  );
};
export const Post = ({ postData }) => {
  return (
    <div className="border-b border-b-[#eff3f4] dark:border-b-[#2f3336]">
      <article className="flex flex-col px-4">
        <div className=" flex grow ">
          <div className=" max-w-full flex  grow items-center">
            <div className="w-[40px]">
              <ProfilePicture src={postData.userDetails.profile_image_url} />
            </div>
            <div className="flex-col overflow-hidden shrink-1 flex">
              <UserProfile userData={postData.userDetails} />
            </div>
            <div className="ml-auto self-start ">
              <MoreOptionsButton />
            </div>
          </div>
        </div>
        <PostText text={postData.text} />
        <PostMedia media={postData.media} />
        <PostCreationInfo datetime={postData.createdAt} />
        <PostEngagementButton post={postData} />
        <div className="flex flex-col h-[48px] justify-center border-y border-y-[#eff3f4] dark:border-y-[#2f3336]">
          <div className="flex grow items-center">
            <PostActions postId={postData.postId} />
          </div>
        </div>
      </article>
      <div className="">
        <PostReply />
      </div>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};

PostEngagementButton.propTypes = {
  post: PropTypes.object,
  onClick: PropTypes.func,
};

PostText.propTypes = {
  text: PropTypes.string,
};

PostCreationInfo.propTypes = {
  datetime: PropTypes.string,
};
