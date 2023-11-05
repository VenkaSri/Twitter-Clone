import { ReplyPostButton } from "@components/post/interaction-buttons/ReplyPostButton";
import { RepostPostButton } from "@components/post/interaction-buttons/RepostPostButton";
import { LikePostButton } from "@components/post/interaction-buttons/LikePostButton";
import { BookmarkPostButton } from "@components/post/interaction-buttons/BookmarkPostButton";
import { ViewAnalyticsButton } from "@components/post/interaction-buttons/ViewAnalyticsButton";
import { SharePostButton } from "@components/post/interaction-buttons/SharePostButton";

export const PostActions = ({ postId, home }) => {
  return (
    <>
      <ReplyPostButton postId={postId} />
      <RepostPostButton postId={postId} />
      <LikePostButton postId={postId} />
      <BookmarkPostButton postId={postId} />
      {home && <ViewAnalyticsButton postId={postId} />}
      <SharePostButton />
    </>
  );
};
