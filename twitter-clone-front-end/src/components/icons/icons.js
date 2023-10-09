import { BOOKMARK } from "../../utils/ButtonLinkObjects";
import {
  ANALYTICS,
  COMMENT,
  LIKE,
  REPOST,
  SHARE,
} from "../../utils/constants/iconPaths";
import SVGIcon from "./SVGIcon";

export const Analytics = ({ className }) => (
  <SVGIcon path={ANALYTICS} className={className} />
);
export const Reply = ({ className }) => (
  <SVGIcon path={COMMENT} className={className} />
);
export const Repost = ({ className }) => (
  <SVGIcon path={REPOST} className={className} />
);
export const Like = ({ className }) => (
  <SVGIcon path={LIKE} className={className} />
);
export const Bookmark = ({ className }) => (
  <SVGIcon path={BOOKMARK} className={className} />
);
export const Share = ({ className }) => (
  <SVGIcon path={SHARE} className={className} />
);