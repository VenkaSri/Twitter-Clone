import IconButton from "../../UI/button/IconButton";
import getIcon from "../../../utils/icons/iconsutil";
import clsx from "clsx";
import ATTACHMENTS from "../../../constants/post/attachments";
import { useMediaUpload } from "../../../hooks/useMediaUpload";
import { useDropzone } from "react-dropzone";
import { useEditorState } from "../../../hooks/useEditorState";
import { useEffect } from "react";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";

const AttachmentButton = ({ text, action }) => {
  return (
    <div
      role="button"
      className={clsx("button--icon-rounded", {
        "max-[688px]:hidden": text === "Poll" || text === "Schedule",
      })}
      onClick={action}
    >
      {getIcon(text, { width: 20, fill: "var(--primary-color)" })}
    </div>
  );
};

const TweetOptions = () => {
  const { open, getInputProps, acceptedFiles } = useMediaUpload();
  const attachmentsList = ATTACHMENTS(open);
  const { setImgSrc, setPaths, paths } = useTweetSectionContext();

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const fileURLs = acceptedFiles.map((file) => URL.createObjectURL(file));
      setPaths(fileURLs);
    }
  }, [acceptedFiles, setPaths]);
  console.log(paths);
  return (
    <div className="flex">
      <input {...getInputProps()} style={{ display: "none" }} />
      {attachmentsList.map((attachment) => (
        <AttachmentButton key={attachment.text} {...attachment} />
      ))}
    </div>
  );
};

export default TweetOptions;
