import { useGetPostByIDQuery } from "@/services/postApi";
import { useNavigate, useParams } from "react-router-dom";
import { Back } from "../icons/Icons";
import { Post } from "@components/post/Post";
import { OverlayLoader } from "../dialog/OverlayLoader";
import Head from "../head/Head";
import { MainSectionHeader } from "../layout/MainSectionHeader";

export const ViewPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data, error, isLoading, isSuccess } = useGetPostByIDQuery(postId);

  return (
    <>
      <MainSectionHeader text="Post" />
      {isSuccess && <Post postData={data} />}
      {isLoading && <OverlayLoader />}
    </>
  );
};
