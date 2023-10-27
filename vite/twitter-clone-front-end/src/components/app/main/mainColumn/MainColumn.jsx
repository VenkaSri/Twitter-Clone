import ProfilePicture from "@/components/ProfilePicture";
import { PostEditor } from "@/components/post/PostEditor";
import { PostEditorProvider } from "@/context/home/post-editor-context";
import { TabLink } from "@components/TabLink";
import { Logo } from "@components/icons/Icons";
import { useState } from "react";

export const MainColumn = () => {
  return (
    <div className="main--mainColumn ">
      <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
        <MainColumnNav />
      </div>
      <div className="z-[1]">
        <PostEditorProvider>
          <PostEditor />
        </PostEditorProvider>
      </div>
    </div>
  );
};

const MainColumnNav = () => {
  const [selectedTab, setSelectedTab] = useState("For you");
  localStorage.setItem("timelinePrefernce", "For you");
  const handleClick = (event) => {
    console.log;
    const tabType = event.currentTarget.getAttribute("data-tab-type");
    localStorage.setItem("timelinePrefernce", tabType);
    setSelectedTab(tabType);
  };

  return (
    <>
      <div className="mainColumn--topNav-heading">
        <div className="flex relative px-4">
          <div className="mobile:hidden block">
            <ProfilePicture />
          </div>
          <div className="absolute inset-0 flex justify-center items-center mobile:hidden">
            <Logo className="w-[30px] dark:fill-white fill-black" />
          </div>

          <span className="self-center hidden mobile:block">Home</span>
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
        </nav>
      </div>
    </>
  );
};
