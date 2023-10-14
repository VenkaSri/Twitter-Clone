import React, { useEffect, useState } from "react";

import getIcon from "../utils/icons/iconsutil";
import { useTheme } from "../hooks/useTheme";
import ProfilePicture from "../components/ProfilePicture";
import { useSession } from "../hooks/useSession";
import { useNavigate, useParams } from "react-router-dom";
import { StepHeader } from "../components/dialog/signup/steps/StepHeader";
import DialogHeader from "../components/dialog/DialogHeader";
import { DialogHeaderContent } from "../components/dialog/signup/header/DialogHeaderContent";
import { MainColumnHeader } from "../components/layout/MainColumnHeader";
import { useGetPostByIDQuery } from "../services/post/postApi";
import { Post } from "../components/post/Post";

export const Status = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data, error, isLoading, isSuccess } = useGetPostByIDQuery(postId);
  if (isSuccess) {
    console.log(data);
  }
  return (
    <>
      <div className="sticky -top-[0.5px] bg-white/[.85] dark:bg-black/[.65] dark:bg-black z-[2]  backdrop-blur-md">
        <MainColumnHeader onClick={() => navigate(-1)} />
      </div>
      {isSuccess && <Post postData={data} />}
    </>
  );
};
