import clsx from "clsx";
import getIcon from "../../../utils/icons/iconsutil";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";

const ImageContainer = ({ src, isGridLayout }) => {
  const { paths, setPaths } = useTweetSectionContext();

  const handleRemoveFile = (src) => {
    const filesRemaining = paths.filter((file) => file !== src);
    setPaths(filesRemaining);
  };

  return (
    <div
      className={clsx("flex grow rounded-[16px] overflow-hidden relative ", {
        "aspect-ratio": isGridLayout,
      })}
    >
      <div className="z-[2] absolute w-full h-full">
        <div
          className="button--media-action min-w-[30px] min-h-[30px] right-1 top-1 "
          onClick={() => handleRemoveFile(src)}
        >
          {getIcon("Close", { fill: "white", width: 18 })}
        </div>
        <div className="button--media-action  min-w-[32px] min-h-[32px] right-1 bottom-1 px-4">
          <span className="font-cBold text-white">Edit</span>
        </div>
      </div>

      <div className="flex grow ">
        <img className="object-cover" alt={`Uploaded`} src={src} />
      </div>
    </div>
  );
};

const ImageLayout = ({ imgs }) => {
  if (imgs.length === 4) {
    return (
      <div className="flex">
        <div className="flex flex-col flex-1 gap-2 mr-2">
          <ImageContainer src={imgs[0]} isGridLayout />
          <ImageContainer src={imgs[1]} isGridLayout />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <ImageContainer src={imgs[3]} isGridLayout />
          <ImageContainer src={imgs[2]} isGridLayout />
        </div>
      </div>
    );
  }

  if (imgs.length === 3) {
    return (
      <div className="flex">
        <div className="flex flex-col flex-1 gap-2 mr-2">
          <ImageContainer src={imgs[0]} isGridLayout />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <ImageContainer src={imgs[1]} isGridLayout />
          <ImageContainer src={imgs[2]} isGridLayout />
        </div>
      </div>
    );
  }

  if (imgs.length === 2) {
    return (
      <div className="flex">
        <div className="flex flex-col flex-1 gap-2 mr-2">
          <ImageContainer src={imgs[0]} />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <ImageContainer src={imgs[1]} />
        </div>
      </div>
    );
  }

  if (imgs.length === 1) {
    return <ImageContainer src={imgs[0]} />;
  }

  return null;
};

export const PostEditorMedia = ({ uploadedImages }) => {
  return (
    <>
      <ImageLayout imgs={uploadedImages} />
    </>
  );
};
