import React, { useState } from "react";
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

const TweetSection = () => {
  const isVisible = false;
  // const hasUserTyped = useSelector(
  //   (state) => state.rootReducer.tweetState.hasUserTyped
  // );
  const { photoSRC } = useSession();

  const { setNumOfChars } = useTweetSectionContext();

  const handleChange = (e) => {
    const newValue = e.target.value;
    setNumOfChars(newValue.length);
  };
  return (
    <div className="flex border-b border-b-[#eff3f4] px-[16px] pt-[4px]">
      <div className="pt-[12px] mr-[12px]">
        <ProfilePicture source={photoSRC} size={40} />
      </div>
      <div className="pt-[4x]">
        <div className="pt-[4px]">
          <div className="pb-[12px]">
            {/* {isVisible && <Button buttonProps={everyoneButton} />} */}
          </div>

          <div className="flex ">
            <TextareaAutosize
              placeholder="What is happening?!"
              className="w-full outline-none leading-6 text-[20px]"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="-ml-3 py-2">
          {/* {isVisible && <Button buttonProps={whoCanReplyButton} />} */}
        </div>
        <div
          className={`-ml-2 mt-1 ${
            isVisible && "border-t border-t-[#eff3f4]"
          } w-[514px] h-[48px] flex items-center justify-between `}
        >
          <TweetOptions />
          <div
            className={`-ml-2 mt-1 ${
              isVisible && "border-t border-t-[#eff3f4]"
            } w-[514px] h-[48px] flex items-center justify-between `}
          >
            <div className="h-[36px] flex  gap-[10px] items-center br">
              {true && <CharactersProgress />}

              <div></div>
              <RoundedButton
                styles={"min-w-[36px] min-h-[36px] px-8 header--newPostButton"}
                btnContent="Post"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetSection;
