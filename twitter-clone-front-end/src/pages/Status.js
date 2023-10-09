import React, { useEffect, useState } from "react";

import getIcon from "../utils/icons/iconsutil";
import { useTheme } from "../hooks/useTheme";
import ProfilePicture from "../components/ProfilePicture";
import { useSession } from "../hooks/useSession";
import { useParams } from "react-router-dom";
import { StepHeader } from "../components/dialog/signup/steps/StepHeader";
import DialogHeader from "../components/dialog/DialogHeader";
import { DialogHeaderContent } from "../components/dialog/signup/header/DialogHeaderContent";
import { MainColumnHeader } from "../components/layout/MainColumnHeader";
import { useGetPostByIDQuery } from "../services/post/postApi";
import { Post } from "../components/post/Post";

export const Status = () => {
  const [showHeader, setShowHeader] = useState("");
  const darkMode = useTheme();
  const { photoSRC } = useSession();
  const { username, postId } = useParams();
  const { data, error, isLoading } = useGetPostByIDQuery(postId);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
        <MainColumnHeader />
      </div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Post postText={data.text} />
        </>
      ) : null}
    </>
  );
};
