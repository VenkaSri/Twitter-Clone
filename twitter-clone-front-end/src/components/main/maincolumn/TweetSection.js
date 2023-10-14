import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
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
import { postData } from "../../../services/postData";
import { LinearProgress } from "@mui/material";
import { Snackbar } from "../../modal/Snackbar";
import { snackbarSliceActions } from "../../../state/modal/snackbarSlice";
import { Link } from "react-router-dom";

const SnackbarMessage = ({ username, postId }) => (
  <div className="br flex w-full text-[17px] font-cReg grow ">
    <span className="flex grow justify-center">Your post was sent.</span>
    <Link className="flex " to={`${username}/status/${postId}`}>
      snacks
    </Link>
  </div>
);

const TweetSection = () => {
  const dispatch = useDispatch();
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
  const { photoSRC } = useSession();
  const [childHeight, setChildHeight] = useState(48);
  const parentRef = useRef(null);
  const { username } = useSession();
  useEffect(() => {
    if (parentRef.current && childHeight !== null) {
      parentRef.current.style.height = `${childHeight + 15}px`;
    }
  }, [childHeight]);

  const post = async () => {
    setIsLoading(true);
    const formData = new FormData();
    mediaFiles.forEach((file, index) => {
      formData.append("photos", file);
    });
    formData.append("text", postText);
    const result = await fetch("http://localhost:8080/api/v1/posts", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (result.ok) {
      const response = await result.json();
      if (response.status === 200) {
        console.log(response.postId);
        setPostCreated(true);
        resetStates();
        dispatch(snackbarSliceActions.setIsError(true));
        dispatch(
          snackbarSliceActions.setMessage(
            <SnackbarMessage username={username} postId={response.postId} />
          )
        );
      }
    } else {
      // Handle error
    }
  };

  return (
    <>
      {isLoading && (
        <div className="h-[3px]">
          <LinearProgress
            sx={{
              "& .MuiLinearProgress-bar": {
                backgroundColor: "var(--primary-color)",
              },
            }}
          />
        </div>
      )}
      <div className="mobile:flex hidden border-b border-b-[#eff3f4] px-[16px] dark:border-b-[var(--primary-dark-border-color)] dark:bg-black w-full relative ">
        {isLoading && (
          <div className="absolute flex grow left-0 right-0 bottom-0 top-0 bg-white/40 z-[3]"></div>
        )}
        <div className="flex max-w-full grow">
          <div className="pt-[12px] mr-[12px] flex basis-auto">
            <ProfilePicture size={44} isPrincipleUser />
          </div>
          <div className="pt-1 flex flex-col  w-full max-w-full  basis-auto ">
            <div className="pt-1 flex flex-col  z-[1] relative">
              {isInputActive && (
                <div
                  className={clsx("pb-3 flex relative", {
                    "hidden :": isLoading,
                  })}
                >
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
                className="flex max-h-[720px] grow relative min-h-[48px]"
                ref={parentRef}
              >
                <PostEditor onHeightChange={setChildHeight} />
              </div>
              <div
                className={clsx({ "mt-4": isInputActive && paths.length > 0 })}
              >
                <PostEditorMedia uploadedImages={paths} />
              </div>
            </div>
            <div
              className={clsx("flex flex-col  sticky bottom-0 z-[2] bg-white", {
                "": isInputActive,
                hidden: isLoading,
              })}
            >
              <div className="-ml-3">
                <div
                  className={clsx("flex", {
                    "border-b border-b-[#eff3f4] dark:border-b-[var(--primary-dark-border-color)] pb-3 ":
                      isInputActive,
                  })}
                >
                  {isInputActive && (
                    <RoundedButton
                      styles="button--rounded-audience "
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
                    onClick={post}
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
    </>
  );
};

export default TweetSection;
