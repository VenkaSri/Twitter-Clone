import { EXPLORE, SETTINGS } from "../../../utils/ButtonLinkObjects";
import SideBarLink from "./SidebarLink";

const Links = () => {
  return (
    <div className="ml-12 mt-4 max-xl:ml-[7.5rem]">
      <ul>
        <SideBarLink svgPath={EXPLORE} name="Explore" />
        <SideBarLink svgPath={SETTINGS} name="Settings" />
      </ul>
    </div>
  );
};

export default Links;
