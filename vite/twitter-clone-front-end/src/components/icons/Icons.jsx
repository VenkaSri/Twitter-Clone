import PropTypes from "prop-types";

import {
  ANALYTICS,
  APPLE,
  BACK,
  BOOKMARK,
  CLOSE,
  COMMENT,
  LIKE,
  LIKE_FILLED,
  MAGNIFY,
  QUILL,
  REPOST,
  SHARE,
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
