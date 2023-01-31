import { EXPLORE, SETTINGS } from "../../../utils/ButtonLinkObjects";
import SideBarLink from "./SidebarLink";

const Links = () => {
  return (
    <>
        <SideBarLink svgPath={EXPLORE} name="Explore" />
        <SideBarLink svgPath={SETTINGS} name="Settings" />
    </>
  );
};

export default Links;
