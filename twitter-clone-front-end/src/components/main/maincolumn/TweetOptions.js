import getIcon from "../../../utils/icons/iconsutil";
import clsx from "clsx";
import ATTACHMENTS from "../../../constants/post/attachments";
import { useMediaUpload } from "../../../hooks/useMediaUpload";
import { useEffect } from "react";
import { useTweetSectionContext } from "../../../context/TweetSectionCtx";

const AttachmentButton = ({ text, action, isDisabled }) => {
  return (
    <button
      className={clsx(
        isDisabled ? "button--icon-rounded-disabled " : "button--icon-rounded",
        {
          "max-[688px]:hidden": text === "Poll" || text === "Schedule",
        }
      )}
      onClick={action}
      disabled={isDisabled}
    >
      {getIcon(text, { width: 20, fill: "var(--primary-color)" })}
    </button>
  );
};

const TweetOptions = () => {
  const { open, getInputProps, acceptedFiles } = useMediaUpload();
  const { setPaths, paths } = useTweetSectionContext();
  const attachmentsList = ATTACHMENTS(open, paths.length);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const fileURLs = acceptedFiles.map((file) => URL.createObjectURL(file));
      setPaths((prevURLs) => [...prevURLs, ...fileURLs]);
    }
  }, [acceptedFiles, setPaths]);
  return (
    <div className="flex">
      <input {...getInputProps()} style={{ display: "none" }} />
      {attachmentsList.map((attachment) => (
        <AttachmentButton
          key={attachment.text}
          {...attachment}
          isDisabled={attachment.isDisabled}
        />
      ))}
    </div>
  );
};

export default TweetOptions;
