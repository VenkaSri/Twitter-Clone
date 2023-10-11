import React, { useEffect, useRef, useState } from "react";
import {
  TweetSectionProvider,
  useTweetSectionContext,
} from "../../context/TweetSectionCtx";
import ProfilePicture from "../ProfilePicture";
import RoundedButton from "../RoundedButton";
import { REPLY_BUTTON_VALUE } from "../../constants";
import PostEditor from "../main/maincolumn/PostEditor";
import { PostOptions } from "./compose/PostOptions";
import clsx from "clsx";
import { PostEditorMedia } from "./compose/PostEditorMedia";

export const PostReply = ({ postInfo }) => {
  const parentRef = useRef(null);
  const [childHeight, setChildHeight] = useState(48);
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
  useEffect(() => {
    if (parentRef.current && childHeight !== null) {
      parentRef.current.style.height = `${childHeight + 15}px`;
    }
  }, [childHeight]);
  const handleReply = () => {
    console.log("hi");
  };
  console.log(isInputActive);
  return (
    <div className="z-[1]">
      <div></div>
      <div className="pt-1 pb-3 flex-col-container">
        {isInputActive && (
          <div className="min-h-[12px] px-4 flex">
            <div className="flex basis-10 mr-3"></div>
            <div className="flex grow text-[#536471]">
              Replying to&nbsp;
              <span className="text-[var(--primary-color)]">@{postInfo}</span>
            </div>
          </div>
        )}
        <div className="min-h-[12px] px-4 flex">
          <div className="pt-3 mr-3 flex-col-container basis-10">
            <ProfilePicture />
          </div>
          <div className="flex-col-container grow pt-1">
            <div className="flex">
              <div
                className="flex max-h-[720px] grow relative min-h-[48px]"
                ref={parentRef}
              >
                <PostEditor
                  onHeightChange={setChildHeight}
                  placeholder={"Post your reply"}
                />
              </div>
              {!isInputActive && (
                <div className="centered-column-container">
                  <RoundedButton
                    onClick={handleReply}
                    styles={
                      "ml-3 min-w-[36px] min-h-[36px] px-4 header--newPostButton "
                    }
                    btnContent={REPLY_BUTTON_VALUE}
                    isDisabled={true}
                  />
                </div>
              )}
            </div>
            <div
              className={clsx({ "mt-4": isInputActive && paths.length > 0 })}
            >
              <PostEditorMedia uploadedImages={paths} />
            </div>
            {isInputActive && <PostOptions />}
          </div>
        </div>
      </div>
    </div>
  );
};
