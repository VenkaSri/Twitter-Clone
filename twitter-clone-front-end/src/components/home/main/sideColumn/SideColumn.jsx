import RoundedTextButton from "@/components/RoundedTextButton";
import { OverlayLoader } from "@/components/dialog/OverlayLoader";
import { SearchBar } from "@components/home/main/SearchBar";
import { Suspense, lazy } from "react";
import { FollowSuggestions } from "./FollowSuggestions";

export const SideColumn = () => {
  return (
    <div className="w-[350px] mr-[10px] max-[1092px]:w-[290px] max-[1002px]:hidden  pb-16">
      <div className="mb-4 w-full h-[53px] flex items-center z-[2] sticky top-0 bg-white dark:bg-black">
        <SearchBar />
      </div>
      <SideColumnCard title={"Repo & Updates"}>
        <div className="font-cBold  leading-6 flex flex-col">
          <span>
            I&apos;ve cloned Twitter/X to refine my coding expertise, and
            I&apos;m deploying updates using CI/CD to master this workflow. Take
            a look at my repo to track what I&apos;m implementing next!
          </span>
        </div>

        <div className="flex">
          <RoundedTextButton
            text="Repo"
            className="btn--action min-h-[36px] min-w-[36px] flex  px-8"
          />
        </div>
      </SideColumnCard>
      <SideColumnCard title={"Who to follow"}>
        <Suspense fallback={<OverlayLoader />}>
          <FollowSuggestions />
        </Suspense>
      </SideColumnCard>
    </div>
  );
};

const SideColumnCard = ({ children, title }) => {
  return (
    <div className="mb-4 bg-[#f7f9f9] rounded-2xl dark:bg-[#16181c]">
      <div className="flex flex-col gap-[10px] px-4 py-3">
        <h2 className="leading-6 text-[20px]  font-cBold">{title}</h2>
        {children}
      </div>
    </div>
  );
};
