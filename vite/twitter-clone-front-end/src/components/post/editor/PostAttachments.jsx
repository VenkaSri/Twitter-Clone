import clsx from "clsx";
import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import { usePostEditorContext } from "@/context/home/post-editor-context";
import { useMediaUpload } from "@/hooks/useMediaUpload";
import PropTypes from "prop-types";
import { ATTACHMENTS } from "./ATTACHEMENTS";
import { useEffect } from "react";
import { RoundedIconButton } from "../../RoundedIconButton";

export const PostAttachments = ({ isReply }) => {
  const { open, getInputProps, mediaFiles, error, setError } = useMediaUpload();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };
  const { setPaths, paths, setValidPost } = usePostEditorContext();
  const attachmentsList = isReply
    ? ATTACHMENTS(open, paths.length).filter((attachment) =>
        ["Media", "GIF", "Emoji", "Tag Location"].includes(attachment.text)
      )
    : ATTACHMENTS(open, paths.length);

  useEffect(() => {
    const fileURLs = mediaFiles.map((file) => URL.createObjectURL(file));
    if (mediaFiles) setPaths(fileURLs);
  }, [mediaFiles, setPaths]);

  return (
    <div className="flex">
      <input {...getInputProps()} style={{ display: "none" }} />
      {attachmentsList.map((attachment) => (
        <RoundedIconButton
          className={clsx(
            "min-h-[36px] min-w-[36px] fill-primary border-transparent hover:bg-[#E8F5FE] dark:hover:bg-[#1d9cf0]/10",
            {
              "max-[688px]:hidden":
                attachment.text === "Poll" || attachment.text === "Schedule",
            }
          )}
          key={attachment.text}
          isDisabled={attachment.isDisabled}
          isReply={isReply}
          icon={attachment.icon}
          onClick={open}
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

PostAttachments.propTypes = {
  isReply: PropTypes.bool,
};
