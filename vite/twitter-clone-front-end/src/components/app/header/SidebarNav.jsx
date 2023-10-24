import { useTheme } from "@/hooks/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Icons from "@components/icons/Icons";

const SidebarNav = () => {
  const hide = useMediaQuery("(max-height:751px)");
  const links = [
    {
      name: "Home",
      // iconFilled: <Icons.HomeFilled />,
      iconOutlined: Icons.HomeOutlined,
    },
    {
      name: "Explore",
      // iconFilled: <Icons.ExploreFilled />,
      iconOutlined: Icons.ExploreOutlined,
    },
    {
      name: "Notifications",
      // iconFilled: <Icons.NotificationsFilled />,
      iconOutlined: Icons.NotificationsOutlined,
    },
    {
      name: "Messages",
      // iconFilled: <Icons.MessagesFilled />,
      iconOutlined: Icons.MessagesOutlined,
    },
    {
      name: "Lists",
      // iconFilled: <Icons.ListsFilled />,
      iconOutlined: Icons.ListsOutlined,
    },
    {
      name: "Bookmarks",
      // iconFilled: <Icons.BookmarksFilled />,
      iconOutlined: Icons.BookmarksOutlined,
    },
    {
      name: "Communities",
      // iconFilled: <Icons.CommunitiesFilled />,
      iconOutlined: Icons.CommunitiesOutlined,
    },
    {
      name: "Premium",
      // iconFilled: <Icons.PremiumFilled />,
      iconOutlined: Icons.ProfileOutlined,
    },
    {
      name: "Profile",
      // iconFilled: <Icons.ProfileFilled />,
      iconOutlined: Icons.ProfileOutlined,
    },
    {
      name: "More",
      // iconFilled: <Icons.MoreFilled />,
      iconOutlined: Icons.MoreOutlined,
    },
  ];

  const headerButtons = links.map((link) => {
    let visibility = "";

    if (link === "Bookmarks" && hide) {
      visibility = "hidden";
    }
    return (
      <HeaderButton
        key={link.name}
        icon={link.iconOutlined}
        text={link.name}
        visibility={visibility}
      />
    );
  });

  return (
    <>
      <nav className="tablet:self-start self-center">{headerButtons}</nav>
    </>
  );
};

export default SidebarNav;

const HeaderButton = ({ icon: Icon, text, visibility }) => {
  const { darkMode } = useTheme();
  const padding = useMediaQuery("(max-height:850px)");

  return (
    <a
      className={`w-full  flex flex-col items-start ${visibility} ${
        padding ? "py-0" : "py-1"
      }`}
    >
      <div className="header--link">
        <div>{<Icon className="w-[26.25px]" />}</div>
        <div className="leading-6 mr-4 ml-5 text-[20px] font-cReg tablet:block hidden">
          <span>{text}</span>
        </div>
      </div>
    </a>
  );
};
