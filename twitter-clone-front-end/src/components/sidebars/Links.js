import { EXPLORE, SETTINGS } from "../../utils/Paths";
import SideBarLink from "./SidebarLink";

const Links = () => {
  return (
    <div className="ml-5">
      <ul>
        <SideBarLink svgPath={EXPLORE} name="Explore" />
        <SideBarLink svgPath={SETTINGS} name="Settings" />
      </ul>
    </div>
  );
};

export default Links;
