import { useGetPostByIDQuery } from "@/services/postApi";
import { useParams } from "react-router-dom";
import { Post } from "@components/post/Post";
import { OverlayLoader } from "../dialog/OverlayLoader";
import { MainSectionHeader } from "../layout/MainSectionHeader";
import { useViewContext } from "@/context/home/view-context";
import { useEffect } from "react";

export const ViewPost = () => {
  const { postId } = useParams();
  const { data, isLoading, isSuccess } = useGetPostByIDQuery(postId);
  const { setIsHomeView } = useViewContext();

  useEffect(() => {
    setIsHomeView(false);
    return () => {
      setIsHomeView(true);
    };
  }, [setIsHomeView]);

  return (
    <>
      <MainSectionHeader text="Post" />
      {isSuccess && <Post postData={data} />}
      {isLoading && <OverlayLoader />}
    </>
  );
};
