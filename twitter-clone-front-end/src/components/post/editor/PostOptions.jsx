import { usePostEditorContext } from "@/context/home/post-editor-context";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import RoundedTextAndIconButton from "../../RoundedTextAndIconButton";
import { Close, Globe } from "../../icons/Icons";
import { PostAttachments } from "./PostAttachments";
import { CharactersProgress } from "./CharactersProgress";
import RoundedTextButton from "../../RoundedTextButton";
import { POST_BUTTON_VALUE } from "@/constants/app";
import PropTypes from "prop-types";

export const PostActions = ({ isReply }) => {
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
  const { currentColor, darkMode } = useTheme();
  return (
    <div
      className={clsx(
        "flex flex-col  sticky bottom-0 z-[2] bg-white dark:bg-black",
        {
          "": isInputActive,
          hidden: isLoading,
        }
      )}
    >
      <div className={clsx("-ml-3", { hidden: isReply })}>
        <div
          className={clsx("flex", {
            "border-b border-b-[#eff3f4] dark:border-b-[#2f3336] pb-3 ":
              isInputActive,
          })}
        >
          {isInputActive && (
            <RoundedTextAndIconButton
              text="Everyone can reply"
              className="min-w-[24px] min-h-[24px] border border-[#cfd9de] dark:border-[#536471] text-[14px] text-primary"
              icon={<Globe className="w-[16px] fill-primary" />}
              iconPosition="start"
              disabled
            />
          )}
        </div>
      </div>
      <div className={`-ml-2 mt-1 h-[48px] flex items-center justify-between `}>
        <PostAttachments isReply />
        <div className="h-[36px] flex   items-center ">
          {hasUserTyped && (
            <>
              <CharactersProgress />
              <div
                className=" mr-3 ml-[10px] h-[31px]  w-[1px]"
                style={{ backgroundColor: darkMode ? "#2f3336" : "#b9cad3" }}
              ></div>
              <div className="border border-[#cfd9de] min-h-[24px] min-w-[24px] rounded-full flex flec-col justify-center items-center">
                <Close className="fill-primary w-5" />
              </div>
            </>
          )}

          <RoundedTextButton
            text={isReply ? "Reply" : POST_BUTTON_VALUE}
            className="ml-3 min-w-[36px] min-h-[36px] px-4 text-17 font-cBold border-transparent text-white"
            disabled={!validPost}
            style={{ backgroundColor: currentColor }}
            onClick={post}
          />
        </div>
      </div>
    </div>
  );
};

PostActions.propTypes = {
  isReply: PropTypes.bool,
};
