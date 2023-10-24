import PropTypes from "prop-types";

import {
  ANALYTICS,
  APPLE,
  BACK,
  BOOKMARK,
  BOOKMARKS,
  CAMERA,
  CHECKMARK,
  CLOSE,
  COMMENT,
  COMMUNITIES,
  EXCLAMATION,
  EXPLORE,
  HOME,
  LIKE,
  LIKE_FILLED,
  LISTS,
  MAGNIFY,
  MESSSAGES,
  MORE,
  NOTIFICATION,
  PREMIUM,
  PROFILE,
  QUILL,
  REPOST,
  SHARE,
  VISIBILITY,
  VISIBILITY_OFF,
  X_LOGO,
} from "@/constants/icons";
import SVG from "@components/icons/SVG";

export const Analytics = ({ className }) => (
  <SVG path={ANALYTICS} className={className} />
);
export const Reply = ({ className }) => (
  <SVG path={COMMENT} className={className} />
);
export const Repost = ({ className }) => (
  <SVG path={REPOST} className={className} />
);
export const Like = ({ className }) => (
  <SVG path={LIKE} className={className} />
);

export const LikeFilled = ({ className }) => (
  <SVG path={LIKE_FILLED} className={className} />
);
export const Bookmark = ({ className }) => (
  <SVG path={BOOKMARK} className={className} />
);
export const Share = ({ className }) => (
  <SVG path={SHARE} className={className} />
);

export const Logo = ({ className }) => (
  <SVG path={X_LOGO} className={className} />
);

export const Search = ({ className }) => (
  <SVG path={MAGNIFY} className={className} />
);

export const Quill = ({ className }) => (
  <SVG path={QUILL} className={className} />
);

export const Apple = ({ className }) => (
  <SVG path={APPLE} className={className} />
);

export const Back = ({ className }) => (
  <SVG path={BACK} className={className} />
);

export const Close = ({ className }) => (
  <SVG path={CLOSE} className={className} />
);

export const Checkmark = ({ className }) => (
  <SVG path={CHECKMARK} className={className} />
);

export const Visibility = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={VISIBILITY} className={className} />
);

export const VisibilityOff = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={VISIBILITY_OFF} className={className} />
);

export const Camera = ({ className = "w-5" }) => (
  <SVG path={CAMERA} className={className} />
);

export const Exclamation = ({ className = "w-5" }) => (
  <SVG path={EXCLAMATION} className={className} />
);

export const Ellipsis = ({ className = "w-5" }) => (
  <SVG path={EXCLAMATION} className={className} />
);

export const HomeOutlined = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={HOME} className={className} />
);

export const MessagesOutlined = ({ className = "w-5" }) => (
  <SVG path={MESSSAGES} className={className} />
);

export const CommunitiesOutlined = ({ className = "w-5" }) => (
  <SVG path={COMMUNITIES} className={className} />
);

export const ExploreOutlined = ({ className = "w-5" }) => (
  <SVG path={EXPLORE} className={className} />
);

export const NotificationsOutlined = ({
  className = "w-5 dark:fill-white",
}) => <SVG path={NOTIFICATION} className={className} />;

export const BookmarksOutlined = ({ className = "w-5" }) => (
  <SVG path={BOOKMARKS} className={className} />
);

export const MoreOutlined = ({ className = "w-5" }) => (
  <SVG path={MORE} className={className} />
);

export const ProfileOutlined = ({ className = "w-5" }) => (
  <SVG path={PROFILE} className={className} />
);

export const ListsOutlined = ({ className = "w-5" }) => (
  <SVG path={LISTS} className={className} />
);

export const PremiumOutlined = ({ className = "w-5" }) => (
  <SVG path={PREMIUM} className={className} />
);

const iconPropTypes = {
  className: PropTypes.string,
};

Analytics.propTypes = iconPropTypes;
Reply.propTypes = iconPropTypes;
Repost.propTypes = iconPropTypes;
Like.propTypes = iconPropTypes;
Bookmark.propTypes = iconPropTypes;
Share.propTypes = iconPropTypes;
LikeFilled.propTypes = iconPropTypes;
Quill.propTypes = iconPropTypes;
Search.propTypes = iconPropTypes;
Logo.propTypes = iconPropTypes;
Apple.propTypes = iconPropTypes;
Close.propTypes = iconPropTypes;
Back.propTypes = iconPropTypes;
Checkmark.propTypes = iconPropTypes;
Visibility.propTypes = iconPropTypes;
VisibilityOff.propTypes = iconPropTypes;
Camera.propTypes = iconPropTypes;
Exclamation.propTypes = iconPropTypes;
Ellipsis.propTypes = iconPropTypes;
HomeOutlined.propTypes = iconPropTypes;
NotificationsOutlined.propTypes = iconPropTypes;
ProfileOutlined.propTypes = iconPropTypes;
MoreOutlined.propTypes = iconPropTypes;
BookmarksOutlined.propTypes = iconPropTypes;
ListsOutlined.propTypes = iconPropTypes;
ExploreOutlined.propTypes = iconPropTypes;
MessagesOutlined.propTypes = iconPropTypes;
CommunitiesOutlined.propTypes = iconPropTypes;
PremiumOutlined.propTypes = iconPropTypes;
