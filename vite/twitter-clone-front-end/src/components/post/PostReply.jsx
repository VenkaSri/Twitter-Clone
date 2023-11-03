import { usePostEditorContext } from "@/context/home/post-editor-context";
import { useEffect, useRef, useState } from "react";
import ProfilePicture from "../ProfilePicture";
import { PostInputField } from "./PostInputField";
import RoundedTextButton from "../RoundedTextButton";
import clsx from "clsx";
import { PostEditorMedia } from "./PostEditorMedia";
import { useTheme } from "@/hooks/useTheme";
import { PostActions } from "./PostOptions";
import { useSession } from "@/hooks/useSession";

export const PostReply = () => {
  const parentRef = useRef(null);
  const [childHeight, setChildHeight] = useState(48);
  const { currentColor } = useTheme();
  const { profilePicture } = useSession();
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
  } = usePostEditorContext();
  useEffect(() => {
    if (parentRef.current && childHeight !== null) {
      parentRef.current.style.height = `${childHeight + 15}px`;
    }
  }, [childHeight]);
  const handleReply = () => {
    console.log("hi");
  };

  return (
    <div className="z-[1]">
      <div></div>
      <div className="pt-1 pb-3 flex flex-col">
        {isInputActive && (
          <div className="min-h-[12px] px-4 flex">
            <div className="flex basis-10 mr-3"></div>
            <div className="flex grow text-[#536471]">
              Replying to&nbsp;
              <span className="text-primary">@fdsaf</span>
            </div>
          </div>
        )}
        <div className="min-h-[12px] px-4 flex">
          <div className="pt-3 mr-3 flex flex-col basis-10">
            <ProfilePicture src={profilePicture} />
          </div>
          <div className="flex flex-col grow pt-1">
            <div className="flex">
              <div
                className="flex max-h-[720px] grow relative min-h-[48px]"
                ref={parentRef}
              >
                <PostInputField
                  onHeightChange={setChildHeight}
                  placeholder={"Post your reply"}
                />
              </div>
              {!isInputActive && (
                <div className="centered-column-container">
                  <RoundedTextButton
                    text="Reply"
                    className="ml-3 min-w-[36px] min-h-[36px] px-4 text-17 font-cBold border-transparent text-white"
                    disabled={!validPost}
                    style={{ backgroundColor: currentColor }}
                  />
                </div>
              )}
            </div>
            <div
              className={clsx({ "mt-4": isInputActive && paths.length > 0 })}
            >
              <PostEditorMedia uploadedImages={paths} />
            </div>
            {isInputActive && <PostActions isReply />}
          </div>
        </div>
      </div>
    </div>
  );
};
