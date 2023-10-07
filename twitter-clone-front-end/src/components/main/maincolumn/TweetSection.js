import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import ProfilePicture from "../../ProfilePicture";
import DefaultAvatar from "../../../assets/images/avatars/default_avi.png";
import Button from "../../UI/button/Button";
import { useSession } from "../../../hooks/useSession";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CharactersProgress from "./CharactersProgress";
import TweetOptions from "./TweetOptions";
import RoundedButton from "../../RoundedButton";
import TweetSectionContext, {
  useTweetSectionContext,
} from "../../../context/TweetSectionCtx";
import { CHARACTER_LIMIT, POST_BUTTON_VALUE } from "../../../constants";
import Field from "./PostEditor";
import getIcon from "../../../utils/icons/iconsutil";
import clsx from "clsx";
import { DialogHeaderLogo } from "../../dialog/signup/header/DialogHeaderLogo";
import PostEditor from "./PostEditor";
import { useEditorState } from "../../../hooks/useEditorState";
import { ImagesearchRollerRounded } from "@mui/icons-material";
import { PostEditorMedia } from "../../post/compose/PostEditorMedia";

const TweetSection = () => {
  const { hasUserTyped, isInputActive, validPost } = useTweetSectionContext();
  const { photoSRC } = useSession();
  const [childHeight, setChildHeight] = useState(48);
  const { imgSrc, paths } = useTweetSectionContext();
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current && childHeight !== null) {
      parentRef.current.style.height = `${childHeight}px`;
    }
  }, [childHeight]);

  return (
    <div className="mobile:flex hidden border-b border-b-[#eff3f4] px-[16px] dark:border-b-[var(--primary-dark-border-color)] dark:bg-black w-full relative ">
      <div className="flex max-w-full grow">
        <div className="pt-[12px] mr-[12px] flex basis-auto">
          <ProfilePicture source={photoSRC} size={44} />
        </div>
        <div className="pt-1 flex flex-col  w-full max-w-full  basis-auto ">
          <div className="pt-1 flex flex-col  z-[1] relative ">
            {isInputActive && (
              <div className="pb-3 flex relative">
                <RoundedButton
                  styles="button--rounded-audience border border-[#cfd9de] dark:border-[#536471]"
                  btnContent={{
                    text: (
                      <span className="text-[14px] leading-4 font-cBold">
                        Everyone
                      </span>
                    ),

                    icon: {
                      icon: getIcon("Down_Arrow", {
                        width: 16,
                        fill: "var(--primary-color)",
                      }),
                      iconPosition: "end",
                    },
                  }}
                />
              </div>
            )}

            <div
              className="flex max-h-[720px] grow relative min-h-[56px]"
              ref={parentRef}
            >
              <PostEditor onHeightChange={setChildHeight} />
            </div>
            <PostEditorMedia uploadedImages={paths} />
          </div>
          <div className="flex flex-col  sticky bottom-0 z-[2] bg-white ">
            <div className="-ml-3">
              <div
                className={clsx("flex pb-3 ", {
                  "border-b border-b-[#eff3f4] dark:border-b-[var(--primary-dark-border-color)] mt-6":
                    isInputActive,
                })}
              >
                {isInputActive && (
                  <RoundedButton
                    styles="button--rounded-audience"
                    btnContent={{
                      text: (
                        <span className="text-[14px] leading-4 font-cBold">
                          Everyone can reply
                        </span>
                      ),

                      icon: {
                        icon: getIcon("Globe", {
                          width: 16,
                          fill: "var(--primary-color)",
                        }),
                        iconPosition: "start",
                      },
                    }}
                  />
                )}
              </div>
            </div>
            <div
              className={`-ml-2 mt-1 h-[48px] flex items-center justify-between `}
            >
              <TweetOptions />
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
                  styles={
                    "ml-3 min-w-[36px] min-h-[36px] px-4 header--newPostButton"
                  }
                  btnContent={POST_BUTTON_VALUE}
                  isDisabled={!validPost}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetSection;
