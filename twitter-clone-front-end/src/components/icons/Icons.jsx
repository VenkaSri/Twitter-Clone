import PropTypes from "prop-types";

import {
  ANALYTICS,
  APPLE,
  BACK,
  BOOKMARK,
  BOOKMARKS,
  BOOKMARKS_FILLED,
  CAMERA,
  CHECKMARK,
  CLOSE,
  COMMENT,
  COMMUNITIES,
  COMMUNITIES_FILLED,
  DOWN_ARROW,
  ELLIPSIS,
  EMOJI,
  GIF,
  EXCLAMATION,
  EXPLORE,
  EXPLORE_FILLED,
  GEAR,
  GLOBE,
  HOME,
  HOME_FILLED,
  LIKE,
  LIKE_FILLED,
  LISTS,
  LISTS_FILLED,
  LOCATION,
  MAGNIFY,
  MEDIA,
  MESSAGES,
  MESSSAGES_FILLED,
  MORE,
  NOTIFICATION,
  NOTIFICATION_FILLED,
  POLL,
  PROFILE,
  PROFILE_FILLED,
  QUILL,
  REPOST,
  SCHEDULE,
  SHARE,
  VISIBILITY,
  VISIBILITY_OFF,
  X_LOGO,
  dArrow,
  GITHUB,
  PLUS,
  MONETIZATION,
  HELP,
  DATA_SAVER,
  LOGOUT,
  ACCESSIBILITY,
  DISPLAY,
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

export const Close = ({ className = "w-5" }) => (
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
  <SVG path={ELLIPSIS} className={className} />
);

export const HomeOutlined = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={HOME} className={className} />
);

export const HomeFilled = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={HOME_FILLED} className={className} />
);

export const MessagesOutlined = ({ className = "w-5" }) => (
  <SVG path={MESSAGES} className={className} />
);

export const MessagesFilled = ({ className = "w-5" }) => (
  <SVG path={MESSSAGES_FILLED} className={className} />
);

export const CommunitiesOutlined = ({ className = "w-5" }) => (
  <SVG path={COMMUNITIES} className={className} />
);

export const CommunitiesFilled = ({ className = "w-5" }) => (
  <SVG path={COMMUNITIES_FILLED} className={className} />
);

export const ExploreOutlined = ({ className = "w-5" }) => (
  <SVG path={EXPLORE} className={className} />
);

export const ExploreFilled = ({ className = "w-5" }) => (
  <SVG path={EXPLORE_FILLED} className={className} />
);

export const NotificationOutlined = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={NOTIFICATION} className={className} />
);

export const NotificationFilled = ({ className = "w-5 dark:fill-white" }) => (
  <SVG path={NOTIFICATION_FILLED} className={className} />
);

export const BookmarksOutlined = ({ className = "w-5" }) => (
  <SVG path={BOOKMARKS} className={className} />
);

export const BookmarksFilled = ({ className = "w-5" }) => (
  <SVG path={BOOKMARKS_FILLED} className={className} />
);

export const MoreOutlined = ({ className = "w-5" }) => (
  <SVG path={MORE} className={className} />
);

export const ProfileOutlined = ({ className = "w-5" }) => (
  <SVG path={PROFILE} className={className} />
);

export const ProfileFilled = ({ className = "w-5" }) => (
  <SVG path={PROFILE_FILLED} className={className} />
);

export const ListsOutlined = ({ className = "w-5" }) => (
  <SVG path={LISTS} className={className} />
);

export const ListsFilled = ({ className = "w-5" }) => (
  <SVG path={LISTS_FILLED} className={className} />
);

export const DownArrow = ({ className = "w-5" }) => (
  <SVG path={DOWN_ARROW} className={className} />
);

export const Globe = ({ className = "w-5" }) => (
  <SVG path={GLOBE} className={className} />
);

export const Location = ({ className = "w-5" }) => (
  <SVG path={LOCATION} className={className} />
);
export const Schedule = ({ className = "w-5" }) => (
  <SVG path={SCHEDULE} className={className} />
);
export const Poll = ({ className = "w-5" }) => (
  <SVG path={POLL} className={className} />
);
export const Media = ({ className = "w-5" }) => (
  <SVG path={MEDIA} className={className} />
);
export const Gif = ({ className = "w-5" }) => (
  <SVG path={GIF} className={className} />
);

export const Emoji = ({ className = "w-5" }) => (
  <SVG path={EMOJI} className={className} />
);

export const Gear = ({ className = "w-5" }) => (
  <SVG path={GEAR} className={className} />
);

export const DArrow = ({ className = "w-5" }) => (
  <SVG path={dArrow} className={className} />
);

export const GitHub = ({ className = "w-5" }) => (
  <SVG path={GITHUB} className={className} viewBox="0 0 30 30" />
);

export const Plus = ({ className = "w-5" }) => (
  <SVG path={PLUS} className={className} viewBox="0 0 30 30" />
);

export const Monetization = ({ className = "w-5" }) => (
  <SVG path={MONETIZATION} className={className} viewBox="0 0 30 30" />
);

export const Help = ({ className = "w-5" }) => (
  <SVG path={HELP} className={className} />
);

export const Data_Saver = ({ className = "w-5" }) => (
  <SVG path={DATA_SAVER} className={className} />
);

export const Logout = ({ className = "w-5" }) => (
  <SVG path={LOGOUT} className={className} />
);

export const Accessibility = ({ className = "w-5" }) => (
  <SVG path={ACCESSIBILITY} className={className} />
);

export const Display = ({ className = "w-5" }) => (
  <SVG path={DISPLAY} className={className} />
);

export const GoogleIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 48 48" width="20">
        <g>
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </g>
      </svg>
    </div>
  );
};

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
NotificationOutlined.propTypes = iconPropTypes;
NotificationFilled.propTypes = iconPropTypes;
ProfileOutlined.propTypes = iconPropTypes;
MoreOutlined.propTypes = iconPropTypes;
BookmarksOutlined.propTypes = iconPropTypes;
ListsOutlined.propTypes = iconPropTypes;
ExploreOutlined.propTypes = iconPropTypes;
MessagesOutlined.propTypes = iconPropTypes;
CommunitiesOutlined.propTypes = iconPropTypes;
HomeFilled.propTypes = iconPropTypes;
CommunitiesFilled.propTypes = iconPropTypes;
ExploreFilled.propTypes = iconPropTypes;
MessagesFilled.propTypes = iconPropTypes;
ListsFilled.propTypes = iconPropTypes;
ProfileFilled.propTypes = iconPropTypes;
BookmarksFilled.propTypes = iconPropTypes;
DownArrow.propTypes = iconPropTypes;
Globe.propTypes = iconPropTypes;
Gif.propTypes = iconPropTypes;
Schedule.propTypes = iconPropTypes;
Media.propTypes = iconPropTypes;
Poll.propTypes = iconPropTypes;
Location.propTypes = iconPropTypes;
Emoji.propTypes = iconPropTypes;
Gear.propTypes = iconPropTypes;
DArrow.propTypes = iconPropTypes;
GoogleIcon.propTypes = iconPropTypes;
GitHub.propTypes = iconPropTypes;
Plus.propTypes = iconPropTypes;
Monetization.propTypes = iconPropTypes;
Logout.propTypes = iconPropTypes;
Data_Saver.propTypes = iconPropTypes;
Help.propTypes = iconPropTypes;
Accessibility.propTypes = iconPropTypes;
Display.propTypes = iconPropTypes;
