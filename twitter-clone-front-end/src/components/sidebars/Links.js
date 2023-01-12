import { EXPLORE } from "../../utils/Paths";
import SideBarLink from "./SidebarLink";

const Links = () => {
  return <div className="ml-8 mt-5">
    <ul>
      <SideBarLink path={EXPLORE} name="Explore"/>
      <SideBarLink path={EXPLORE} name="Explore"/>
    </ul>
  </div>
}

export default Links;