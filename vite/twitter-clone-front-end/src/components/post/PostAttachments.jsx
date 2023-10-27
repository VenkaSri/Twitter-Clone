import clsx from "clsx";
import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import { usePostEditorContext } from "@/context/home/post-editor-context";
import { useMediaUpload } from "@/hooks/useMediaUpload";
import { ATTACHMENTS } from "./ATTACHEMENTS";
import { useEffect } from "react";

const AttachmentButton = ({
  text,
  action,
  isDisabled,
  isReply,
  icon: Icon,
}) => {
  return (
    <button
      className={clsx(
        isDisabled ? "button--icon-rounded-disabled " : "button--icon-rounded",
        {
          "max-[688px]:hidden": text === "Poll" || text === "Schedule",
          hidden: isReply && (text === "Poll" || text === "Schedule"),
        }
      )}
      onClick={action}
      disabled={isDisabled}
    >
      <Icon className="w-5 fill-primary" />
    </button>
  );
};

export const PostAttachments = ({ isReply }) => {
  const { open, getInputProps, mediaFiles, error, setError } = useMediaUpload();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };
  const { setPaths, paths, setValidPost } = usePostEditorContext();
  const attachmentsList = ATTACHMENTS(open, paths.length);

  useEffect(() => {
    const fileURLs = mediaFiles.map((file) => URL.createObjectURL(file));
    if (mediaFiles) setPaths(fileURLs);
  }, [mediaFiles, setPaths]);

  return (
    <div className="flex">
      <input {...getInputProps()} style={{ display: "none" }} />
      {attachmentsList.map((attachment) => (
        <AttachmentButton
          key={attachment.text}
          {...attachment}
          isDisabled={attachment.isDisabled}
          isReply={isReply}
          icon={attachment.icon}
        />
      ))}
      <Snackbar
        ContentProps={{
          sx: {
            backgroundColor: "var(--primary-color)",
          },
        }}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={error}
        onClose={handleClose}
        TransitionComponent={Fade}
        message="Please choose 1 GIF or up to 4 photos."
      />
    </div>
  );
};
