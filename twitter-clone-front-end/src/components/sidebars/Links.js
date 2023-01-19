import { EXPLORE, SETTINGS } from "../../utils/ButtonLinkObjects";
import SideBarLink from "./SidebarLink";

const Links = () => {
  return (
    <div className="ml-5 mt-4">
      <ul>
        <SideBarLink svgPath={EXPLORE} name="Explore" />
        <SideBarLink svgPath={SETTINGS} name="Settings" />
      </ul>
    </div>
  );
};

export default Links;
