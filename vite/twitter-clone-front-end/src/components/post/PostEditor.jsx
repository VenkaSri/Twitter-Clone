import ProfilePicture from "@/components/ProfilePicture";
import RoundedTextAndIconButton from "@/components/RoundedTextAndIconButton";
import { Close, DownArrow, Globe } from "@/components/icons/Icons";
import { usePostEditorContext } from "@context/home/post-editor-context";
import LinearProgress from "@mui/material/LinearProgress";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { PostInputField } from "@components/post/PostInputField";
import { PostEditorMedia } from "@components/post/PostEditorMedia";
import { usePostEditorState } from "@/hooks/post/usePostEditorState";
import { useSession } from "@/hooks/useSession";
import { PostAttachments } from "./PostAttachments";
import CharactersProgress from "./CharactersProgress";
import { POST_BUTTON_VALUE } from "@/constants/app";
import RoundedTextButton from "../RoundedTextButton";
import { Link } from "react-router-dom";

const SnackbarMessage = ({ username, postId }) => (
  <div className="br flex w-full text-[17px] font-cReg grow ">
    <span className="flex grow justify-center">Your post was sent.</span>
    <Link className="flex " to={`${username}/status/${postId}`}>
      snacks
    </Link>
  </div>
);

export const PostEditor = () => {
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
  } = usePostEditorContext();
  const [childHeight, setChildHeight] = usePostEditorState(48);
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
        // dispatch(snackbarSliceActions.setIsError(true));
        // dispatch(
        //   snackbarSliceActions.setMessage(
        //     <SnackbarMessage username={username} postId={response.postId} />
        //   )
        // );
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
            <ProfilePicture />
          </div>
          <div className="pt-1 flex flex-col  w-full max-w-full  basis-auto ">
            <div className="pt-1 flex flex-col  z-[1] relative">
              {isInputActive && (
                <div
                  className={clsx("pb-3 flex relative items-center", {
                    "hidden :": isLoading,
                  })}
                >
                  <RoundedTextAndIconButton
                    text="Everyone"
                    className="border border-[#cfd9de] dark:border-[#536471] min-w-[24px] min-h-[24px] hover:bg-[#1d9bf0]/10 text-primary text-[14px]"
                    icon={<DownArrow className="w-[18px]  mr-1 fill-primary" />}
                    iconPosition="end"
                  />
                </div>
              )}

              <div
                className="flex max-h-[720px] grow relative min-h-[48px]"
                ref={parentRef}
              >
                <PostInputField
                  onHeightChange={setChildHeight}
                  placeholder={"What's happening?!"}
                />
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
                    <RoundedTextAndIconButton
                      text="Everyone can reply"
                      className="min-w-[24px] min-h-[24px] border border-[#cfd9de] dark:border-[#536471] text-[14px]"
                      icon={<Globe className="w-[16px] fill-primary" />}
                      iconPosition="start"
                      disabled
                    />
                  )}
                </div>
              </div>
              <div
                className={`-ml-2 mt-1 h-[48px] flex items-center justify-between `}
              >
                <PostAttachments />
                <div className="h-[36px] flex   items-center ">
                  {hasUserTyped && (
                    <>
                      <CharactersProgress />
                      <div className=" mr-3 ml-[10px] h-[31px]  w-[1px] bg-[#b9cad3]"></div>
                      <div className="border border-[#cfd9de] min-h-[24px] min-w-[24px] rounded-full flex flec-col justify-center items-center">
                        <Close className="fill-primary" />
                      </div>
                    </>
                  )}

                  <RoundedTextButton
                    text={POST_BUTTON_VALUE}
                    className="ml-3 min-w-[36px] min-h-[36px] px-4 text-17 font-cBold"
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