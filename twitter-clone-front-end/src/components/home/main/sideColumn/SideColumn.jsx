import RoundedTextButton from "@/components/RoundedTextButton";
import { OverlayLoader } from "@/components/dialog/OverlayLoader";
import { SearchBar } from "@components/home/main/SearchBar";
import { Suspense } from "react";
import PropTypes from "prop-types";

import { FollowSuggestions } from "./FollowSuggestions";
import clsx from "clsx";

export const SideColumn = () => {
  return (
    <div className="w-[350px] mr-[10px] max-[1092px]:w-[290px] max-[1002px]:hidden  pb-16">
      <div className="mb-4 w-full h-[53px] flex items-center z-[2] sticky top-0 bg-white dark:bg-black">
        <SearchBar />
      </div>
      <div className="sticky top-16">
        <SideColumnCard
          title={"Repo & Updates"}
          className="px-4 py-3 gap-[10px]"
        >
          <div className="font-cBold  leading-6 flex flex-col">
            <span>
              I&apos;m deploying updates using CI/CD to gain experience with the
              workflow. Take a look at my repo to track what I&apos;m
              implementing next!
            </span>
          </div>

          <a
            className="flex"
            href="https://github.com/users/VenkaSri/projects/2"
            target="_blank"
            rel="noreferrer"
          >
            <RoundedTextButton
              text="Repo"
              className="btn--action min-h-[36px] min-w-[36px] flex  px-8"
            />
          </a>
        </SideColumnCard>
        <SideColumnCard title={"Who to follow"}>
          <Suspense fallback={<OverlayLoader />}>
            <FollowSuggestions />
          </Suspense>
          <div className="font-cR text-[#1D9BF0] px-4 py-3 hover:bg-[#F7F7F7]  dark:hover:bg-[#fff]/[.03] cursor-not-allowed min-h-[52px]">
            Show more
          </div>
        </SideColumnCard>
      </div>
    </div>
  );
};

const SideColumnCard = ({ children, title, className }) => {
  return (
    <div className="mb-4 bg-[#f7f9f9] rounded-2xl dark:bg-[#16181c]">
      <h2 className="leading-6 text-[20px]  font-cBold px-4 py-3">{title}</h2>
      <div className={clsx("flex flex-col ", className)}>{children}</div>
    </div>
  );
};

SideColumnCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};
