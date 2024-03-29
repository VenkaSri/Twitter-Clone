import ProfilePicture from "@/components/ProfilePicture";
import { RoundedIconButton } from "@/components/RoundedIconButton";
import { PostEditor } from "@/components/post/editor/PostEditor";
import { PostEditorProvider } from "@/context/home/post-editor-context";
import { TabLink } from "@components/TabLink";
import { Gear, Logo } from "@components/icons/Icons";
import { useState } from "react";
import { Timeline } from "../../timeline/Timeline";
import { useSession } from "@/hooks/useSession";
import Head from "@/components/head/Head";
import { MobileDrawer } from "../../header/mobile/MobileDrawer";

export const MainColumn = () => {
  return (
    <>
      <Head title="Home" />
      <div className="main--mainColumn ">
        <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
          <MainColumnNav />
        </div>
        <div className="z-[1]">
          <PostEditorProvider>
            <PostEditor />
          </PostEditorProvider>
        </div>
        <Timeline />
      </div>
    </>
  );
};

const MainColumnNav = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("For you");
  const { profilePicture } = useSession();
  localStorage.setItem("timelinePrefernce", "For you");
  const handleClick = (event) => {
    const tabType = event.currentTarget.getAttribute("data-tab-type");
    localStorage.setItem("timelinePrefernce", tabType);
    setSelectedTab(tabType);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <MobileDrawer isOpen={open} toggleFunction={toggleOpen} />
      <div className="mainColumn--topNav-heading mobile:hidden flex">
        <div className="flex relative px-4">
          <div className="absolute inset-0 flex justify-center items-center mobile:hidden pointer-events-none">
            <Logo className="w-[30px] dark:fill-white" />
          </div>
          <div className="mobile:hidden block" onClick={toggleOpen}>
            <ProfilePicture src={profilePicture} />
          </div>
          <div className="w-[36px] flex justify-center items-center disabled-link absolute right-0">
            <RoundedIconButton
              className="w-[36px] h-[36px] hover:bg-[#0f1419]/[.1] dark:hover:bg-[#eff3f1]/[.1] border-transparent"
              icon={<Gear className="w-[20px] dark:fill-white" />}
            />
          </div>
        </div>
      </div>
      <div className="mainColumn--topNav-links">
        <nav className="w-full h-14 flex">
          <TabLink
            text={"For you"}
            isSelected={selectedTab === "For you"}
            onClick={handleClick}
          />
          <TabLink
            text={"Following"}
            isSelected={selectedTab === "Following"}
            onClick={handleClick}
            disabled
          />
          <div className="w-[36px] hidden justify-center items-center disabled-link mobile:flex">
            <RoundedIconButton
              className="w-[36px] h-[36px] hover:bg-[#0f1419]/[.1] dark:hover:bg-[#eff3f1]/[.1] border-transparent"
              icon={<Gear className="w-[20px] dark:fill-white" />}
            />
          </div>
        </nav>
      </div>
    </>
  );
};
