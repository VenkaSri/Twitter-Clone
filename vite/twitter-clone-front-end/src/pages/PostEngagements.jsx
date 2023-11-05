import { TabLink } from "@/components/TabLink";
import Head from "@/components/head/Head";
import { MainSectionHeader } from "@/components/layout/MainSectionHeader";

export const PostEngagements = () => {
  return (
    <>
      <Head title="Quotes of this post" />
      <MainSectionHeader text="Post engagements">
        <div className="mainColumn--topNav-links">
          <nav className="w-full h-14 flex">
            <TabLink text={"Quotes"} isSelected={true} />
            <TabLink text={"Reposts"} disabled />
            <TabLink text={"Likes"} disabled />
          </nav>
        </div>
      </MainSectionHeader>
    </>
  );
};
