import { EXPLORE, SETTINGS } from "../../../utils/ButtonLinkObjects";
import SideBarLink from "./SidebarLink";

const Links = () => {
  return (
    <>
      <ul>
        <SideBarLink svgPath={EXPLORE} name="Explore" />
        <SideBarLink svgPath={SETTINGS} name="Settings" />
      </ul>
    </>
  );
};

export default Links;
