import clsx from "clsx";
import React from "react";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";
import { RouteRounded } from "@mui/icons-material";
import getIcon from "../../../utils/icons/iconsutil";
import TweetOptions from "../../main/maincolumn/TweetOptions";
import CharactersProgress from "../../main/maincolumn/CharactersProgress";
import RoundedButton from "../../RoundedButton";
import { REPLY_BUTTON_VALUE } from "../../../constants";

export const PostOptions = () => {
  const {
    hasUserTyped,
    isInputActive,
    validPost,
    postText,
    isLoading,
    setIsLoading,
    mediaFiles,
    resetStates,
    paths,
    setPostCreated,
  } = useTweetSectionContext();
  const post = () => console.log("D");
  return (
    <div
      className={clsx("flex flex-col  sticky bottom-0 z-[2] bg-white", {
        "": isInputActive,
        hidden: isLoading,
      })}
    >
      <div className="-ml-3">
        <div
          className={clsx("flex", {
            "pb-3 ": isInputActive,
          })}
        ></div>
      </div>
      <div className={`-ml-2 mt-1 h-[48px] flex items-center justify-between `}>
        <TweetOptions isReply />
        <div className="h-[36px] flex   items-center ">
          {hasUserTyped && (
            <>
              <CharactersProgress />
              <div className=" mr-3 ml-[10px] h-[31px]  w-[1px] bg-[#b9cad3]"></div>
              <div className="border border-[#cfd9de] min-h-[24px] min-w-[24px] rounded-full centered-column-container">
                {getIcon("Add", {
                  width: 16,
                  fill: "var(--primary-color)",
                })}
              </div>
            </>
          )}
          <RoundedButton
            onClick={post}
            styles={"ml-3 min-w-[36px] min-h-[36px] px-4 header--newPostButton"}
            btnContent={REPLY_BUTTON_VALUE}
            isDisabled={!validPost}
          />
        </div>
      </div>
    </div>
  );
};
